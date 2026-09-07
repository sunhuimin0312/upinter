const AppState = {
  currentTab: 'seeding',
  currentMonth: CONFIG.ui.currentMonth,
  seedingMonthFilter: CONFIG.ui.currentMonth,
  filters: {
    month: CONFIG.ui.currentMonth.toString(),
    type: 'all',
    brand: 'all',
    sort: 'date',
    search: ''
  },
  data: null,
  loaded: false
};

function formatNumber(num) {
  if (num === null || num === undefined || num === '') return '—';
  const n = typeof num === 'string' ? parseInt(num.replace(/,/g, ''), 10) : num;
  if (isNaN(n)) return num.toString();
  if (n >= 10000) {
    return (n / 10000).toFixed(n % 10000 === 0 ? 0 : 1) + '만';
  }
  return n.toLocaleString(CONFIG.ui.numberFormat);
}

function formatNumberRaw(num) {
  if (num === null || num === undefined || num === '') return '—';
  const n = typeof num === 'string' ? parseInt(num.replace(/,/g, ''), 10) : num;
  if (isNaN(n)) return num.toString();
  return n.toLocaleString(CONFIG.ui.numberFormat);
}

function monthLabel(m) { return m + '월'; }
function statusBadgeClass(status) {
  if (status === '모집 중') return 'status-badge status-recruit';
  if (status === '검수·배포') return 'status-badge status-distribute';
  if (status === '완료') return 'status-badge status-done';
  return 'status-badge status-distribute';
}
function brandStatusClass(s) {
  if (s === 'recruit') return 'status-recruit';
  if (s === 'distribute') return 'status-distribute';
  if (s === 'done') return 'status-done';
  return '';
}

function renderSeeding() {
  const d = AppState.data;
  const ov = d.seedingOverview;

  const currentMonth = ov.month;
  const nextMonth = currentMonth + 1;

  document.getElementById('currentMonthTag').textContent = monthLabel(currentMonth);
  document.getElementById('currentMonthFull').textContent = monthLabel(currentMonth);
  document.getElementById('monthNavCurrent').textContent = monthLabel(currentMonth);
  document.getElementById('monthNavNext').textContent = monthLabel(nextMonth);

  document.getElementById('statBefore').textContent = formatNumberRaw(ov.beforeCount);
  document.getElementById('statDone').textContent = formatNumberRaw(ov.doneCount);
  document.getElementById('statPercent').textContent = ov.percent + '%';
  document.getElementById('statTarget').textContent = formatNumberRaw(ov.targetCount);
  document.getElementById('statComplete').textContent = formatNumberRaw(ov.completeCount);
  document.getElementById('statCompleteBefore').textContent = formatNumberRaw(ov.completeBefore);

  const brandGrid = document.getElementById('brandGrid');
  const sortedBrands = [...d.brands].sort((a, b) => {
    const pa = a.target > 0 ? a.done / a.target : 0;
    const pb = b.target > 0 ? b.done / b.target : 0;
    return pb - pa;
  });
  brandGrid.innerHTML = sortedBrands.map(b => {
    const percent = b.target > 0 ? Math.round((b.done / b.target) * 100) : 0;
    return `
      <article class="brand-card">
        <div class="brand-name">${b.name}</div>
        <div class="brand-progress">
          <div class="brand-progress-bar">
            <div class="brand-progress-fill" style="width:${percent}%"></div>
          </div>
          <div class="brand-progress-percent">${percent}%</div>
        </div>
        <div class="brand-stats">
          <span class="brand-stat-label">배포 전</span>
          <span class="brand-stat-value before">${b.before}</span>
        </div>
        <div class="brand-stats" style="margin-top:4px">
          <span class="brand-stat-label">완료 · 대상</span>
          <span class="brand-stat-value done">${b.done} · ${b.target}</span>
        </div>
      </article>
    `;
  }).join('');

  document.getElementById('contentDeployBanner').style.display = 'block';
  document.getElementById('contentDeployText').textContent = '컨텐츠 배포 필요 수량 60 · 방문 완료 5명 · 배포 전 19 · 모집 중 · 김해 에스테틱';

  const pipelineRow = document.getElementById('pipelineRow');
  pipelineRow.innerHTML = `
    <div class="pipeline-card">
      <div class="pipeline-label">신청</div>
      <div class="pipeline-value">${formatNumberRaw(ov.applyCount)}</div>
      <div class="pipeline-sub">총 신청 인원</div>
    </div>
    <div class="pipeline-card">
      <div class="pipeline-label">방문</div>
      <div class="pipeline-value">${formatNumberRaw(ov.visitCount)} <span style="font-size:14px;color:var(--text-tertiary)">/ ${formatNumberRaw(ov.visitSelectCount)}</span></div>
      <div class="pipeline-sub">선정 대비 <span class="pos">${ov.visitPercent}%</span></div>
    </div>
    <div class="pipeline-card">
      <div class="pipeline-label">배포</div>
      <div class="pipeline-value">${formatNumberRaw(ov.deployDoneCount)}</div>
      <div class="pipeline-sub">완료 <span class="pos">${ov.deployPercent}%</span> · 전 <span class="neg">${ov.deployNotPercent}%</span></div>
    </div>
  `;

  renderSeedingTable();
  renderSeptemberPlans();
}

function renderSeedingTable() {
  const filter = AppState.seedingMonthFilter;
  let records = AppState.data.seedingRecords.slice();
  if (filter !== 'all') {
    records = records.filter(r => r.month === parseInt(filter, 10));
  }
  records.sort((a, b) => {
    const ratio = (r) => {
      if (!r.visitConfirm || r.deploy == null || r.deploy === '') return -1;
      return r.deploy / r.visitConfirm;
    };
    return ratio(b) - ratio(a);
  });
  const tbody = document.getElementById('seedingTableBody');
  tbody.innerHTML = records.map(r => `
    <tr>
      <td>${r.month}월</td>
      <td>${r.brand}</td>
      <td><span class="${statusBadgeClass(r.status)}">${r.status}</span></td>
      <td class="num">${formatNumberRaw(r.visitConfirm)}</td>
      <td class="num">${formatNumberRaw(r.deploy)}</td>
      <td class="num">${formatNumberRaw(r.before)}</td>
      <td class="num">${formatNumberRaw(r.progressCount)}</td>
      <td class="num">${formatNumberRaw(r.apply)}</td>
      <td class="num">${formatNumberRaw(r.select)}</td>
    </tr>
  `).join('');
}

function renderSeptemberPlans() {
  const plans = AppState.data.septemberPlans;
  const beforeList = document.getElementById('planBeforeList');
  const recruitList = document.getElementById('planRecruitList');
  document.getElementById('planBeforeSummary').textContent = plans.before.summary;
  document.getElementById('planRecruitSummary').textContent = plans.recruit.summary;

  beforeList.innerHTML = plans.before.items.map(i => `
    <li>
      <span class="plan-brand">${i.brand}</span>
      <span class="plan-slot">${i.slot}</span>
    </li>
  `).join('');

  recruitList.innerHTML = plans.recruit.items.map(i => `
    <li>
      <span class="plan-brand">${i.brand}</span>
      <span class="plan-slot">${i.slot}</span>
    </li>
  `).join('');
}

function renderContent() {
  const d = AppState.data;
  const ov = d.contentOverview;

  document.getElementById('contentMonth').textContent = monthLabel(ov.month);
  document.getElementById('contentMonthCurrent').textContent = monthLabel(ov.month);
  document.getElementById('contentPostCount').textContent = ov.postCount;
  document.getElementById('contentTotalCount').textContent = ov.totalCount;

  const typeBars = document.getElementById('contentTypeBars');
  const typeMax = Math.max(ov.imageCount, ov.videoCount, 1);
  typeBars.innerHTML = `
    <div class="bar-item">
      <span class="bar-label">영상</span>
      <div class="bar-track"><div class="bar-fill video" style="width:${(ov.videoCount / typeMax) * 100}%"></div></div>
      <span class="bar-value">${ov.videoCount}</span>
    </div>
    <div class="bar-item">
      <span class="bar-label">이미지</span>
      <div class="bar-track"><div class="bar-fill image" style="width:${(ov.imageCount / typeMax) * 100}%"></div></div>
      <span class="bar-value">${ov.imageCount}</span>
    </div>
  `;

  const monthlyBars = document.getElementById('contentMonthlyBars');
  const mMax = Math.max(...ov.monthlyPosts.map(m => m.count));
  monthlyBars.innerHTML = ov.monthlyPosts.map(m => `
    <div class="bar-item">
      <span class="bar-label">${m.month}월</span>
      <div class="bar-track"><div class="bar-fill month" style="width:${(m.count / mMax) * 100}%"></div></div>
      <span class="bar-value">${m.count}</span>
    </div>
  `).join('');

  const summaryRow = document.getElementById('contentSummaryRow');
  summaryRow.innerHTML = `
    <div class="content-summary-item">
      <span class="csi-label">${ov.month}월 게시</span>
      <span class="csi-value">${ov.postCount}</span>
      <span class="csi-sub">영상 ${ov.videoCount} · 이미지 ${ov.imageCount}</span>
    </div>
    <div class="content-summary-item">
      <span class="csi-label">누적 게시</span>
      <span class="csi-value">${ov.totalCount}</span>
      <span class="csi-sub">${ov.startMonth}월~${ov.month}월</span>
    </div>
    <div class="content-summary-item">
      <span class="csi-label">팔로워 기여</span>
      <span class="csi-value">${formatNumber(ov.followerContribution)}</span>
      <span class="csi-sub">게시 귀속분</span>
    </div>
    <div class="content-summary-item">
      <span class="csi-label">총 인터랙션</span>
      <span class="csi-value">${formatNumber(ov.totalInteraction)}</span>
      <span class="csi-sub">좋아요 ${formatNumber(ov.totalLikes)} · 저장 ${formatNumber(ov.totalSaves)}</span>
    </div>
    <div class="content-summary-item">
      <span class="csi-label">조회수</span>
      <span class="csi-value">${formatNumber(ov.totalViews)}</span>
      <span class="csi-sub">댓글 ${formatNumber(ov.totalComments)} · 공유 ${formatNumber(ov.totalShares)}</span>
    </div>
  `;

  const brandSel = document.getElementById('filterBrand');
  const existingValue = AppState.filters.brand;
  brandSel.innerHTML = '<option value="all">브랜드 전체</option>' +
    d.allBrands.map(b => `<option value="${b}">${b}</option>`).join('');
  brandSel.value = existingValue;

  renderContentLinks();
  renderPostTable();
}

function renderContentLinks() {
  const links = getFilteredPosts();
  const preview = document.getElementById('contentLinksPreview');
  preview.innerHTML = links.map(l => `
    <a href="${l.link}" class="content-link-card" target="_blank" rel="noopener"${l.link==='#'?' style="pointer-events:none;opacity:0.85;cursor:not-allowed"':''}>
      <div class="clc-title">${l.title}</div>
      <div class="clc-meta">
        <span>${l.brand}</span>
        <span>${l.date}</span>
        <span>👁 ${formatNumber(l.views)}</span>
      </div>
    </a>
  `).join('') || `<div style="grid-column:1/-1;padding:28px;text-align:center;color:var(--text-tertiary)">조건에 맞는 콘텐츠가 없습니다.</div>`;
}

function getFilteredPosts() {
  const f = AppState.filters;
  let posts = AppState.data.posts.slice();
  if (f.month !== 'all') posts = posts.filter(p => String(p.month) === f.month);
  if (f.type !== 'all') posts = posts.filter(p => p.type === f.type);
  if (f.brand !== 'all') posts = posts.filter(p => p.brand === f.brand);
  if (f.search.trim()) {
    const q = f.search.trim().toLowerCase();
    posts = posts.filter(p =>
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.topic && p.topic.toLowerCase().includes(q)) ||
      (p.title && p.title.toLowerCase().includes(q))
    );
  }
  switch (f.sort) {
    case 'interaction': posts.sort((a, b) => b.interaction - a.interaction); break;
    case 'views': posts.sort((a, b) => b.views - a.views); break;
    case 'followers': posts.sort((a, b) => b.followers - a.followers); break;
    case 'saves': posts.sort((a, b) => b.saves - a.saves); break;
    case 'date':
    default:
      posts.sort((a, b) => {
        const [ma, da] = a.date.split('.').map(Number);
        const [mb, db] = b.date.split('.').map(Number);
        if (mb !== ma) return mb - ma;
        return db - da;
      });
  }
  return posts;
}

function renderPostTable() {
  const posts = getFilteredPosts();
  document.getElementById('postCountBadge').textContent = posts.length + '건';
  const tbody = document.getElementById('postTableBody');
  tbody.innerHTML = posts.map(p => `
    <tr>
      <td>${p.date}</td>
      <td><span class="type-badge type-${p.type}">${p.type === 'video' ? '영상' : '이미지'}</span></td>
      <td style="font-weight:600;color:var(--text-primary)">${p.brand}</td>
      <td style="max-width:260px">
        <a href="${p.link}" target="_blank" rel="noopener" class="xhs-topic-link" title="${p.link==='#'?'아직 실제 링크가 등록되지 않았습니다':'小红书 원문으로 이동'}"${p.link==='#'?' style="pointer-events:none;opacity:0.7;cursor:not-allowed;text-decoration:none"':''}>
          <span style="display:inline-flex;align-items:center;gap:6px">
            ${p.link==='#'?'<span style="display:inline-flex;width:14px;height:14px;align-items:center;justify-content:center;font-size:10px;color:var(--text-tertiary)">🔒</span>':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/></svg>'}
            ${p.topic}
          </span>
        </a>
      </td>
      <td class="num">${formatNumberRaw(p.followers)}</td>
      <td class="num" style="color:var(--accent-pink);font-weight:700">${formatNumber(p.interaction)}</td>
      <td class="num">${formatNumberRaw(p.likes)}</td>
      <td class="num">${formatNumberRaw(p.saves)}</td>
      <td class="num">${formatNumberRaw(p.comments)}</td>
      <td class="num">${formatNumberRaw(p.shares)}</td>
      <td class="num">${formatNumber(p.views)}</td>
    </tr>
  `).join('');
}

function renderGrowth() {
  const d = AppState.data.growth;
  document.getElementById('growthMonth').textContent = monthLabel(d.currentMonth);

  const kpiRow = document.getElementById('growthKpiRow');
  const kpiClassMap = {
    followers: 'gkc-followers',
    interaction: 'gkc-interaction',
    likes: 'gkc-likes',
    saves: 'gkc-saves',
    comments: 'gkc-comments'
  };
  kpiRow.innerHTML = d.kpis.map(k => {
    const isUp = k.change > 0;
    return `
      <div class="growth-kpi-card ${kpiClassMap[k.key] || ''}">
        <div class="gkc-label">${k.label}</div>
        <div class="gkc-value">${formatNumber(k.value)}</div>
        <div class="gkc-change ${isUp ? 'up' : 'down'}">
          ${d.currentMonth}월 ${isUp ? '▲' : '▼'} ${isUp ? '+' : ''}${k.change}%
        </div>
      </div>
    `;
  }).join('');

  renderTrendCard(
    'trendInteractionBars',
    d.interactionTrend,
    'value',
    'interaction',
    v => formatNumber(v)
  );
  renderTrendCard(
    'trendFollowerBars',
    d.followerTrend,
    'value',
    'follower',
    v => formatNumberRaw(v)
  );

  renderRatioTrendCard(d.ratioTrend);

  const csRow = document.getElementById('commentShareRow');
  csRow.innerHTML = d.commentShare.map(c => {
    const isUp = c.change > 0;
    return `
      <div class="cs-card">
        <div class="cs-label">${c.label}</div>
        <div class="cs-value">${formatNumber(c.value)}</div>
        <div class="cs-change ${isUp ? 'up' : 'down'}">
          ${d.currentMonth}월 ${isUp ? '▲' : '▼'} ${isUp ? '+' : ''}${c.change}%
        </div>
      </div>
    `;
  }).join('');

  renderGrowthTable(d.monthlyRecords);
}

function renderTrendCard(containerId, data, valueKey, barClass, formatter) {
  const max = Math.max(...data.map(d => d[valueKey]));
  const container = document.getElementById(containerId);
  container.innerHTML = data.map(d => {
    const h = max > 0 ? (d[valueKey] / max) * 100 : 0;
    const changeHtml = d.change !== null ? `
      <span class="trend-change ${d.change >= 0 ? 'up' : 'down'}">
        ${d.change >= 0 ? '▲' : '▼'} ${Math.abs(d.change)}%
      </span>
    ` : '';
    return `
      <div class="trend-bar-group">
        <div class="trend-bar-wrap">
          <div class="trend-bar ${barClass}" style="height:${Math.max(h, 2)}%" data-value="${formatter(d[valueKey])}"></div>
        </div>
        ${changeHtml}
        <span class="trend-month">${d.month}월</span>
      </div>
    `;
  }).join('');
}

function renderRatioTrendCard(data) {
  const max = 20;
  const container = document.getElementById('trendRatioBars');
  container.innerHTML = data.map(d => {
    const h1 = Math.max((d.interactionRate / max) * 100, 3);
    const h2 = Math.max((d.saveRate / max) * 100, 3);
    return `
      <div class="trend-bar-group">
        <div class="trend-bar-wrap">
          <div class="trend-bar value1" style="height:${h1}%" data-value="인터랙션율 ${d.interactionRate}%"></div>
          <div class="trend-bar value2" style="height:${h2}%" data-value="저장율 ${d.saveRate}%"></div>
        </div>
        <span class="trend-month">${d.month}월</span>
      </div>
    `;
  }).join('');
}

function formatChange(val, unit = '%') {
  if (val === null || val === undefined) return '';
  const isUp = val > 0;
  return `<span style="font-size:11px;color:${isUp ? 'var(--accent-green)' : 'var(--accent-orange)'};font-weight:600;margin-left:4px">${isUp ? '▲' : '▼'} ${isUp ? '+' : ''}${val}${unit}</span>`;
}

function renderGrowthTable(records) {
  const tbody = document.getElementById('growthTableBody');
  tbody.innerHTML = records.map(r => `
    <tr>
      <td style="font-weight:700;font-size:15px">${r.month}월</td>
      <td class="num">${formatNumberRaw(r.followers) || '—'}${formatChange(r.followerChange)}</td>
      <td class="num">${formatNumber(r.interaction)}${formatChange(r.interactionChange)}</td>
      <td class="num">${formatNumber(r.likes)}${formatChange(r.likesChange)}</td>
      <td class="num">${formatNumber(r.saves)}${formatChange(r.savesChange)}</td>
      <td class="num">${formatNumberRaw(r.comments)}${formatChange(r.commentsChange)}</td>
      <td class="num">${formatNumberRaw(r.shares)}${formatChange(r.sharesChange)}</td>
      <td class="num">${formatNumber(r.impressions)}</td>
      <td class="num">${formatNumber(r.views)}</td>
      <td class="num">${r.interactionRate !== null && r.interactionRate !== undefined ? r.interactionRate + '%' : '—'}</td>
      <td class="num">${r.saveRate !== null && r.saveRate !== undefined ? r.saveRate + '%' : '—'}</td>
    </tr>
  `).join('');
}

function formatCurrency(num) {
  if (num === null || num === undefined || num === '' || num === 0) return '—';
  const n = typeof num === 'string' ? parseInt(num.replace(/,/g, ''), 10) : num;
  if (isNaN(n)) return num.toString();
  return '₩' + n.toLocaleString('ko-KR');
}
function formatCurrencyPlain(num) {
  if (num === null || num === undefined || num === '' || num === 0) return '—';
  const n = typeof num === 'string' ? parseInt(num.replace(/,/g, ''), 10) : num;
  if (isNaN(n)) return num.toString();
  return n.toLocaleString('ko-KR');
}

AppState.paymentFilters = {
  month: CONFIG.ui.currentMonth.toString(),
  status: 'all',
  brand: 'all',
  sort: 'date',
  search: ''
};

function renderPayment() {
  const d = AppState.data.payments;
  document.getElementById('paymentMonth').textContent = monthLabel(d.overview.month);

  renderPaymentStats();
  renderPaymentBrandFilter();
  renderPaymentStatusCards();
  renderPaymentTable();
}

function getFilteredPayments() {
  const f = AppState.paymentFilters;
  const records = AppState.data.payments.records.slice();
  let list = records.filter(r => r.status !== '취소' || f.status === 'all' || f.status === '취소');
  if (f.month !== 'all') list = list.filter(r => String(r.month) === f.month);
  if (f.status !== 'all') list = list.filter(r => r.status === f.status);
  if (f.brand !== 'all') list = list.filter(r => r.brand === f.brand);
  if (f.search.trim()) {
    const q = f.search.trim().toLowerCase();
    list = list.filter(r =>
      (r.brand && r.brand.toLowerCase().includes(q)) ||
      (r.region && r.region.toLowerCase().includes(q)) ||
      (r.contractType && r.contractType.toLowerCase().includes(q)) ||
      (r.manager && r.manager.toLowerCase().includes(q)) ||
      (r.invoiceNo && r.invoiceNo.toLowerCase().includes(q)) ||
      (r.service && r.service.toLowerCase().includes(q)) ||
      (r.suzRemit && r.suzRemit.toLowerCase().includes(q)) ||
      (r.memo && r.memo.toLowerCase().includes(q))
    );
  }
  switch (f.sort) {
    case 'amount-desc': list.sort((a, b) => b.total - a.total); break;
    case 'amount-asc': list.sort((a, b) => a.total - b.total); break;
    case 'brand': list.sort((a, b) => a.brand.localeCompare(b.brand, 'ko')); break;
    case 'date':
    default:
      const regionOrder = { '서울': 0, '대구': 1, '김해': 2, '부산': 2 };
      const statusOrder = { '완료': 0, '대기': 1, '지연': 2 };
      list.sort((a, b) => {
        const ra = regionOrder.hasOwnProperty(a.region) ? regionOrder[a.region] : 9;
        const rb = regionOrder.hasOwnProperty(b.region) ? regionOrder[b.region] : 9;
        if (ra !== rb) return ra - rb;
        const sa = statusOrder.hasOwnProperty(a.status) ? statusOrder[a.status] : 9;
        const sb = statusOrder.hasOwnProperty(b.status) ? statusOrder[b.status] : 9;
        if (sa !== sb) return sa - sb;
        if (b.month !== a.month) return b.month - a.month;
        return (b.issueDate || '').localeCompare(a.issueDate || '');
      });
  }
  return list;
}

function renderPaymentStats() {
  const records = getFilteredPayments().filter(r => r.total > 0);
  const brandCount = new Set(records.map(r => r.brand)).size;
  const estimateTotal = records.reduce((s, r) => s + r.total, 0);
  const doneTotal = records.reduce((s, r) => s + r.paid, 0);
  const remainTotal = records.reduce((s, r) => s + r.remain, 0);
  const suzCostTotal = records.reduce((s, r) => s + (r.suzCost || 0), 0);
  const marginTotal = records.reduce((s, r) => s + (r.margin || 0), 0);
  const donePercent = estimateTotal > 0 ? Math.round((doneTotal / estimateTotal) * 100) : 0;
  const marginPct = estimateTotal > 0 ? Math.round((marginTotal / estimateTotal) * 100) : 0;
  const remainCount = records.filter(r => r.status === '대기' || r.status === '지연').length;

  document.getElementById('payBrandCount').textContent = brandCount;
  document.getElementById('payContractTotal').textContent = formatCurrency(estimateTotal).replace('₩', '');
  document.getElementById('payDoneTotal').textContent = formatCurrency(doneTotal).replace('₩', '');
  document.getElementById('payDonePercent').textContent = donePercent + '%';
  document.getElementById('payRemainTotal').textContent = formatCurrency(remainTotal).replace('₩', '');
  document.getElementById('payRemainCount').textContent = remainCount;
  const taxEl = document.getElementById('payTaxTotal');
  taxEl.textContent = formatCurrency(marginTotal).replace('₩', '');
  const taxSub = taxEl.closest('.stat-card').querySelector('.stat-sub');
  if (taxSub) taxSub.textContent = `수즈 원가 ${formatCurrencyPlain(suzCostTotal)} · 마진율 ${marginPct}%`;
}

function renderPaymentBrandFilter() {
  const brands = [...new Set(AppState.data.payments.records.map(r => r.brand))].sort((a,b)=>a.localeCompare(b,'ko'));
  const sel = document.getElementById('paymentFilterBrand');
  const cur = sel.value || 'all';
  sel.innerHTML = '<option value="all">브랜드 전체</option>' +
    brands.map(b => `<option value="${b}">${b}</option>`).join('');
  sel.value = cur;
}

function renderPaymentStatusCards() {
  const f = AppState.paymentFilters;
  let records = AppState.data.payments.records.slice().filter(r => r.total > 0);
  if (f.month !== 'all') records = records.filter(r => String(r.month) === f.month);

  const months = [...new Set(records.map(r => r.month))].sort((a,b)=>b-a);
  const byMonth = months.map(m => {
    const ms = records.filter(r => r.month === m);
    const done = ms.filter(x => x.status === '완료');
    const wait = ms.filter(x => x.status === '대기');
    const delay = ms.filter(x => x.status === '지연');
    return {
      month: m,
      total: ms.reduce((s,r)=>s+r.total,0),
      done: { amount: done.reduce((s,r)=>s+r.paid,0), count: done.length },
      wait: { amount: wait.reduce((s,r)=>s+r.remain,0), count: wait.length },
      delay: { amount: delay.reduce((s,r)=>s+r.remain,0), count: delay.length }
    };
  });

  const row = document.getElementById('paymentStatusRow');
  const cards = [];
  byMonth.forEach(m => {
    cards.push(`
      <div class="pay-status-card">
        <div class="pay-status-dot done"></div>
        <div class="pay-status-info">
          <div class="pay-status-month">${m.month}월 · 완료</div>
          <div class="pay-status-amount">${formatCurrency(m.done.amount).replace('₩','')}</div>
          <div class="pay-status-count"><strong>${m.done.count}</strong> 건</div>
        </div>
      </div>
    `);
    if (m.wait.amount > 0 || m.wait.count > 0) cards.push(`
      <div class="pay-status-card">
        <div class="pay-status-dot wait"></div>
        <div class="pay-status-info">
          <div class="pay-status-month">${m.month}월 · 대기</div>
          <div class="pay-status-amount">${formatCurrency(m.wait.amount).replace('₩','')}</div>
          <div class="pay-status-count"><strong>${m.wait.count}</strong> 건</div>
        </div>
      </div>
    `);
    if (m.delay.amount > 0 || m.delay.count > 0) cards.push(`
      <div class="pay-status-card">
        <div class="pay-status-dot delay"></div>
        <div class="pay-status-info">
          <div class="pay-status-month">${m.month}월 · 지연</div>
          <div class="pay-status-amount">${formatCurrency(m.delay.amount).replace('₩','')}</div>
          <div class="pay-status-count"><strong>${m.delay.count}</strong> 건</div>
        </div>
      </div>
    `);
  });
  row.innerHTML = cards.length ? cards.join('') : `<div style="padding:20px;color:var(--text-tertiary);text-align:center;grid-column:1/-1">집계 데이터가 없습니다.</div>`;
}

function renderPaymentTable() {
  const list = getFilteredPayments();
  document.getElementById('paymentCountBadge').textContent = list.length + '건';

  const tbody = document.getElementById('paymentTableBody');
  tbody.innerHTML = list.map(r => `
    <tr>
      <td style="font-weight:700;color:var(--text-primary)">${r.month}월</td>
      <td><span class="region-tag region-${r.region||'기타'}">${r.region || '—'}</span></td>
      <td style="font-weight:700;color:var(--text-primary)">${r.brand}</td>
      <td style="font-size:12px;color:var(--accent-blue);white-space:nowrap">${r.contractType || '—'}</td>
      <td style="max-width:240px;color:var(--text-secondary);font-size:12.5px">${r.service || '—'}</td>
      <td style="white-space:nowrap">${r.issueDate || '—'}</td>
      <td style="white-space:nowrap">${r.dueDate || '—'}</td>
      <td class="num amount-total">${formatCurrencyPlain(r.total)}</td>
      <td class="num" style="color:#8b5e3c">${formatCurrencyPlain(r.suzCost)}</td>
      <td class="num" style="color:#1a7f37;font-weight:600">${formatCurrencyPlain(r.margin)}</td>
      <td class="num amount-paid">${formatCurrencyPlain(r.paid)}</td>
      <td class="num amount-remain">${formatCurrencyPlain(r.remain)}</td>
      <td><span class="status-payment ${r.status}">${r.status}</span></td>
      <td style="white-space:nowrap">${r.paidDate || '—'}</td>
      <td style="font-size:12px;${(r.suzRemit||'').includes('미배치')?'color:#c2410c;font-weight:600':'color:var(--text-secondary)'}">${r.suzRemit || '—'}</td>
      <td style="font-size:12.5px">${r.manager || '—'}</td>
      <td style="max-width:220px;color:var(--text-tertiary);font-size:12px">${r.memo || ''}</td>
    </tr>
  `).join('') || `<tr><td colspan="17" style="text-align:center;padding:40px;color:var(--text-tertiary)">조건에 맞는 결제 내역이 없습니다.</td></tr>`;

  const tfoot = document.getElementById('paymentTableFoot');
  if (list.length) {
    const sum = (k) => list.reduce((s,r)=>s + (r[k]||0), 0);
    tfoot.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:right">합계</td>
        <td class="num amount-total">${formatCurrencyPlain(sum('total'))}</td>
        <td class="num" style="color:#8b5e3c">${formatCurrencyPlain(sum('suzCost'))}</td>
        <td class="num" style="color:#1a7f37;font-weight:700">${formatCurrencyPlain(sum('margin'))}</td>
        <td class="num amount-paid">${formatCurrencyPlain(sum('paid'))}</td>
        <td class="num amount-remain">${formatCurrencyPlain(sum('remain'))}</td>
        <td colspan="5"></td>
      </tr>
    `;
  } else {
    tfoot.innerHTML = '';
  }
}

function bindPaymentEvents() {
  const zone = document.getElementById('paymentUploadZone');
  const input = document.getElementById('paymentFileInput');
  const btn = document.getElementById('paymentUploadBtn');
  if (zone && input) {
    zone.addEventListener('click', e => {
      if (e.target === btn || e.target.closest('#paymentUploadBtn')) return;
      input.click();
    });
    btn.addEventListener('click', e => { e.stopPropagation(); input.click(); });
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('dragover'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('dragover');
      if (e.dataTransfer.files.length) handleExcelFile(e.dataTransfer.files[0]);
    });
    input.addEventListener('change', e => {
      if (e.target.files.length) handleExcelFile(e.target.files[0]);
    });
  }

  ['paymentFilterMonth','paymentFilterStatus','paymentFilterBrand','paymentFilterSort'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change', () => {
      const key = id.replace('paymentFilter','').toLowerCase();
      AppState.paymentFilters[key] = el.value;
      renderPaymentStats();
      renderPaymentStatusCards();
      renderPaymentTable();
    });
  });
  let t;
  const search = document.getElementById('paymentFilterSearch');
  if (search) search.addEventListener('input', e => {
    clearTimeout(t);
    t = setTimeout(() => {
      AppState.paymentFilters.search = e.target.value;
      renderPaymentStats();
      renderPaymentStatusCards();
      renderPaymentTable();
    }, 200);
  });

  const exp = document.getElementById('paymentExportBtn');
  if (exp) exp.addEventListener('click', exportPaymentCSV);
}

function handleExcelFile(file) {
  const tip = document.getElementById('paymentUploadTip');
  tip.textContent = '파일 읽는 중...';
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = new Uint8Array(e.target.result);
      const wb = typeof XLSX !== 'undefined' ? XLSX.read(data, { type: 'array' }) : null;
      if (!wb) { tip.textContent = 'SheetJS 로드 실패'; return; }
      const firstSheet = wb.SheetNames[0];
      const ws = wb.Sheets[firstSheet];
      const rows = XLSX.utils.sheet_to_json(ws, { defval: '' });
      if (!rows.length) { tip.textContent = '빈 파일입니다'; return; }
      const converted = convertExcelRowsToPayments(rows);
      AppState.data.payments.records = converted;
      tip.textContent = `✅ ${file.name} · ${converted.length}건 불러옴 (시트: ${firstSheet})`;
      renderPayment();
    } catch (err) {
      console.error(err);
      tip.textContent = '❌ 오류: ' + err.message;
    }
  };
  reader.readAsArrayBuffer(file);
}

function convertExcelRowsToPayments(rows) {
  const norm = s => (s || '').toString().trim().toLowerCase().replace(/[\s_]/g,'');
  const colMap = {};
  if (rows.length) {
    Object.keys(rows[0]).forEach(k => {
      const nk = norm(k);
      if (/브랜드|brand|상호|거래처|샤오홍슈마케팅|마케팅|제공주체/.test(nk) && !colMap.brand) colMap.brand = k;
      else if (/서비스|제공주체|품목|상품|내용/.test(nk)) colMap.service = k;
      else if (/계약형식|계약타입|마진율|수수료|contract|marginrate/.test(nk)) colMap.contractType = k;
      else if (/지역|도시|region|city|주소/.test(nk)) colMap.region = k;
      else if (/계산서|세금계산서|invoice|문서번호|청구서|견적서번호/.test(nk)) colMap.invoiceNo = k;
      else if (/담당|담당자|manager|담당자명/.test(nk)) colMap.manager = k;
      else if (/청구일|발행일|계산일|견적서발송일|issue|견적일/.test(nk)) colMap.issueDate = k;
      else if (/만료|납부|마감|결제예정|due|브랜드결제일|결제일정|대행사결제일/.test(nk) && !nk.includes('완료') && !/paid|실결제|입금일/.test(nk)) colMap.dueDate = k;
      else if (/수즈결제|대행사|수수료결제|원가|cost|suz|agency|cogs/.test(nk)) colMap.suzCost = k;
      else if (/유피마진|마진|이익|순이익|margin|profit/.test(nk)) colMap.margin = k;
      else if (/공급가|공급가액|supply|본채|subtotal/.test(nk) && !colMap.suzCost) { colMap.supply = k; }
      else if (/부가세|세금|tax|vat/.test(nk)) colMap.tax = k;
      else if (/총|합계|청구액|total|전체|총액|견적액|매출/.test(nk) && !/미수|잔금|입금|수즈|마진|유피|원가/.test(nk)) colMap.total = k;
      else if (/입금|수령|결제액|paid|received|브랜드입금|수금완료/.test(nk) && !nk.includes('일') && !/예정|상황|상태/.test(nk)) colMap.paid = k;
      else if (/미수|잔금|남은|remain|outstanding|미입금/.test(nk)) colMap.remain = k;
      else if (/상태|결제상태|status|state|진행상황|입금상황|입금상태/.test(nk)) colMap.status = k;
      else if (/수즈송금|송금|지결|배치|remit|송금상태|대행사결제/.test(nk)) colMap.suzRemit = k;
      else if (/결제일|입금일|완료일|paiddate|실결제일/.test(nk)) colMap.paidDate = k;
      else if (/비고|메모|memo|note|remark|요청방식|지급방식/.test(nk)) colMap.memo = k;
      else if (/월|month|집행월|정산월/.test(nk)) colMap.month = k;
    });
  }
  const toNum = v => {
    if (v === null || v === undefined || v === '') return 0;
    const n = typeof v === 'number' ? v : parseInt(String(v).replace(/[^\d-]/g,''), 10);
    return isNaN(n) ? 0 : n;
  };
  const guessMonth = (row, idx) => {
    if (colMap.month && row[colMap.month]) {
      const raw = String(row[colMap.month]);
      const m = parseInt(raw.replace(/[^\d]/g,''), 10);
      if (!isNaN(m) && m >= 1 && m <= 12) return m;
      if (/7월/.test(raw)) return 7;
      if (/8월/.test(raw)) return 8;
      if (/9월/.test(raw)) return 9;
    }
    const str = String(row[colMap.service] || '') + ' ' + String(row[colMap.memo] || '');
    if (/7월|7\/|7\.|7월분/.test(str) && !/8월|8[\/.]|9월|9[\/.]/.test(str)) return 7;
    if (/9월|9\/|9\.|9월분/.test(str)) return 9;
    const dateStr = [row[colMap.issueDate], row[colMap.dueDate], row[colMap.paidDate]].find(x=>x);
    if (dateStr) {
      const m = String(dateStr).match(/(\d{1,2})[.\/-]/);
      if (m) { const mv = parseInt(m[1],10); if (mv>=1 && mv<=12) return mv; }
    }
    return CONFIG.ui.currentMonth;
  };
  const guessStatus = (row) => {
    if (colMap.status && row[colMap.status]) {
      const s = String(row[colMap.status]);
      if (/완료|납부|지급|입금\s*완|입금완|완납|송금완|paid|done|수금|입금[^예정중상황일]/.test(s) && !/대기|미|연체|지연/.test(s)) return '완료';
      if (/지연|연체|미납|delay|overdue|미입금/.test(s)) return '지연';
      if (/취소|cancel|철회|중지/.test(s)) return '취소';
      if (/대기|요청\s*완|요청완|진행중|보류|미정|작성\s*중/.test(s)) return '대기';
    }
    const paid = colMap.paid ? String(row[colMap.paid] || '') : '';
    if (/입금|수금|o|완|✅/.test(paid) && !/미|x|❌/.test(paid)) return '완료';
    if (/미입금|미수|잔금|x|❌/.test(paid)) {
      const due = String(row[colMap.dueDate] || '');
      if (due) {
        const today = new Date();
        const mm = due.match(/(\d{1,2})[.\/-](\d{1,2})/);
        if (mm) {
          const d = new Date(today.getFullYear(), parseInt(mm[1],10)-1, parseInt(mm[2],10));
          if (d < today) return '지연';
        }
      }
      return '지연';
    }
    const total = toNum(row[colMap.total]) || toNum(row[colMap.supply]) + toNum(row[colMap.tax]);
    const paidNum = toNum(row[colMap.paid]);
    const remain = toNum(row[colMap.remain]) || Math.max(total - paidNum, 0);
    if (total === 0) return '취소';
    if (remain === 0 && paidNum >= total && paidNum > 0) return '완료';
    return '대기';
  };
  const regionFromText = (row) => {
    if (colMap.region && row[colMap.region]) return row[colMap.region];
    const t = (row[colMap.brand] || '') + ' ' + (row[colMap.service] || '') + ' ' + (row[colMap.memo] || '');
    if (/대구/.test(t)) return '대구';
    if (/서울|명동|한남|강남/.test(t)) return '서울';
    if (/부산/.test(t)) return '부산';
    return '';
  };
  return rows.filter((row, idx) => {
    const brandVal = (row[colMap.brand] || '') + '';
    const totalVal = toNum(row[colMap.total]);
    if (/소계|합계|총계|subtotal|total/.test(brandVal.toLowerCase())) return false;
    if (!brandVal && totalVal === 0 && idx > 0) return false;
    if (/소계|합계|총계|마진율|지결|배치|송금|수익|정산|한눈|브랜드/.test(brandVal) && /합계|총계|소계|요약|보기/.test((row[colMap.service]||'') + ' ' + (row[colMap.memo]||''))) return false;
    return true;
  }).map((row, idx) => {
    const supply = toNum(row[colMap.supply]);
    const tax = toNum(row[colMap.tax]);
    let total = toNum(row[colMap.total]);
    const suzCost = toNum(row[colMap.suzCost]);
    let margin = toNum(row[colMap.margin]);
    if (!total && supply) total = supply + tax;
    if (!margin && total && suzCost >= 0) margin = total - suzCost;
    if (!suzCost && total && margin >= 0) { /* keep suzCost=0 as 유피100% */ }
    if (total > 0 && !suzCost && !margin) margin = total;
    const paid = toNum(row[colMap.paid]);
    let remain = toNum(row[colMap.remain]);
    if (!remain && total) remain = Math.max(total - paid, 0);
    const region = regionFromText(row);
    const contractType = row[colMap.contractType] || '';
    const invoiceNo = row[colMap.invoiceNo] || '';
    const manager = row[colMap.manager] || '';
    const svc = row[colMap.service] || '';
    const status = guessStatus(row);
    return {
      month: guessMonth(row, idx),
      region: region,
      brand: String(row[colMap.brand] || `브랜드${idx+1}`).trim(),
      contractType: contractType,
      service: svc,
      invoiceNo: invoiceNo,
      manager: manager,
      issueDate: String(row[colMap.issueDate] || '').trim(),
      dueDate: String(row[colMap.dueDate] || '').trim(),
      total, suzCost, margin,
      supply, tax,
      paid, remain,
      status: status,
      paidDate: String(row[colMap.paidDate] || '').trim(),
      suzRemit: String(row[colMap.suzRemit] || '').trim(),
      memo: String(row[colMap.memo] || '').trim()
    };
  }).filter(r => r.brand && !(r.total === 0 && r.paid === 0 && r.remain === 0 && r.memo === '' && r.status === '취소'));
}

function exportPaymentCSV() {
  const list = getFilteredPayments();
  if (!list.length) { alert('내보낼 데이터가 없습니다.'); return; }
  const headers = ['월','지역','브랜드','계약형식','서비스','계산서 번호','담당자','청구일','만료일','견적액(총매출)','수즈결제액(원가)','유피마진','입금액','미수금','상태','결제일','수즈송금','메모'];
  const lines = [headers.join(',')];
  list.forEach(r => {
    lines.push([
      r.month+'월',
      csvEscape(r.region), csvEscape(r.brand), csvEscape(r.contractType), csvEscape(r.service),
      csvEscape(r.invoiceNo), csvEscape(r.manager),
      csvEscape(r.issueDate), csvEscape(r.dueDate),
      r.total, r.suzCost, r.margin, r.paid, r.remain,
      csvEscape(r.status), csvEscape(r.paidDate), csvEscape(r.suzRemit), csvEscape(r.memo)
    ].join(','));
  });
  const bom = '\uFEFF';
  const blob = new Blob([bom + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `브랜드결제_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
function csvEscape(v) {
  if (v === null || v === undefined) return '';
  const s = String(v);
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g,'""') + '"';
  return s;
}

function buildHandoffBrands() {
  const records = AppState.data.payments.records;
  const brandMap = new Map();
  records.forEach(r => {
    const key = r.brand + '|' + r.region;
    if (!brandMap.has(key)) {
      brandMap.set(key, {
        brand: r.brand,
        region: r.region,
        contractTypes: new Set(),
        services: new Set(),
        total: 0, suzCost: 0, margin: 0,
        managers: new Set(),
        statuses: new Set(),
        records: []
      });
    }
    const b = brandMap.get(key);
    b.contractTypes.add(r.contractType);
    (r.service || '').split('+').forEach(s => s.trim() && b.services.add(s.trim()));
    b.total += Number(r.total || 0);
    b.suzCost += Number(r.suzCost || 0);
    b.margin += Number(r.margin || 0);
    if (r.manager) b.managers.add(r.manager);
    if (r.status) b.statuses.add(r.status);
    b.records.push(r);
  });
  const regionOrder = { '서울': 0, '대구': 1, '김해': 2, '부산': 2 };
  return [...brandMap.values()].map(b => {
    const services = [...b.services];
    const hasAccountOps = services.some(s => /계정운영/.test(s));
    const has유상Seeding = services.some(s => /유상시딩/.test(s));
    const has무상Seeding = services.some(s => /무상시딩/.test(s));
    let opsKey = '유피단독';
    if (b.contractTypes.has('유피 100%')) opsKey = '유피단독';
    else if (hasAccountOps && has무상Seeding) opsKey = '혼합';
    else if (hasAccountOps || has유상Seeding) opsKey = '수즈';
    else if (has무상Seeding) opsKey = '유피';
    let opsOwner = AppState.data.handoff.config.accountOpsOwner[opsKey] || '확인 필요';
    let seedingKey = '없음';
    if (has무상Seeding) seedingKey = '유피';
    else if (has유상Seeding) seedingKey = '수즈';
    const seedingOwnerLabel = AppState.data.handoff.config.seedingOwner[seedingKey] || '시딩 없음';
    const worst = [...b.statuses].reduce((acc, s) => ({ '지연': 3, '대기': 2, '완료': 1 }[s] || 0) > acc ? ({ '지연': 3, '대기': 2, '완료': 1 }[s] || 0) : acc, 0);
    const worstStatus = worst === 3 ? '지연' : worst === 2 ? '대기' : '완료';
    const corpCertMap = AppState.data.handoff.config.corpCertMap;
    const certKey = Object.keys(corpCertMap).find(k => b.brand.includes(k) || k.includes(b.brand));
    const certStatus = certKey ? corpCertMap[certKey] : (b.contractTypes.has('유피 100%') && b.total < 700000 ? '불필요 (무상시딩 전용)' : '진행중 확인');
    const accountOpsStatus = hasAccountOps
      ? (worstStatus === '완료' ? '완료 · 운영중' : worstStatus === '대기' ? '진행중 · 선금 대기' : '지연 · 미입금')
      : '불필요 (운영 X)';
    const seedingStatus = (has무상Seeding || has유상Seeding)
      ? ((worstStatus === '완료') ? '완료 · 배포종료' : worstStatus === '대기' ? '진행중 · KOC 배포 진행' : '지연 · 미입금')
      : '불필요 (시딩 X)';
    const brandPaid = b.records.reduce((s, r) => s + Number(r.paid || 0), 0);
    const paymentStatus = brandPaid >= (b.total * 0.9) ? '완료 · 정상 입금'
      : worstStatus === '완료' ? '완료 · 잔여 확인'
      : worstStatus === '대기' ? '대기 · 입금 예정'
      : '지연 · 미입금';
    return {
      ...b,
      contractTypesList: [...b.contractTypes],
      servicesList: services,
      managersList: [...b.managers],
      statusesList: [...b.statuses],
      representativeContract: [...b.contractTypes][0] || '기본계약',
      opsKey, opsOwner, seedingKey, seedingOwnerLabel,
      worstStatus, certStatus, accountOpsStatus, seedingStatus, paymentStatus,
      marginRate: b.total > 0 ? Math.round((b.margin / b.total) * 100) : 0
    };
  }).sort((a, b) => {
    const ra = regionOrder[a.region] ?? 9; const rb = regionOrder[b.region] ?? 9;
    if (ra !== rb) return ra - rb;
    return (b.total || 0) - (a.total || 0);
  });
}

function statusDotClass(status) {
  if (status === '완료' || /완료/.test(status)) return 'status-dot-done';
  if (status === '대기' || /대기|진행/.test(status)) return 'status-dot-wait';
  if (status === '지연' || /지연|미입금/.test(status)) return 'status-dot-delay';
  if (/불필요|없음/.test(status)) return 'status-dot-na';
  return 'status-dot-wait';
}

function renderHandoff() {
  const brands = buildHandoffBrands();
  const records = AppState.data.payments.records;
  const totalEstimate = records.reduce((s, r) => s + Number(r.total || 0), 0);
  const totalSuz = records.reduce((s, r) => s + Number(r.suzCost || 0), 0);
  const totalMargin = records.reduce((s, r) => s + Number(r.margin || 0), 0);
  const totalPaid = records.reduce((s, r) => s + Number(r.paid || 0), 0);
  const remain = totalEstimate - totalPaid;
  const countDone = records.filter(r => r.status === '완료').length;
  const countWait = records.filter(r => r.status === '대기').length;
  const countDelay = records.filter(r => r.status === '지연').length;
  const marginRate = totalEstimate > 0 ? Math.round((totalMargin / totalEstimate) * 100) : 0;
  const payRate = totalEstimate > 0 ? Math.round((totalPaid / totalEstimate) * 100) : 0;

  document.getElementById('handoffKpiRow').innerHTML = `
    <div class="stat-card" style="border-left:4px solid var(--accent-indigo)">
      <div class="stat-label">협업 브랜드 (중복제외)</div>
      <div class="stat-value">${brands.length}</div>
      <div class="stat-sub">서울 ${brands.filter(b=>b.region==='서울').length} · 대구 ${brands.filter(b=>b.region==='대구').length}</div>
    </div>
    <div class="stat-card" style="border-left:4px solid var(--accent-blue)">
      <div class="stat-label">총 견적액 (8월+9월)</div>
      <div class="stat-value">₩ ${formatNumber(totalEstimate)}</div>
      <div class="stat-sub">입금 ${payRate}% · 미수금 ₩ ${formatNumber(remain)}</div>
    </div>
    <div class="stat-card" style="border-left:4px solid var(--accent-green)">
      <div class="stat-label">UP 마진 (수익)</div>
      <div class="stat-value">₩ ${formatNumber(totalMargin)}</div>
      <div class="stat-sub">마진율 ${marginRate}% · 수즈원가 ₩ ${formatNumber(totalSuz)}</div>
    </div>
    <div class="stat-card" style="border-left:4px solid var(--accent-orange)">
      <div class="stat-label">결제 상태</div>
      <div class="stat-value">${countDone}완료 · ${countWait}대기 · ${countDelay}지연</div>
      <div class="stat-sub">총 ${records.length}건</div>
    </div>`;

  document.getElementById('handoffBrandGrid').innerHTML = brands.map(b => `
    <article class="handoff-brand-card">
      <div class="hbc-head">
        <div>
          <span class="region-tag region-${b.region.replace('·','').replace('부산','김해')}">${b.region}</span>
          <span class="hbc-brand">${b.brand}</span>
        </div>
        <span class="status-badge ${b.worstStatus==='완료'?'status-done':b.worstStatus==='대기'?'status-recruit':'status-delay'}" style="font-size:11px;padding:3px 8px">${b.worstStatus}</span>
      </div>
      <div class="hbc-body">
        <div class="hbc-row"><span class="hbc-k">계약형식</span><span class="hbc-v contract-tag">${b.representativeContract}</span></div>
        <div class="hbc-row"><span class="hbc-k">계정운영</span><span class="hbc-v">${b.opsOwner}</span></div>
        <div class="hbc-row"><span class="hbc-k">시딩 담당</span><span class="hbc-v">${b.seedingOwnerLabel}</span></div>
        <div class="hbc-row"><span class="hbc-k">영업 / PM</span><span class="hbc-v" style="font-weight:600;color:var(--accent-indigo)">${b.managersList.join(' · ') || '손혜민'}</span></div>
      </div>
      <div class="hbc-footer">
        <div><span style="color:var(--text-tertiary);font-size:11px">견적</span> <strong style="font-size:13px">₩ ${formatNumber(b.total)}</strong></div>
        <div><span style="color:var(--text-tertiary);font-size:11px">UP마진</span> <strong style="font-size:13px;color:var(--accent-green)">₩ ${formatNumber(b.margin)} (${b.marginRate}%)</strong></div>
      </div>
    </article>`).join('');

  const tbody = document.querySelector('#handoffMatrixTable tbody');
  const tfoot = document.querySelector('#handoffMatrixTable tfoot');
  tbody.innerHTML = brands.map(b => `
    <tr>
      <td style="font-weight:700;color:var(--text-primary);white-space:nowrap">${b.brand}</td>
      <td><span class="region-tag region-${b.region.replace('·','').replace('부산','김해')}" style="font-size:11px;padding:2px 7px">${b.region}</span></td>
      <td><span class="contract-tag">${b.representativeContract}</span></td>
      <td style="color:var(--accent-blue);font-weight:500">${b.opsOwner.replace(' (디지털네이티브스)','').replace(' / UP INTER','').replace(' (全과정 UP 직접운영)','')}</td>
      <td style="color:var(--accent-teal);font-weight:500">${b.seedingOwnerLabel.replace(' 대행 (유상시딩)','').replace(' 팀 (무상시딩 직접 운영)','').replace(' (계정운영만)','')}</td>
      <td style="font-weight:600;color:var(--accent-indigo);white-space:nowrap">${b.managersList.join(' · ') || '손혜민'}</td>
      <td class="num" style="font-variant-numeric:tabular-nums">${formatNumberRaw(b.total)}</td>
      <td class="num" style="font-variant-numeric:tabular-nums;color:var(--accent-green);font-weight:700">${formatNumberRaw(b.margin)} <span style="font-weight:400;color:var(--text-tertiary);font-size:11px">(${b.marginRate}%)</span></td>
      <td><span class="status-badge ${b.worstStatus==='완료'?'status-done':b.worstStatus==='대기'?'status-recruit':'status-delay'}" style="font-size:11px;padding:3px 8px">${b.worstStatus}</span></td>
    </tr>`).join('');
  tfoot.innerHTML = `
    <tr style="background:var(--surface-alt);font-weight:700">
      <td colspan="6" style="text-align:right;padding-right:16px">합 계 (${brands.length} 브랜드 · ${records.length}건)</td>
      <td class="num" style="font-variant-numeric:tabular-nums">${formatNumberRaw(totalEstimate)}</td>
      <td class="num" style="font-variant-numeric:tabular-nums;color:var(--accent-green)">${formatNumberRaw(totalMargin)} (${marginRate}%)</td>
      <td>입금 ${payRate}%</td>
    </tr>`;

  document.getElementById('handoffStatusGrid').innerHTML = brands.map(b => `
    <article class="handoff-status-card">
      <div class="hsc-head">
        <span class="region-tag region-${b.region.replace('·','').replace('부산','김해')}" style="font-size:10px;padding:2px 6px">${b.region}</span>
        <strong>${b.brand}</strong>
        <span class="status-badge ${b.worstStatus==='완료'?'status-done':b.worstStatus==='대기'?'status-recruit':'status-delay'}" style="font-size:10px;padding:2px 7px;margin-left:auto">결제 ${b.worstStatus}</span>
      </div>
      <div class="hsc-list">
        <div class="hsc-item">
          <span class="hsc-status-dot ${statusDotClass(b.certStatus)}"></span>
          <span class="hsc-label">기업인증</span>
          <span class="hsc-value">${b.certStatus}</span>
        </div>
        <div class="hsc-item">
          <span class="hsc-status-dot ${statusDotClass(b.accountOpsStatus)}"></span>
          <span class="hsc-label">계정 운영</span>
          <span class="hsc-value">${b.accountOpsStatus}</span>
        </div>
        <div class="hsc-item">
          <span class="hsc-status-dot ${statusDotClass(b.seedingStatus)}"></span>
          <span class="hsc-label">시딩 (KOC)</span>
          <span class="hsc-value">${b.seedingStatus}</span>
        </div>
        <div class="hsc-item">
          <span class="hsc-status-dot ${statusDotClass(b.paymentStatus)}"></span>
          <span class="hsc-label">브랜드 입금</span>
          <span class="hsc-value">${b.paymentStatus} · ${(b.total - b.records.reduce((s,r)=>s+Number(r.paid||0),0)) > 0 ? '미수 ₩ ' + formatNumber(b.total - b.records.reduce((s,r)=>s+Number(r.paid||0),0)) : '총 ' + formatNumber(b.total)}</span>
        </div>
      </div>
      <div class="hsc-foot">
        <span>${b.managersList.join(' · ') || '손혜민'} 담당</span>
        <span style="color:var(--accent-green);font-weight:600">${b.marginRate}% 마진</span>
      </div>
    </article>`).join('');
}

/* ============================================================
   01 브랜드 계약 관리 (Contract Management · 31 브랜드)
============================================================ */

AppState.contractFilters = {
  region: 'all',
  type: 'all',
  status: 'all',
  search: ''
};

function buildBrandMaster() {
  const records = AppState.data.payments.records;
  const handoffMap = new Map();
  try { buildHandoffBrands().forEach(b => handoffMap.set(b.brand + '|' + b.region, b)); } catch(e) {}

  const payBrands = new Map();
  records.forEach(r => {
    const key = r.brand + '|' + r.region;
    if (!payBrands.has(key)) {
      const hb = handoffMap.get(key) || {};
      payBrands.set(key, {
        key, brand: r.brand, region: r.region,
        contractNo: r.invoiceNo ? r.invoiceNo.replace(/-[^-]+$/,'-'+r.invoiceNo.split('-').pop().padStart(3,'0')) : '',
        fileOnly: false,
        periodStart: '2026-08-01',
        periodEnd:   '2026-12-31',
        file: '—',
        contractType: r.contractType,
        contractTypes: new Set([r.contractType]),
        services: new Set(),
        managers: new Set(),
        statuses: new Set(),
        monthPayments: {},
        total: 0, suzCost: 0, margin: 0, paid: 0,
        worstWeight: 0,
        representativeContract: hb.representativeContract || r.contractType,
        opsOwner: hb.opsOwner || '계정운영 담당 확인 필요',
        opsKey: hb.opsKey || '혼합',
        seedingOwnerLabel: hb.seedingOwnerLabel || '시딩 담당 확인 필요',
        seedingKey: hb.seedingKey || '없음',
        corpCertStatus: hb.corpCertStatus || '확인 중',
        managersList: hb.managersList || [],
        marginRate: hb.marginRate || 0,
        worstStatus: hb.worstStatus || '완료',
        notes: r.memo || ''
      });
    }
    const b = payBrands.get(key);
    if (r.service) (r.service + '').split('+').forEach(s => s.trim() && b.services.add(s.trim()));
    if (r.manager) b.managers.add(r.manager);
    if (r.status) { b.statuses.add(r.status); const w = r.status==='지연'?3:r.status==='대기'?2:r.status==='완료'?1:0; if (w>b.worstWeight) b.worstWeight=w; }
    const m = Number(r.month);
    if (!b.monthPayments[m]) b.monthPayments[m] = [];
    b.monthPayments[m].push(r);
    b.total += Number(r.total||0); b.suzCost += Number(r.suzCost||0); b.margin += Number(r.margin||0); b.paid += Number(r.paid||0);
  });

  const payList = [...payBrands.values()].map(b => {
    b.managersList = [...b.managers];
    const svcList = [...b.services];
    if (!b.opsKey) {
      const onlyUP = svcList.every(s => /유피/.test(s) || /유피전용/.test(s)) && /유피 100%|유피단독/.test(b.contractType);
      const hasSuzOps = svcList.some(s => /수즈/.test(s) && /계정/.test(s));
      const hasUPSz = svcList.some(s => /무상시딩/.test(s) || /유피/.test(s) || /유피전용/.test(s));
      if (onlyUP) b.opsKey = '유피단독';
      else if (hasSuzOps && hasUPSz) b.opsKey = '혼합';
      else if (hasSuzOps) b.opsKey = '수즈';
      else b.opsKey = '유피';
    }
    b.opsOwner = (AppState.data.handoff && AppState.data.handoff.config.accountOpsOwner[b.opsKey]) || b.opsKey;
    if (!b.seedingKey) {
      if (svcList.some(s => /유상시딩/.test(s) && /수즈/.test(s))) b.seedingKey = '수즈';
      else if (svcList.some(s => /무상시딩/.test(s) || /시딩 \(유피/.test(s) || /시딩 \(유피전용\)/.test(s))) b.seedingKey = '유피';
      else b.seedingKey = '없음';
    }
    b.seedingOwnerLabel = (AppState.data.handoff && AppState.data.handoff.config.seedingOwner[b.seedingKey]) || b.seedingKey;
    b.worstStatus = b.worstWeight===3?'지연':b.worstWeight===2?'대기':b.worstWeight===1?'완료':'대기';
    b.marginRate = b.total>0 ? Math.round((b.margin/b.total)*100) : 0;
    b.remain = Math.max(0, b.total - b.paid);
    b.representativeContract = [...b.contractTypes][0] || b.contractType;
    return b;
  });

  const seeding = AppState.data.seedingRecords || [];
  const monthSeedMap = new Map();
  seeding.forEach(s => {
    const k = s.brand + '|' + s.month;
    monthSeedMap.set(k, s);
  });
  const septBefore = (AppState.data.septemberPlans||{}).before || {items:[]};
  const septRecruit = (AppState.data.septemberPlans||{}).recruit || {items:[]};

  const extraBrands = [];
  const xhsContracts = (AppState.data.contracts||{}).brands || [];
  xhsContracts.forEach(c => {
    const key = c.brand + '|' + c.region;
    if (payBrands.has(key)) return;
    extraBrands.push({
      key, brand: c.brand, region: c.region,
      contractNo: c.contractNo, fileOnly: true,
      periodStart: c.periodStart, periodEnd: c.periodEnd,
      file: c.file, contractType: c.contractType || '업무협약',
      contractTypes: new Set([c.contractType]),
      services: new Set(), managers: new Set([c.manager||'손혜민']),
      statuses: new Set(),
      monthPayments: {}, total:0, suzCost:0, margin:0, paid:0,
      worstWeight: 0, representativeContract: c.contractType,
      opsOwner: '입력 예정', opsKey: '혼합',
      seedingOwnerLabel: '시딩 없음', seedingKey: '없음',
      corpCertStatus: '확인 중', managersList: [c.manager||'손혜민'],
      marginRate: 0, worstStatus: '미집행',
      remain: 0, notes: c.notes || '추후 비용·서비스 입력 예정'
    });
  });

  const all = [...payList, ...extraBrands].map(b => {
    b.seedingMonth = {};
    const aliases = [b.brand];
    if (b.brand.indexOf(' ')>=0) aliases.push(b.brand.split(' ')[0]);
    [6,7,8,9].forEach(mo => {
      let found = null;
      for (const a of aliases) {
        const k = a + '|' + mo;
        if (monthSeedMap.has(k)) { found = monthSeedMap.get(k); break; }
      }
      if (found) b.seedingMonth[mo] = found;
    });
    b.seedingMonth[9] = b.seedingMonth[9] || (() => {
      const sb = septBefore.items.find(i => aliases.some(a => (i.brand||'').indexOf(a)>=0));
      const sr = septRecruit.items.find(i => aliases.some(a => (i.brand||'').indexOf(a)>=0));
      if (sb || sr) return { month:9, brand:b.brand, status:(sr?'모집 중':'방문 확정 전'), visitConfirm:null, visitDone:null, deploy:null, apply:null, select:null, progress:(sr?sr.slot:sb?sb.slot:null), _plan:true, _derivedBefore:null, _derivedSlot:(sr?sr.slot:sb?sb.slot:null) };
      return null;
    })();
    Object.keys(b.seedingMonth).forEach(mo => {
      const s = b.seedingMonth[mo]; if (!s || s._plan) return;
      const sel = Number(s.select||0), vc = Number(s.visitConfirm||0), vd = Number(s.visitDone||0), dp = Number(s.deploy||0);
      s._derivedBefore = Math.max(0, sel - vc);
      s._derivedSlot = s.progress ? s.progress : (sel>0?sel:(vc>0?vc:null));
    });
    const allSeeding = Object.values(b.seedingMonth).filter(Boolean);
    b.hasSeeding = allSeeding.length > 0;
    b.reportList = [];
    if (b.fileOnly) {
      b.reportList.push({month:'8월',report:'계약서 등록', status:'보고서 미입력', dot:'na'});
    } else {
      [7,8,9].forEach(mo => {
        if (b.monthPayments[mo]) {
          const done = b.monthPayments[mo].every(r => r.status==='완료');
          const wait = b.monthPayments[mo].some(r => r.status==='대기');
          b.reportList.push({
            month: mo+'월',
            report: mo===8 ? '8월 청산 보고서' : mo===9 ? '9월 청구·请款' : mo+'월 결제 보고서',
            status: done ? '제출 완료' : wait ? '대기 (청구 중)' : '미입금 지연',
            dot: done ? 'done' : wait ? 'wait' : 'delay',
            amount: b.monthPayments[mo].reduce((s,r)=>s+Number(r.total||0),0)
          });
        }
      });
      if (b.hasSeeding) b.reportList.push({month:'월간시딩', report:'무상시딩 월간 결과', status: b.seedingMonth[8] ? '8월 데이터 반영 완료' : '시딩 데이터 없음', dot: b.seedingMonth[8] ? 'done' : 'na'});
    }
    b.posts = (AppState.data.seedingPosts || []).filter(p => p.brandKey === b.key);
    return b;
  });

  const cmp = (a,b) => {
    const score = x => (x.fileOnly?1000:0) - x.total;
    return score(a) - score(b);
  };
  return all.sort(cmp);
}

function getFilteredBrandMaster() {
  const f = AppState.contractFilters;
  let list = buildBrandMaster();
  if (f.region !== 'all') {
    list = list.filter(b => {
      if (f.region === '김해·부산') return b.region === '김해' || b.region === '부산' || b.region === '김해·부산';
      return b.region === f.region;
    });
  }
  if (f.type !== 'all') {
    if (f.type === '파일만등록') list = list.filter(b => b.fileOnly);
    else if (f.type === '유피100') list = list.filter(b => b.opsKey === '유피단독' || /유피 100%/.test(b.representativeContract));
    else if (f.type === '수즈대행') list = list.filter(b => b.opsKey === '수즈' || b.opsKey === '혼합');
  }
  if (f.status !== 'all') {
    if (f.status === '미집행') list = list.filter(b => b.fileOnly);
    else list = list.filter(b => !b.fileOnly && b.worstStatus === f.status);
  }
  if (f.search) {
    const q = f.search.trim().toLowerCase();
    if (q) list = list.filter(b => (b.brand+' '+b.contractNo+' '+b.representativeContract+' '+(b.managersList||[]).join(' ')).toLowerCase().indexOf(q)>=0);
  }
  return list;
}

function renderContracts() {
  const brands = getFilteredBrandMaster();
  const all = buildBrandMaster();
  const fileCount = ((AppState.data.contracts||{}).filesFromScreenshot||[]).length;
  const totalFilesAll = ((AppState.data.contracts||{}).filesFromScreenshot||[]).length;
  document.getElementById('contractFileCount').textContent = fileCount;
  document.getElementById('contractBrandCount').textContent = brands.length;
  document.getElementById('contractCountBadge').textContent = brands.length + '개';

  const totalEst = brands.reduce((s,b)=>s+b.total,0);
  const totalMg  = brands.reduce((s,b)=>s+b.margin,0);
  const totalPaidAll = brands.reduce((s,b)=>s+b.paid,0);
  const remainAll = Math.max(0, totalEst - totalPaidAll);
  const mgRate = totalEst>0 ? Math.round((totalMg/totalEst)*100) : 0;
  const payRate = totalEst>0 ? Math.round((totalPaidAll/totalEst)*100) : 0;
  const cntExec = brands.filter(b=>!b.fileOnly).length;
  const cntFile = brands.filter(b=>b.fileOnly).length;
  const fileSubText = totalFilesAll === 0 ? '등록된 계약파일 없음' :
    brands.filter(b=>b.fileOnly).length > 0
      ? brands.filter(b=>b.fileOnly).map(b=>b.brand).slice(0,3).join('·') + (brands.filter(b=>b.fileOnly).length>3?' 등':'')
      : '전체 ' + totalFilesAll + '개 (필터 외 포함)';
  document.getElementById('contractKpiRow').innerHTML = `
    <div class="stat-card" style="border-left:4px solid #0071e3">
      <div class="stat-label">2026 계약 브랜드</div>
      <div class="stat-value">${brands.length}</div>
      <div class="stat-sub">데이터 등록 ${cntExec} · 파일만 ${cntFile}</div>
    </div>
    <div class="stat-card" style="border-left:4px solid #bf5af2">
      <div class="stat-label">총 견적액 (7월+8월+9월)</div>
      <div class="stat-value">₩ ${formatNumber(totalEst)}</div>
      <div class="stat-sub">입금 ${payRate}% · 미수 ₩ ${formatNumber(remainAll)}</div>
    </div>
    <div class="stat-card" style="border-left:4px solid #30d158">
      <div class="stat-label">UP 마진 (수익)</div>
      <div class="stat-value">₩ ${formatNumber(totalMg)}</div>
      <div class="stat-sub">마진율 ${mgRate}% (${cntExec}건 집행)</div>
    </div>
    <div class="stat-card" style="border-left:4px solid #ff9f0a">
      <div class="stat-label">계약 파일 (9. 계약 폴더)</div>
      <div class="stat-value">${fileCount}</div>
      <div class="stat-sub">${fileSubText}</div>
    </div>`;

  document.getElementById('contractBrandGrid').innerHTML = brands.map(b => {
    const statusCls = b.fileOnly ? 'status-distribute' : b.worstStatus==='완료'?'status-done':b.worstStatus==='대기'?'status-recruit':'status-delay';
    const period = (b.periodStart && b.periodStart !== '—' ? b.periodStart.slice(5) + ' ~ ' + b.periodEnd.slice(5) : '기간 미입력');
    const opsTagCls = b.opsKey==='유피단독'||b.opsKey==='유피' ? 'tag-ops-up' : 'tag-ops-suz';
    const seedTagCls = b.seedingKey==='유피' ? 'tag-seed-up' : b.seedingKey==='수즈' ? 'tag-seed-suz' : 'tag-manager';
    const managers = (b.managersList && b.managersList.length ? b.managersList.join('·') : '손혜민');
    const marginCls = b.marginRate>=30 ? 'margin-good' : '';
    return `
      <article class="cb-card ${b.fileOnly?'is-fileonly':''}" onclick="openBrandModal('${b.key.replace(/'/g,"\\'")}')">
        <div class="cb-card-head">
          <div style="min-width:0;flex:1">
            <div class="cb-contract-no">${b.contractNo || '계약번호 미입력'}</div>
            <h4 class="cb-brand-name">${b.brand}</h4>
          </div>
          <span class="cb-region-tag region-${b.region.replace(/·/g,'').replace('부산','김해').replace(/ /g,'')}">${b.region}</span>
        </div>
        <div class="cb-meta">
          <span class="cb-tag" style="font-weight:700">${b.representativeContract}</span>
          <span class="cb-tag ${opsTagCls}">${b.opsOwner.split(' ')[0]}</span>
          <span class="cb-tag ${seedTagCls}">${b.seedingOwnerLabel.split(' ')[0]}</span>
          <span class="cb-tag tag-manager">${managers}</span>
        </div>
        <div class="cb-sum">
          <div class="cb-sum-item"><span class="cb-sum-label">총 견적</span><span class="cb-sum-value won">₩ ${formatNumber(b.total)}</span></div>
          <div class="cb-sum-item"><span class="cb-sum-label">UP 마진</span><span class="cb-sum-value won ${marginCls}">₩ ${formatNumber(b.margin)} (${b.marginRate}%)</span></div>
          <div class="cb-sum-item"><span class="cb-sum-label">브랜드 입금</span><span class="cb-sum-value won ${b.remain>0&&!b.fileOnly?'remain':''}">₩ ${formatNumber(b.paid)}</span></div>
          <div class="cb-sum-item"><span class="cb-sum-label">미수금</span><span class="cb-sum-value won remain">₩ ${formatNumber(b.remain)}</span></div>
        </div>
        <div class="cb-foot">
          <span class="cb-period">📅 ${period}</span>
          <span class="cb-status-pill ${statusCls}">${b.fileOnly ? '📄 파일만' : b.worstStatus}</span>
        </div>
      </article>`;
  }).join('');
}

function openBrandModal(key) {
  const brands = buildBrandMaster();
  const b = brands.find(x => x.key === key);
  if (!b) return;
  const elOv = document.getElementById('brandModalOverlay');
  document.getElementById('bm-contractno').textContent = (b.contractNo || '계약번호 미입력') + (b.file && b.file !== '—' ? '  ·  📄 ' + b.file : '');
  document.getElementById('bm-title').textContent = b.brand;
  document.getElementById('bm-subtitle').innerHTML = `
    <span>🏙️ ${b.region}</span>
    <span>📝 ${b.representativeContract}</span>
    <span>👤 ${(b.managersList||[]).join(' · ') || '손혜민'} 담당</span>`;

  const months = [];
  for (let m = 7; m <= 9; m++) if (b.monthPayments[m]) months.push(m);
  const monthRows = months.map(mo => {
    const recs = b.monthPayments[mo] || [];
    const tt = recs.reduce((s,r)=>s+Number(r.total||0),0);
    const ss = recs.reduce((s,r)=>s+Number(r.suzCost||0),0);
    const mm = recs.reduce((s,r)=>s+Number(r.margin||0),0);
    const pp = recs.reduce((s,r)=>s+Number(r.paid||0),0);
    const rr = Math.max(0, tt - pp);
    const stat = recs.every(r=>r.status==='완료') ? '완료' : recs.some(r=>r.status==='지연') ? '지연' : '대기';
    const statCls = stat==='완료'?'good':stat==='대기'?'':'bad';
    return `<tr>
      <td style="white-space:nowrap"><strong>${mo}월</strong> <span class="status-badge ${stat==='완료'?'status-done':stat==='대기'?'status-recruit':'status-delay'}" style="font-size:10px;padding:2px 7px;margin-left:4px">${stat}</span></td>
      <td class="num">₩ ${formatNumber(tt)}</td>
      <td class="num">₩ ${formatNumber(ss)}</td>
      <td class="num">₩ ${formatNumber(mm)} <span style="color:#86868b;font-weight:600;font-size:11px">(${tt>0?Math.round(mm/tt*100):0}%)</span></td>
      <td class="num">₩ ${formatNumber(pp)}</td>
      <td class="num ${rr>0?'bad':''}">₩ ${formatNumber(rr)}</td>
      <td style="text-align:center"><span class="${statCls}">${stat}</span></td>
    </tr>`;
  }).join('');
  const totEst = months.reduce((s,m)=>s+(b.monthPayments[m]||[]).reduce((a,r)=>a+Number(r.total||0),0),0);
  const totSuz = months.reduce((s,m)=>s+(b.monthPayments[m]||[]).reduce((a,r)=>a+Number(r.suzCost||0),0),0);
  const totMg  = months.reduce((s,m)=>s+(b.monthPayments[m]||[]).reduce((a,r)=>a+Number(r.margin||0),0),0);
  const totPaid= months.reduce((s,m)=>s+(b.monthPayments[m]||[]).reduce((a,r)=>a+Number(r.paid||0),0),0);
  const totRem = Math.max(0, totEst - totPaid);
  const mgR = totEst>0 ? Math.round(totMg/totEst*100) : 0;
  const monthTbl = months.length ? `<table class="bm-table">
    <thead><tr><th>월 / 상태</th><th>견적액</th><th>수즈원가</th><th>UP 마진</th><th>브랜드입금</th><th>미수금</th><th style="text-align:center">결제</th></tr></thead>
    <tbody>${monthRows}</tbody>
    <tfoot><tr>
      <td>합계 (${months.length}개월)</td>
      <td class="num">₩ ${formatNumber(totEst)}</td>
      <td class="num">₩ ${formatNumber(totSuz)}</td>
      <td class="num">₩ ${formatNumber(totMg)} <span style="font-weight:600;color:#117c32">(${mgR}%)</span></td>
      <td class="num">₩ ${formatNumber(totPaid)}</td>
      <td class="num">₩ ${formatNumber(totRem)}</td>
      <td style="text-align:center;font-weight:800">${b.worstStatus}</td>
    </tr></tfoot></table>` : `<div class="bm-seed-empty">아직 결제 데이터가 입력되지 않았습니다. 계약 파일만 등록된 상태입니다.</div>`;

  const svcChips = [...(b.services||new Set())].length ? [...b.services].map(s => {
    const isSuz = /수즈/.test(s); const isUP = /유피/.test(s) || /유피전용/.test(s) || /무상시딩/.test(s);
    return `<span class="bm-chip ${isSuz?'bmc-suz':isUP?'bmc-up':''}">${s.replace(/\(수즈\)/g,'·수즈').replace(/\(유피전용\)/g,'·유피').replace(/유피전용/g,'·유피')}</span>`;
  }).join('') : `<span class="bm-chip bmc-up">서비스 내역 추후 입력</span>`;

  const seedList = [];
  [6,7,8,9].forEach(mo => { if (b.seedingMonth[mo]) seedList.push({month:mo, s:b.seedingMonth[mo]}); });
  const seedHtml = seedList.length ? `<div class="bm-seed-grid">${seedList.map(({month:mo,s})=>{
    const apply = s.apply ?? '—';
    const sel = s.select ?? '—';
    const vc = s.visitConfirm ?? '—';
    const vd = s.visitDone ?? (s._plan?null:'—');
    const dp = s.deploy ?? (s._plan?null:'—');
    const before = s._derivedBefore != null ? s._derivedBefore : (s.before ?? '—');
    const slot = s._derivedSlot != null ? s._derivedSlot : (s.progressCount ?? s.progress ?? '—');
    return `
    <div class="bm-seed-month">
      <div class="bm-seed-m">📌 ${mo}월 ${s._plan?'(예정)':''} <span class="status-badge ${s.status==='완료'?'status-done':s.status==='모집 중'?'status-recruit':s.status==='검수·배포'||s.status==='배포 중'?'status-distribute':s.status==='제품 확인'||s.status==='제품 발송'?'status-delay':s.status==='제공 제품 확인'||s.status==='제공 제품 발송 준비'?'status-recruit':'status-delay'}" style="font-size:10px;padding:2px 6px;margin-left:4px;float:right">${s.status||'—'}</span></div>
      <div class="bm-seed-item"><span>신청 (apply)</span><b>${apply}</b></div>
      <div class="bm-seed-item"><span>선정 (select)</span><b>${sel}</b></div>
      <div class="bm-seed-item"><span>방문 확정</span><b>${vc}</b></div>
      ${vd!=null?`<div class="bm-seed-item"><span>방문 완료</span><b>${vd}</b></div>`:''}
      ${dp!=null?`<div class="bm-seed-item"><span>배포 완료</span><b>${dp}</b></div>`:''}
      <div class="bm-seed-item" style="background:#fff9e6"><span>배포 전 (선정-방문)</span><b>${before}</b></div>
      <div class="bm-seed-item" style="background:#eef7ff"><span>KOC 슬롯</span><b>${slot}</b></div>
    </div>`}).join('')}</div>` : `<div class="bm-seed-empty">해당 브랜드는 무상시딩 내역이 없습니다. (계정운영 또는 유상시딩만)</div>`;

  const reports = (b.reportList||[]);
  const reportHtml = reports.length ? `<div class="bm-report-row">${reports.map(r=>`
    <div class="bm-report-card">
      <span class="bm-report-dot ${r.dot==='done'?'status-dot-done':r.dot==='wait'?'status-dot-wait':r.dot==='delay'?'status-dot-delay':'status-dot-na'}"></span>
      <div class="bm-report-txt">
        <span class="bm-report-label">${r.month}</span>
        <span class="bm-report-value ${r.dot==='done'?'good':r.dot==='wait'?'warn':r.dot==='delay'?'bad':''}">${r.report}</span>
        <span class="bm-report-label" style="color:#6e6e73">${r.status}${r.amount?'  ·  ₩ '+formatNumber(r.amount):''}</span>
      </div>
    </div>`).join('')}</div>` : `<div class="bm-seed-empty">보고서 내역 없음</div>`;

  const posts = (b.posts||[]);
  const sheetLinksUnique = [...new Set(posts.map(p=>p.sheetUrl).filter(Boolean))];
  const postsHtml = (() => {
    if (!posts.length) return `<div class="bm-seed-empty">등록된 种草(포스팅) 내역이 없습니다. 或 데이터 시트 연결 대기 중</div>`;
    const rows = posts.map((p,i)=>{
      const u = (p.profileUrl||'').trim();
      const du = (p.deployUrl||'').trim();
      const statCls = /방문 완료|완료/.test(p.visitStatus||'') ? 'status-done' : /대기|방문/.test(p.visitStatus||'') ? 'status-recruit' : /불참|미방문/.test(p.visitStatus||'') ? 'status-delay' : 'status-recruit';
      return `<tr>
        <td style="text-align:center">${(p.store||'—').replace(/점$/,'')}</td>
        <td>${u ? `<a href="${u}" target="_blank" rel="noopener noreferrer" style="color:#0071e3;font-weight:700;text-decoration:underline">${p.xhsAccount||'프로필'}🔗</a>` : p.xhsAccount||'—'}</td>
        <td style="color:#6e6e73">${p.wechatName||p.visitorName||'—'}</td>
        <td class="num">${p.followers||'—'}</td>
        <td class="num">${p.likes||'—'}</td>
        <td style="text-align:center"><span class="bm-chip bmc-up" style="padding:2px 8px;font-size:11px">${p.type||'—'}</span></td>
        <td style="white-space:nowrap">${p.visitDate||'—'} ${p.visitTime?' '+p.visitTime:''}</td>
        <td style="text-align:center"><span class="status-badge ${statCls}" style="font-size:10px;padding:2px 6px">${p.visitStatus||'대기'}</span></td>
        <td style="font-size:11px;color:#6e6e73;max-width:220px">${p.item||'<span style="color:#c7c7cc">—</span>'}</td>
        <td>${du ? `<a href="${du}" target="_blank" rel="noopener noreferrer" style="color:#30d158;font-weight:800;text-decoration:underline">${p.deployDate||'배포링크'}🔗</a>` : (p.deployDate ? `<span style="color:#86868b">${p.deployDate}</span>` : '<span style="color:#c7c7cc">미배포</span>')}</td>
      </tr>`;
    }).join('');
    const head = `<table class="bm-table bm-post-tbl"><thead><tr>
      <th style="width:64px">지점</th><th>小红书 계정 (프로필 링크)</th><th style="width:100px">담당자/위쳇명</th><th class="num" style="width:80px">팔로워</th><th class="num" style="width:84px">좋아요·저장</th><th style="width:84px">유형</th><th style="width:120px">방문 일시</th><th style="width:72px">방문</th><th style="width:180px">제품·발송 주소</th><th>배포 링크 (직접 열기)</th>
    </tr></thead><tbody>${rows}</tbody></table>`;
    const foot = sheetLinksUnique.length ? `<div style="margin-top:8px;font-size:12px;color:#6e6e73">📎 원본 시트 보기：${sheetLinksUnique.map((su,i)=>`<a href="${su}" target="_blank" rel="noopener noreferrer" style="color:#0071e3;margin-right:14px">种草 목록 시트${sheetLinksUnique.length>1?' #'+(i+1):''}🔗</a>`).join('')}</div>` : '';
    return head + foot;
  })();

  document.getElementById('bm-body').innerHTML = `
    <section class="bm-section">
      <h3 class="bm-s-title">① 기본 정보 · 계약 기간</h3>
      <div class="bm-kv">
        <div class="bm-kv-item"><span class="bm-kv-label">계약 번호</span><span class="bm-kv-value">${b.contractNo || '—'}</span></div>
        <div class="bm-kv-item"><span class="bm-kv-label">계약 파일 (9.계약 폴더)</span><span class="bm-kv-value">${b.file || '—'}</span></div>
        <div class="bm-kv-item"><span class="bm-kv-label">계약 기간</span><span class="bm-kv-value">${b.periodStart || '—'}  ~  ${b.periodEnd || '—'}</span></div>
        <div class="bm-kv-item"><span class="bm-kv-label">브랜드 / 지역</span><span class="bm-kv-value">${b.brand} · ${b.region}</span></div>
        <div class="bm-kv-item"><span class="bm-kv-label">계약 형식</span><span class="bm-kv-value">${b.representativeContract}</span></div>
        <div class="bm-kv-item"><span class="bm-kv-label">기업 인증 (小红书)</span><span class="bm-kv-value">${b.corpCertStatus||'확인 중'}</span></div>
      </div>
    </section>

    <section class="bm-section">
      <h3 class="bm-s-title">② 월별 비용 (견적 · 수즈원가 · UP 마진 · 입금)</h3>
      ${monthTbl}
    </section>

    <section class="bm-section">
      <h3 class="bm-s-title">③ 제공 서비스</h3>
      <div class="bm-chip-row">${svcChips}</div>
    </section>

    <section class="bm-section">
      <h3 class="bm-s-title">④ 누가 담당? (수즈 vs 유피)</h3>
      <div class="bm-owner-grid">
        <div class="bm-owner-card">
          <span class="bm-owner-label">계정 운영 담당</span>
          <span class="bm-owner-value">${b.opsOwner}</span>
          <span class="bm-owner-sub">${b.opsKey==='유피단독'||b.opsKey==='유피' ? '손혜민 · UP 직접 운영' : '수즈(디지털네이티브스) 대행'}</span>
        </div>
        <div class="bm-owner-card">
          <span class="bm-owner-label">시딩 (KOC) 담당</span>
          <span class="bm-owner-value">${b.seedingOwnerLabel}</span>
          <span class="bm-owner-sub">${b.seedingKey==='수즈' ? '유상 시딩 = 수즈 팀' : b.seedingKey==='유피' ? '무상 시딩 = UP INTER 직접' : '시딩 없음 (계정만)'}</span>
        </div>
        <div class="bm-owner-card">
          <span class="bm-owner-label">영업 / PM</span>
          <span class="bm-owner-value">${(b.managersList||[]).join(' · ') || '손혜민'}</span>
          <span class="bm-owner-sub">브랜드 커뮤니케이션 및 청구</span>
        </div>
        <div class="bm-owner-card">
          <span class="bm-owner-label">마진율 (평균)</span>
          <span class="bm-owner-value ${b.marginRate>=30?'good':''}">${b.marginRate}%</span>
          <span class="bm-owner-sub">총 견적 ₩ ${formatNumber(b.total)} → 마진 ₩ ${formatNumber(b.margin)}</span>
        </div>
      </div>
    </section>

    <section class="bm-section">
      <h3 class="bm-s-title">⑤ 월별 무상 시딩 진행 현황</h3>
      ${seedHtml}
    </section>

    <section class="bm-section">
      <h3 class="bm-s-title">⑥ 보고서 · ⑦ 8월 청산 · ⑧ 9월 청구</h3>
      ${reportHtml}
    </section>

    <section class="bm-section">
      <h3 class="bm-s-title">⑨ 种草笔记 进行情况 · 小红书 KOC 现场访问 & 发布链接 (<span style="color:#0071e3">링크 클릭시 直接 열기</span>)</h3>
      ${postsHtml}
    </section>

    ${b.notes ? `<div class="bm-note">📝 ${b.notes}</div>` : ''}
  `;
  elOv.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeBrandModal() {
  const el = document.getElementById('brandModalOverlay');
  if (el) el.classList.remove('show');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeBrandModal();
});

window.openBrandModal = openBrandModal;
window.closeBrandModal = closeBrandModal;

function updateSyncStatus(text) {
  const el = document.getElementById('syncStatus');
  if (el) el.textContent = text;
}

function bindEvents() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });

  document.querySelectorAll('.month-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.month-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.seedingMonthFilter = btn.dataset.monthFilter;
      renderSeedingTable();
    });
  });

  document.getElementById('filterMonth').addEventListener('change', e => {
    AppState.filters.month = e.target.value;
    renderContentLinks();
    renderPostTable();
  });
  document.getElementById('filterType').addEventListener('change', e => {
    AppState.filters.type = e.target.value;
    renderContentLinks();
    renderPostTable();
  });
  document.getElementById('filterBrand').addEventListener('change', e => {
    AppState.filters.brand = e.target.value;
    renderContentLinks();
    renderPostTable();
  });
  document.getElementById('filterSort').addEventListener('change', e => {
    AppState.filters.sort = e.target.value;
    renderContentLinks();
    renderPostTable();
  });
  let searchTimer;
  document.getElementById('filterSearch').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      AppState.filters.search = e.target.value;
      renderContentLinks();
      renderPostTable();
    }, 200);
  });
  bindPaymentEvents();

  ['contractFilterRegion','contractFilterType','contractFilterStatus'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change', e => {
      const key = id === 'contractFilterRegion' ? 'region' : id === 'contractFilterType' ? 'type' : 'status';
      AppState.contractFilters[key] = e.target.value;
      renderContracts();
    });
  });
  const cfs = document.getElementById('contractFilterSearch');
  if (cfs) {
    cfs.addEventListener('input', e => { AppState.contractFilters.search = e.target.value; renderContracts(); });
  }
}

function switchTab(tab) {
  AppState.currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  document.querySelectorAll('.tab-content').forEach(c => {
    c.classList.toggle('active', c.id === `tab-${tab}`);
  });
}

async function loadData() {
  updateSyncStatus('시트에서 숫자를 가져오는 중...');
  try {
    const sheetsData = await GoogleSheets.loadAll();
    AppState.data = cloneData(MOCK_DATA);
    if (sheetsData) {
      if (sheetsData.seeding && sheetsData.seeding.length) {
        console.log('Google Sheets 무상시딩 데이터 로드됨:', sheetsData.seeding.length, '행');
      }
      if (sheetsData.posts && sheetsData.posts.length) {
        console.log('Google Sheets 게시물 데이터 로드됨:', sheetsData.posts.length, '행');
      }
      if (sheetsData.growth && sheetsData.growth.length) {
        console.log('Google Sheets 성장 데이터 로드됨:', sheetsData.growth.length, '행');
      }
    }
    AppState.loaded = true;
    renderAll();
    const now = new Date();
    const timeStr = `${now.getMonth() + 1}.${now.getDate()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    updateSyncStatus(`시트 동기화 ${timeStr} 무상시딩 · 계정관리`);
  } catch (e) {
    console.error(e);
    AppState.data = cloneData(MOCK_DATA);
    AppState.loaded = true;
    renderAll();
    updateSyncStatus('기본 데이터로 표시 중 · ' + new Date().toLocaleTimeString());
  }
}

function renderAll() {
  renderSeeding();
  renderContent();
  renderGrowth();
  renderPayment();
  renderHandoff();
  renderContracts();
}

document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  loadData();
  if (CONFIG.sync.autoRefreshMs > 0) {
    setInterval(loadData, CONFIG.sync.autoRefreshMs);
  }
});

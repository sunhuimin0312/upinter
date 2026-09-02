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
}

document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  loadData();
  if (CONFIG.sync.autoRefreshMs > 0) {
    setInterval(loadData, CONFIG.sync.autoRefreshMs);
  }
});

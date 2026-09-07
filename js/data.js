const MOCK_DATA = {
  seedingOverview: {
    month: 8,
    beforeCount: 57,
    doneCount: 82,
    targetCount: 139,
    completeCount: 82,
    completeBefore: 57,
    brandCount: 12,
    percent: 59,
    applyCount: 215,
    visitCount: 136,
    visitSelectCount: 114,
    visitPercent: 119.3,
    deployDoneCount: 82,
    deployBeforeCount: 57,
    deployPercent: 59,
    deployNotPercent: 41,
    lastSync: '9.01 15:48 무상시딩 · 계정관리'
  },

  brands: [
    { name: '헤트라스 명동', before: 8, done: 18, target: 26, status: 'distribute' },
    { name: '에이와이오', before: 8, done: 7, target: 15, status: 'distribute' },
    { name: '성구네 돼지구이 서울', before: 8, done: 2, target: 10, status: 'distribute' },
    { name: '프리터', before: 5, done: 10, target: 15, status: 'distribute' },
    { name: '성구네 돼지구이 대구', before: 5, done: 0, target: 5, status: 'recruit' },
    { name: '코코리움헤어', before: 5, done: 0, target: 5, status: 'recruit' },
    { name: '엘리앤코', before: 5, done: 0, target: 5, status: 'recruit' },
    { name: '크림인유어 네일', before: 5, done: 0, target: 5, status: 'recruit' },
    { name: '이시아플러스점', before: 5, done: 0, target: 5, status: 'recruit' },
    { name: '아이소이 제품발송', before: 1, done: 17, target: 18, status: 'distribute' },
    { name: '잇존', before: 1, done: 9, target: 10, status: 'distribute' },
    { name: '카시코 제품발송', before: 1, done: 9, target: 10, status: 'distribute' },
    { name: '동동만두', before: 0, done: 10, target: 10, status: 'done' }
  ],

  seedingRecords: [
    { month: 6, brand: '프리터', status: '컨텐츠 검수 및 배포 확인', apply: 15, select: 15, visitConfirm: 15, visitDone: 15, deploy: 11, progress: 15, note: null },
    { month: 6, brand: '헤트라스 한남점', status: '컨텐츠 검수 및 배포 확인', apply: 25, select: 22, visitConfirm: 22, visitDone: 22, deploy: 16, progress: 22, note: null },
    { month: 6, brand: '헤트라스 부산점', status: '컨텐츠 검수 및 배포 확인', apply: 4, select: 2, visitConfirm: 2, visitDone: 2, deploy: 0, progress: 3, note: null },
    { month: 6, brand: '사파리스팟', status: '컨텐츠 검수 및 배포 확인', apply: 20, select: 18, visitConfirm: 17, visitDone: 17, deploy: 7, progress: 18, note: null },
    { month: 6, brand: '에이와이오', status: '컨텐츠 검수 및 배포 확인', apply: 24, select: 18, visitConfirm: 16, visitDone: 16, deploy: 10, progress: 18, note: null },
    { month: 7, brand: '프리터', status: '컨텐츠 검수 및 배포 확인', apply: 22, select: 10, visitConfirm: 10, visitDone: 10, deploy: 10, progress: 10, note: null },
    { month: 7, brand: '헤트라스 한남점', status: '컨텐츠 검수 및 배포 확인', apply: 44, select: 11, visitConfirm: 10, visitDone: 10, deploy: 10, progress: 10, note: null },
    { month: 7, brand: '헤트라스 부산점', status: '구글 파일 공유', apply: 5, select: 1, visitConfirm: 0, visitDone: 0, deploy: 0, progress: 5, note: null },
    { month: 7, brand: '에이와이오', status: '컨텐츠 검수 및 배포 확인', apply: 28, select: 12, visitConfirm: 11, visitDone: 11, deploy: 7, progress: 20, note: null },
    { month: 7, brand: 'ITZON', status: '컨텐츠 검수 및 배포 확인', apply: 17, select: 10, visitConfirm: 10, visitDone: 10, deploy: 10, progress: 10, note: null },
    { month: 7, brand: '사파리스팟', status: '컨텐츠 검수 및 배포 확인', apply: 30, select: 14, visitConfirm: 12, visitDone: 5, deploy: 10, progress: 10, note: '월말에 팝업 추가' },
    { month: 8, brand: '아이소이', status: '컨텐츠 검수 및 배포 확인', apply: 80, select: 18, visitConfirm: 18, visitDone: 17, deploy: 17, progress: '20-30', note: '제품발송' },
    { month: 8, brand: '프리터', status: '컨텐츠 검수 및 배포 확인', apply: 16, select: 15, visitConfirm: 15, visitDone: 15, deploy: 10, progress: 15, note: null },
    { month: 8, brand: '잇존', status: '컨텐츠 검수 및 배포 확인', apply: 14, select: 10, visitConfirm: 10, visitDone: 10, deploy: 9, progress: 10, note: null },
    { month: 8, brand: '에이와이오', status: '컨텐츠 검수 및 배포 확인', apply: 31, select: 15, visitConfirm: 15, visitDone: 14, deploy: 7, progress: 20, note: null },
    { month: 8, brand: 'KASHIKO', status: '컨텐츠 검수 및 배포 확인', apply: 22, select: 10, visitConfirm: 10, visitDone: 10, deploy: 9, progress: 10, note: '제품발송' },
    { month: 8, brand: '동동만두', status: '컨텐츠 검수 및 배포 확인', apply: 11, select: 10, visitConfirm: 10, visitDone: 10, deploy: 10, progress: 10, note: null },
    { month: 8, brand: '상구네돼지구이 서울', status: '컨텐츠 검수 및 배포 확인', apply: 11, select: 10, visitConfirm: 10, visitDone: 9, deploy: 2, progress: 10, note: null },
    { month: 8, brand: '상구네돼지구이 대구', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: 5, visitDone: null, deploy: null, progress: 10, note: null },
    { month: 8, brand: '고운빛깔에스테틱', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: '김해 에스테틱' },
    { month: 8, brand: '코코리움 헤어', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: 5, visitDone: null, deploy: null, progress: 10, note: null },
    { month: 8, brand: '엘리앤코스파', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: 5, visitDone: null, deploy: null, progress: 10, note: '엘리앤코' },
    { month: 8, brand: '크림인유어네일', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: 5, visitDone: null, deploy: null, progress: 10, note: '크림인유어 네일' },
    { month: 8, brand: '이시아폴리스', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: 5, visitDone: null, deploy: null, progress: 10, note: '이시아플러스점' },
    { month: 8, brand: '헤트라스 명동', status: '컨텐츠 검수 및 배포 확인', apply: 30, select: 26, visitConfirm: 26, visitDone: 26, deploy: 18, progress: 30, note: null },
    { month: 8, brand: '프리터 모집', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 15, note: '8월 체험단' },
    { month: 8, brand: '잇존 모집', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: '8월 체험단' },
    { month: 8, brand: '에이와이오 모집', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 20, note: '8월 체험단' },
    { month: 8, brand: 'KASHIKO 모집', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: '8월 체험단' },
    { month: 8, brand: '사파리스팟 모집', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: '8월 체험단' },
    { month: 8, brand: '동동만두 모집', status: '체험단 모집 진행', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: '8월 체험단' },
    { month: 8, brand: '상구네돼지구이 서울 제품', status: '제공 제품 확인', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: null },
    { month: 8, brand: '상구네돼지구이 대구 제품', status: '제공 제품 확인', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: null },
    { month: 8, brand: '고운빛깔에스테틱 제품', status: '제공 제품 확인', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: '김해 에스테틱' },
    { month: 8, brand: '코코리움 헤어 제품', status: '제공 제품 확인', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: null },
    { month: 8, brand: '엘리앤코스파 제품', status: '제공 제품 확인', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: null },
    { month: 8, brand: '크림인유어네일 제품', status: '제공 제품 확인', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: null },
    { month: 8, brand: '이시아폴리스 제품', status: '제공 제품 확인', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: 10, note: null },
    { month: 8, brand: '샌드뮤지엄', status: '체험단 모집 진행', apply: 36, select: 15, visitConfirm: null, visitDone: null, deploy: null, progress: 15, note: null },
    { month: 8, brand: '헤트라스 명동 제품', status: '제공 제품 확인', apply: null, select: null, visitConfirm: null, visitDone: null, deploy: null, progress: null, note: null }
  ],

  septemberPlans: {
    before: {
      summary: '제품 확인 10 · 슬롯 80',
      items: [
        { brand: '김해 에스테틱', slot: 10 },
        { brand: '성구네 돼지구이 대구', slot: 10 },
        { brand: '성구네 돼지구이 서울', slot: 10 },
        { brand: '엘리앤코', slot: 10 },
        { brand: '이시아플러스점', slot: 10 },
        { brand: '코코리움헤어', slot: 10 },
        { brand: '크림인유어 네일', slot: 10 },
        { brand: '아이소이', slot: 0 },
        { brand: '헤트라스 명동', slot: '미정' }
      ]
    },
    recruit: {
      summary: '모집 중 7 · 슬롯 80',
      items: [
        { brand: '에이와이오', slot: 20 },
        { brand: '샌드뮤지엄', slot: 15 },
        { brand: '프리터', slot: 15 },
        { brand: '사파리스팟', slot: 10 },
        { brand: '동동만두', slot: 10 },
        { brand: '잇존', slot: 10 },
        { brand: '카시코', slot: 10 }
      ]
    }
  },

  contentOverview: {
    month: 8,
    postCount: 7,
    totalCount: 53,
    startMonth: 4,
    videoCount: 1,
    imageCount: 6,
    followerContribution: 4158,
    totalInteraction: 23000,
    totalLikes: 14000,
    totalSaves: 7238,
    totalViews: 180000,
    totalComments: 1316,
    totalShares: 773,
    monthlyPosts: [
      { month: 4, count: 12 },
      { month: 5, count: 9 },
      { month: 6, count: 11 },
      { month: 7, count: 14 },
      { month: 8, count: 7 }
    ]
  },

  brandInteractions: [
    { rank: 1, name: 'ILLIGO', postCount: 1, views: 72000, interaction: 11000 },
    { rank: 2, name: 'PEG LEG', postCount: 3, views: 8623, interaction: 1641 },
    { rank: 3, name: 'AEYIO', postCount: 3, views: 3871, interaction: 1325 },
    { rank: 4, name: 'Rockcake', postCount: 1, views: 6906, interaction: 994 },
    { rank: 5, name: 'safarispot', postCount: 1, views: 5614, interaction: 832 },
    { rank: 6, name: 'FRITUR', postCount: 3, views: 5258, interaction: 704 },
    { rank: 7, name: 'SLOWAND', postCount: 2, views: 4120, interaction: 612 },
    { rank: 8, name: 'Hetras', postCount: 3, views: 3890, interaction: 541 },
    { rank: 9, name: 'FLAREUP', postCount: 2, views: 2980, interaction: 423 },
    { rank: 10, name: 'KASHIKO', postCount: 2, views: 2540, interaction: 356 }
  ],

  posts: [
    {
      date: '08.28', month: 8, type: 'image', brand: 'AEYIO', topic: '首尔潮流据点探店',
      title: 'AEYIO｜首尔潮流据点✨探店打卡🎁来袭',
      followers: 65, interaction: 128, likes: 68, saves: 42, comments: 12, shares: 6, views: 1280,
      link: 'https://www.rednote.com/discovery/item/6a9143900000000037036907?xsec_token=ABYu38a6LFdiPG9kwElg1g1VOwEqFfiaeGI4mXRwc-Q9w=&xsec_source=pc_user'
    },
    {
      date: '08.25', month: 8, type: 'image', brand: 'AEYIO', topic: '新款福利送Logo帽',
      title: '🎁新款福利丨AEYIO Logo帽 三色随机送',
      followers: 377, interaction: 1254, likes: 376, saves: 297, comments: 505, shares: 76, views: 2281,
      link: 'https://www.rednote.com/discovery/item/6a8d3fa400000000040348ec?xsec_token=ABWrqTCW8TDc1cdh5rRzLZ8HauZqYsdhm2M5imXykDKUY=&xsec_source=pc_user'
    },
    {
      date: '08.21', month: 8, type: 'image', brand: 'FRITUR', topic: '汉南洞开业宠粉',
      title: 'FRITUR🧢🎁｜汉南洞新店开业宠粉ing',
      followers: 69, interaction: 447, likes: 131, saves: 123, comments: 157, shares: 36, views: 859,
      link: 'https://www.rednote.com/discovery/item/6a87ddd1000000000503196f?xsec_token=ABrJXGCQB0Q6gpi2lHP0ygxXOGjPxNu23Zjlw9HHUiG9M=&xsec_source=pc_user'
    },
    {
      date: '08.19', month: 8, type: 'image', brand: 'FRITUR', topic: '汉南洞打卡发文',
      title: 'Fritur 汉南洞新店｜打卡发文赢🎁',
      followers: 154, interaction: 389, likes: 98, saves: 145, comments: 112, shares: 34, views: 742,
      link: 'https://www.rednote.com/discovery/item/6a7ea61d000000002403e643?xsec_token=ABlj5YYwQm7yB8jmy3FDgf-gy-3kb56jqDV08yTRCRFks=&xsec_source=pc_user'
    },
    {
      date: '08.14', month: 8, type: 'image', brand: 'Hetras', topic: '全门店探店投稿',
      title: '首尔 hetras 全门店地图｜探店投稿赢香氛🎁',
      followers: 21, interaction: 238, likes: 84, saves: 78, comments: 58, shares: 18, views: 512,
      link: 'https://www.rednote.com/discovery/item/6a855d44000000002403d7af?xsec_token=ABtqTw-uvz9lqpZl53toW8qdSvhEfvHpjMbVv3eTjg31s=&xsec_source=pc_user'
    },
    {
      date: '08.11', month: 8, type: 'video', brand: 'Hetras', topic: '小众品牌GD爱香',
      title: '🇰🇷每天认识一个小众品牌/GD也爱的香是？',
      followers: 27, interaction: 787, likes: 21, saves: 766, comments: 0, views: 1280,
      link: 'https://www.rednote.com/discovery/item/6a7ab6f6000000002203370e?xsec_token=ABkn-XBOp-KmdcjQO1Kn2PnW0TyGQWP5p0J5YJFXjZSMk=&xsec_source=pc_user'
    },
    {
      date: '08.07', month: 8, type: 'image', brand: 'Hetras', topic: '济州岛香氛礼盒',
      title: '🎁 Hetras 济州岛森林香氛礼盒免费送！',
      followers: 73, interaction: 310, likes: 83, saves: 86, comments: 121, shares: 20, views: 512,
      link: 'https://www.rednote.com/discovery/item/6a74121100000000050296e8?xsec_token=ABktVyq0hDxu8AV1PW8OXraAAIYg1q9gq4hncAPW2-4HA=&xsec_source=pc_user'
    },
    {
      date: '07.28', month: 7, type: 'image', brand: 'ILLIGO', topic: '汉南洞展厅探访',
      title: 'ILLIGO 汉南展厅｜人生时尚单品发现💎',
      followers: 1200, interaction: 11000, likes: 7200, saves: 2800, comments: 700, shares: 300, views: 72000,
      link: '#'
    },
    {
      date: '07.21', month: 7, type: 'image', brand: 'PEG LEG', topic: '圣水旗舰店探店',
      title: 'PEG LEG 圣水店｜复古感满满的宝藏鞋店👟',
      followers: 450, interaction: 1641, likes: 820, saves: 500, comments: 221, shares: 100, views: 8623,
      link: '#'
    }
  ],

  contentLinks: [
    { title: 'AEYIO｜首尔潮流据点✨探店打卡🎁来袭', brand: 'AEYIO', date: '08.28', views: 1280, link: 'https://www.rednote.com/discovery/item/6a9143900000000037036907?xsec_token=ABYu38a6LFdiPG9kwElg1g1VOwEqFfiaeGI4mXRwc-Q9w=&xsec_source=pc_user' },
    { title: '🎁新款福利丨AEYIO Logo帽 三色随机送', brand: 'AEYIO', date: '08.25', views: 2281, link: 'https://www.rednote.com/discovery/item/6a8d3fa400000000040348ec?xsec_token=ABWrqTCW8TDc1cdh5rRzLZ8HauZqYsdhm2M5imXykDKUY=&xsec_source=pc_user' },
    { title: 'FRITUR🧢🎁｜汉南洞新店开业宠粉ing', brand: 'FRITUR', date: '08.21', views: 859, link: 'https://www.rednote.com/discovery/item/6a87ddd1000000000503196f?xsec_token=ABrJXGCQB0Q6gpi2lHP0ygxXOGjPxNu23Zjlw9HHUiG9M=&xsec_source=pc_user' },
    { title: 'Fritur 汉南洞新店｜打卡发文赢🎁', brand: 'FRITUR', date: '08.19', views: 742, link: 'https://www.rednote.com/discovery/item/6a7ea61d000000002403e643?xsec_token=ABlj5YYwQm7yB8jmy3FDgf-gy-3kb56jqDV08yTRCRFks=&xsec_source=pc_user' },
    { title: '首尔 hetras 全门店地图｜探店投稿赢香氛🎁', brand: 'Hetras', date: '08.14', views: 512, link: 'https://www.rednote.com/discovery/item/6a855d44000000002403d7af?xsec_token=ABtqTw-uvz9lqpZl53toW8qdSvhEfvHpjMbVv3eTjg31s=&xsec_source=pc_user' },
    { title: '🇰🇷每天认识一个小众品牌/GD也爱的香是？', brand: 'Hetras', date: '08.11', views: 1280, link: 'https://www.rednote.com/discovery/item/6a7ab6f6000000002203370e?xsec_token=ABkn-XBOp-KmdcjQO1Kn2PnW0TyGQWP5p0J5YJFXjZSMk=&xsec_source=pc_user' },
    { title: '🎁 Hetras 济州岛森林香氛礼盒免费送！', brand: 'Hetras', date: '08.07', views: 512, link: 'https://www.rednote.com/discovery/item/6a74121100000000050296e8?xsec_token=ABktVyq0hDxu8AV1PW8OXraAAIYg1q9gq4hncAPW2-4HA=&xsec_source=pc_user' }
  ],

  allBrands: [
    'AAKAM', 'AEYIO', 'ASON', 'ASUR', 'Avie Muah', 'BAU', 'CRANK', 'EOU',
    'FLAREUP', 'FRITUR', 'Hetras', 'ILLIGO', 'ISOI', '잇존', 'KASHIKO',
    'PEG LEG', 'Rockcake', 'safarispot', 'SLOWAND', '동동만두', '성구네 돼지구이'
  ],

  growth: {
    currentMonth: 8,
    kpis: [
      { label: '팔로워', value: 4666, change: 28.3, key: 'followers' },
      { label: '인터랙션', value: 23000, change: 12.9, key: 'interaction' },
      { label: '좋아요', value: 14000, change: 5.5, key: 'likes' },
      { label: '즐겨찾기', value: 7238, change: 13, key: 'saves' },
      { label: '댓글', value: 1316, change: 182, key: 'comments' }
    ],
    interactionTrend: [
      { month: 4, value: 13000, change: null },
      { month: 5, value: 1903, change: -85.1 },
      { month: 6, value: 2638, change: 38.6 },
      { month: 7, value: 20000, change: 672 },
      { month: 8, value: 23000, change: 12.9 }
    ],
    followerTrend: [
      { month: 4, value: 2800, change: null },
      { month: 5, value: 3100, change: 10.7 },
      { month: 6, value: 3551, change: 14.5 },
      { month: 7, value: 3637, change: 2.4 },
      { month: 8, value: 4666, change: 28.3 }
    ],
    ratioTrend: [
      { month: 4, interactionRate: 14.8, saveRate: 4.8 },
      { month: 5, interactionRate: 8.4, saveRate: 2.4 },
      { month: 6, interactionRate: 8.7, saveRate: 3 },
      { month: 7, interactionRate: 12.2, saveRate: 3.8 },
      { month: 8, interactionRate: 13, saveRate: 4.1 }
    ],
    commentShare: [
      { label: '댓글', value: 1316, change: 182 },
      { label: '공유', value: 773, change: 40.3 }
    ],
    monthlyRecords: [
      {
        month: 4,
        followers: null,
        interaction: 13000,
        interactionChange: null,
        likes: 8302,
        likesChange: null,
        saves: 4160,
        savesChange: null,
        comments: 26,
        commentsChange: null,
        shares: 277,
        sharesChange: null,
        impressions: 190000,
        views: 86000,
        interactionRate: 14.8,
        saveRate: 4.8
      },
      {
        month: 5,
        followers: null,
        interaction: 1903,
        interactionChange: -85.1,
        likes: 1253,
        likesChange: -84.9,
        saves: 551,
        savesChange: -86.8,
        comments: 6,
        commentsChange: -76.9,
        shares: 93,
        sharesChange: -66.4,
        impressions: 70000,
        views: 23000,
        interactionRate: 8.4,
        saveRate: 2.4
      },
      {
        month: 6,
        followers: 3551,
        interaction: 2638,
        interactionChange: 38.6,
        likes: 1675,
        likesChange: 33.7,
        saves: 915,
        savesChange: 66.1,
        comments: 1,
        commentsChange: -83.3,
        shares: 47,
        sharesChange: -49.5,
        impressions: 61000,
        views: 30000,
        interactionRate: 8.7,
        saveRate: 3
      },
      {
        month: 7,
        followers: 3637,
        followerChange: 2.4,
        interaction: 20000,
        interactionChange: 672,
        likes: 13000,
        likesChange: 672,
        saves: 6403,
        savesChange: 600,
        comments: 467,
        commentsChange: 46600,
        shares: 551,
        sharesChange: 1072,
        impressions: 440000,
        views: 170000,
        interactionRate: 12.2,
        saveRate: 3.8
      },
      {
        month: 8,
        followers: 4666,
        followerChange: 28.3,
        interaction: 23000,
        interactionChange: 12.9,
        likes: 14000,
        likesChange: 5.5,
        saves: 7238,
        savesChange: 13,
        comments: 1316,
        commentsChange: 182,
        shares: 773,
        sharesChange: 40.3,
        impressions: 180000,
        views: null,
        interactionRate: 13,
        saveRate: 4.1
      }
    ]
  },

  payments: {
    overview: {
      month: 9
    },
    records: [
      // —— 7월(8월 운영) 10笔 —— CSV 합계 총 견적 27,000,000 · 마진 7,205,000
      {month:7, region:'서울', brand:'슬로우앤드',   contractType:'유피 18%', service:'7월(8월 운영) 계정 + 유상시딩',    invoiceNo:'UP-2026-0701', manager:'손혜민', issueDate:'08.05', dueDate:'당월 10일', total:5500000, suzCost:4510000, margin:990000, paid:5500000, remain:0,       status:'완료', paidDate:'09.07',  suzRemit:'9/11 지결 올림',  memo:'7월 정산 완료 · 보고서 전달 완'},
      {month:7, region:'서울', brand:'YEOMIM',      contractType:'유피 18%', service:'7월 유상시딩',                      invoiceNo:'UP-2026-0702', manager:'손혜민', issueDate:'07.28', dueDate:'07.28',    total:3850000, suzCost:3157000, margin:693000, paid:3850000, remain:0,       status:'완료', paidDate:'07.28', suzRemit:'8/11 지결 올림',  memo:'CSV 7월 입금 완 · 보고서 전달 완'},
      {month:7, region:'서울', brand:'KUME',        contractType:'유피 18%', service:'7월 계정 + 유상시딩',                invoiceNo:'UP-2026-0703', manager:'손혜민', issueDate:'07.09', dueDate:'07.10',    total:4400000, suzCost:3608000, margin:792000, paid:4400000, remain:0,       status:'완료', paidDate:'07.10', suzRemit:'7/24 송금 완료',  memo:'CSV 7월 입금 완 · 보고서 전달 완'},
      {month:7, region:'서울', brand:'ITZON',       contractType:'유피 40%', service:'7월 계정 + 무상시딩',                invoiceNo:'UP-2026-0704', manager:'치치',   issueDate:'07.28', dueDate:'당월 10일', total:1100000, suzCost:660000,  margin:440000, paid:1100000, remain:0,       status:'완료', paidDate:'09.07', suzRemit:'9/11 지결 올림',  memo:'7월 정산 완료 · 보고서 전달 완'},
      {month:7, region:'서울', brand:'mondemonde',  contractType:'수즈 18%', service:'7월 계정 + 유상시딩 8월 재진행',     invoiceNo:'UP-2026-0705', manager:'손혜민', issueDate:'08.05', dueDate:'당월 10일', total:2200000, suzCost:1804000, margin:396000, paid:2200000, remain:0,       status:'완료', paidDate:'09.07', suzRemit:'9/11 지결 올림',  memo:'7월 정산 완료 · 기업인증비 포함 전액 정산'},
      {month:7, region:'서울', brand:'아비에무아',   contractType:'유피 18%', service:'7월 계정 + 유상시딩',                invoiceNo:'UP-2026-0706', manager:'손혜민', issueDate:'08.05', dueDate:'당월 10일', total:3300000, suzCost:1980000, margin:1320000, paid:3300000, remain:0,      status:'완료', paidDate:'09.07', suzRemit:'9/11 지결 올림',  memo:'7월 정산 완료 · 7월 100 + 8월 선금 150 전액 정산 완료'},
      {month:7, region:'서울', brand:'사파리스팟',   contractType:'유피 40%', service:'7월 계정 + 무상시딩',                invoiceNo:'UP-2026-0707', manager:'치치',   issueDate:'07.24', dueDate:'07.24',    total:1100000, suzCost:660000,  margin:440000, paid:1100000, remain:0,       status:'완료', paidDate:'07.24', suzRemit:'7/24 송금 완료',  memo:'CSV 7월 입금 완 · 보고서 전달 완'},
      {month:7, region:'서울', brand:'브라이드앤유', contractType:'유피 18%', service:'7월 계정 + 유상시딩',                invoiceNo:'UP-2026-0708', manager:'손혜민', issueDate:'07.14', dueDate:'07.20',    total:3300000, suzCost:2706000, margin:594000, paid:3300000, remain:0,       status:'완료', paidDate:'07.20', suzRemit:'7/21 송금 완료',  memo:'CSV 7월 입금 완 · 주간보고 · 보고서 작성 중'},
      {month:7, region:'서울', brand:'프리터',       contractType:'유피 40%', service:'7월 계정 + 무상시딩',                invoiceNo:'UP-2026-0709', manager:'손혜민', issueDate:'07.28', dueDate:'당월 10일', total:1100000, suzCost:660000,  margin:440000, paid:1100000, remain:0,       status:'완료', paidDate:'09.07', suzRemit:'9/11 지결 올림',  memo:'7월 정산 완료'},
      {month:7, region:'서울', brand:'KASHIKO',     contractType:'유피 100%', service:'7월 계정 + 무상시딩 (유피전용)',     invoiceNo:'UP-2026-0710', manager:'손혜민', issueDate:'07.27', dueDate:'07.27',    total:1100000, suzCost:0,       margin:1100000, paid:1100000, remain:0,       status:'완료', paidDate:'07.27', suzRemit:'필요없음',          memo:'CSV 7월 입금 완 · 보고서 작성 중 · 수즈 송금 불필요'},

      // —— 8월 운영 14笔 —— CSV 합계 28,050,000 · 마진 6,435,000 (22.9%)
      {month:8, region:'서울', brand:'크리스에프앤씨', contractType:'유피 18%', service:'7/1~7/30 계정 + 유상시딩 후불',     invoiceNo:'UP-2026-0801', manager:'손혜민', issueDate:'08.05', dueDate:'08.15', total:4950000, suzCost:4059000, margin:891000, paid:4950000, remain:0,       status:'완료', paidDate:'08.15', suzRemit:'8/11 지결 올림', memo:'CSV 8월 입금 완 · 8/5 보고서 전달 완 · 후불 100%'},
      {month:8, region:'서울', brand:'슬로우앤드',    contractType:'유피 18%', service:'8/1~8/31 계정 + 유상시딩',          invoiceNo:'UP-2026-0802', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:3300000, suzCost:2706000, margin:594000, paid:3300000, remain:0,       status:'완료', paidDate:'08.10', suzRemit:'8/11 지결 올림', memo:'CSV 8월 입금 완 · 8/5 보고서 전달 완 · 선금 100%'},
      {month:8, region:'서울', brand:'YEOMIM',       contractType:'유피 18%', service:'8/1~8/31 유상시딩',                 invoiceNo:'UP-2026-0803', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:3850000, suzCost:3157000, margin:693000, paid:3850000, remain:0,       status:'완료', paidDate:'08.10', suzRemit:'8/11 지결 올림', memo:'CSV 8월 입금 완 · 8/5 보고서 전달 완 · 선금 100%'},
      {month:8, region:'서울', brand:'KUME',         contractType:'유피 18%', service:'8/1~8/31 계정 + 유상시딩',          invoiceNo:'UP-2026-0804', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:4400000, suzCost:3608000, margin:792000, paid:4400000, remain:0,       status:'완료', paidDate:'08.10', suzRemit:'8/11 지결 올림', memo:'CSV 8월 입금 완 · 8/5 보고서 전달 완 · 선금 100%'},
      {month:8, region:'서울', brand:'ITZON',        contractType:'유피 40%', service:'8/1~8/31 계정 + 무상시딩',          invoiceNo:'UP-2026-0805', manager:'치치',   issueDate:'08.05', dueDate:'08.10', total:1100000, suzCost:660000,  margin:440000, paid:1100000, remain:0,       status:'완료', paidDate:'08.10', suzRemit:'8/11 지결 올림', memo:'CSV 8월 입금 완 · 8/5 보고서 전달 완 · 선금 100%'},
      {month:8, region:'서울', brand:'mondemonde',   contractType:'수즈 18%', service:'7/20~8/19 재진행 · 월비용 0원',     invoiceNo:'UP-2026-0806', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:0,       suzCost:0,       margin:0,       paid:0,       remain:0,       status:'대기', paidDate:'',      suzRemit:'8/11 지결 준비', memo:'CSV 8월 요청 완 · 총액 0원 · 월보고서 보고 결정 · 8/5 보고서 전달 완'},
      {month:8, region:'서울', brand:'아비에무아',    contractType:'유피 18%', service:'7/1~7/30 후불 1,100,000 원',        invoiceNo:'UP-2026-0807', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:1100000, suzCost:902000,  margin:198000, paid:1100000, remain:0,       status:'완료', paidDate:'08.10', suzRemit:'8/11 지결 올림', memo:'CSV 8월 7월 입금 완 · 8월 선금 165만원 포함 · 선금 100% · 보고서 전달 완'},
      {month:8, region:'서울', brand:'아비에무아',    contractType:'유피 18%', service:'8/1~8/31 당월 50% · 선금 50%',     invoiceNo:'UP-2026-0808', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:1650000, suzCost:1353000, margin:297000, paid:1650000, remain:0,       status:'완료', paidDate:'08.10', suzRemit:'8/11 지결 올림', memo:'CSV 8월 선금 50% · 7월 입금 완 + 8월 선금 · 보고서 전달 완'},
      {month:8, region:'서울', brand:'사파리스팟',    contractType:'유피 40%', service:'8/1~8/31 계정 + 무상시딩',          invoiceNo:'UP-2026-0809', manager:'치치',   issueDate:'08.05', dueDate:'08.10', total:1100000, suzCost:660000,  margin:440000, paid:1100000, remain:0,       status:'완료', paidDate:'08.10', suzRemit:'8/11 지결 올림', memo:'CSV 8월 입금 완 · 8/5 보고서 전달 완 · 선금 100%'},
      {month:8, region:'서울', brand:'브라이드앤유',  contractType:'유피 18%', service:'8/1~8/31 계정 + 유상시딩 + 8/15 커머스', invoiceNo:'UP-2026-0810', manager:'손혜민', issueDate:'08.11', dueDate:'08.15', total:4400000, suzCost:3608000, margin:792000, paid:0,       remain:4400000, status:'대기', paidDate:'',      suzRemit:'8/20 지결 준비', memo:'CSV 8월 요청 완 · 8월 입금 대기 · 전월 커머스 별도 결제 요청 필요 · 주간보고 · 리포트 없음'},
      {month:8, region:'서울', brand:'프리터',        contractType:'유피 18%', service:'8/1~8/31 계정 + 무상시딩',          invoiceNo:'UP-2026-0811', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:1100000, suzCost:902000,  margin:198000, paid:1100000, remain:0,       status:'완료', paidDate:'08.10', suzRemit:'8/11 지결 올림', memo:'CSV 8월 입금 완 · 보고서·리포트 불필요 · 선금 100%'},
      {month:8, region:'서울', brand:'KASHIKO',      contractType:'유피 100%', service:'8/1~8/31 계정 + 무상시딩 (유피전용)', invoiceNo:'UP-2026-0812', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:1100000, suzCost:0,       margin:1100000, paid:1100000, remain:0,     status:'완료', paidDate:'08.10', suzRemit:'필요없음 (기업인증비 60만 8/10 별도 입금 완)', memo:'CSV 8월 입금 완 · 선금 100% · 보고서 작성 중 · 수즈 송금 0'},
      {month:8, region:'서울', brand:'더티스',        contractType:'유피 18%', service:'8/16~8/31 반달 계정 + 3-5명 KOC',  invoiceNo:'UP-2026-0813', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:715000,  suzCost:330000,  margin:385000, paid:0,       remain:715000,  status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 운영 L18 · 8월 반달 비용 · 선금 100% · 리포트 없음'},
      // —— 9월 운영 22笔 —— CSV 합계 48,305,000 · 마진 16,526,000 (34.2%)
      {month:9, region:'서울', brand:'슬로우앤드',    contractType:'유피 18%', service:'9/1~9/30 계정 + 유상시딩',          invoiceNo:'UP-2026-0901', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:5500000, suzCost:4510000, margin:990000, paid:0,       remain:5500000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 대기중 · 9/4 보고서 작성 중 · 선금 100%'},
      {month:9, region:'서울', brand:'YEOMIM',       contractType:'유피 18%', service:'9/1~9/30 유상시딩',                 invoiceNo:'UP-2026-0902', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:3850000, suzCost:3157000, margin:693000, paid:0,       remain:3850000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 대기중 · 9/4 보고서 작성 중 · 선금 100%'},
      {month:9, region:'서울', brand:'KUME',         contractType:'유피 18%', service:'9/1~9/30 계정 + 유상시딩',          invoiceNo:'UP-2026-0903', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:4400000, suzCost:3608000, margin:792000, paid:0,       remain:4400000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 대기중 · 9/4 보고서 전달 완 · 선금 100%'},
      {month:9, region:'서울', brand:'ITZON',        contractType:'유피 40%', service:'9/1~9/30 계정 + 무상시딩',          invoiceNo:'UP-2026-0904', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:1100000, suzCost:660000,  margin:440000, paid:0,       remain:1100000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 대기중 · 9/4 보고서 전달 완 · 선금 100%'},
      {month:9, region:'서울', brand:'아비에무아',    contractType:'유피 18%', service:'9/1~9/30 8월 50% + 9월 50%',       invoiceNo:'UP-2026-0905', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:3300000, suzCost:2706000, margin:594000, paid:0,       remain:3300000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 대기중 · 9/4 보고서 작성 중 · 선금 50%'},
      {month:9, region:'대구', brand:'사파리스팟',    contractType:'유피 20%', service:'9/1~9/30 계정 + 무상시딩',          invoiceNo:'UP-2026-0906', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:1100000, suzCost:880000,  margin:220000, paid:0,       remain:1100000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 대기중 · 9/4 보고서 전달 완 · 선금 50% · 유피 20% 신규 계약'},
      {month:9, region:'서울', brand:'브라이드앤유',  contractType:'유피 18%', service:'9/1~9/30 계정 + 유상시딩 + 8/15 커머스', invoiceNo:'UP-2026-0907', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:4400000, suzCost:3608000, margin:792000, paid:0,    remain:4400000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 대기중 · 9/4 주간보고 · 보고서 작성 중 · 선금 100% · 전월 커머스 / 마케팅 익월 요청'},
      {month:9, region:'서울', brand:'프리터',        contractType:'유피 40%', service:'9/1~9/30 계정 + 무상시딩',          invoiceNo:'UP-2026-0908', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:1100000, suzCost:660000,  margin:440000, paid:0,       remain:1100000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 요청 완 · 9/4 보고서 전달 완 · 선금 100%'},
      {month:9, region:'서울', brand:'프리터',        contractType:'유피 100%', service:'9/1~9/30 무상시딩 (유피전용)',      invoiceNo:'UP-2026-0909', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:550000,  suzCost:0,       margin:550000, paid:0,       remain:550000,  status:'대기', paidDate:'',      suzRemit:'필요없음',          memo:'CSV 9월 요청 완 · 9/4 보고서 전달 완 · 선금 100% · 유피 100%'},
      {month:9, region:'서울', brand:'KASHIKO',      contractType:'유피 100%', service:'9/1~9/30 계정 + 무상시딩',          invoiceNo:'UP-2026-0910', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:1100000, suzCost:0,       margin:1100000, paid:0,      remain:1100000, status:'대기', paidDate:'',      suzRemit:'필요없음',          memo:'CSV 9월 대기중 · 9/4 리포트 없음 · 선금 100%'},
      {month:9, region:'서울', brand:'동동만두',      contractType:'유피 100%', service:'9/1~9/30 무상시딩 · 8월비 + 9월선금', invoiceNo:'UP-2026-0911', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:1320000, suzCost:0,       margin:1320000, paid:0,      remain:1320000, status:'대기', paidDate:'',      suzRemit:'필요없음',          memo:'CSV 9월 대기중 · 8월 비용 + 9월 선금 합산 · 선금 100% · 리포트 없음'},
      {month:9, region:'서울', brand:'상구네돼지구이', contractType:'유피 100%', service:'9/1~9/30 무상시딩 · 서울점',        invoiceNo:'UP-2026-0912', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0,       remain:660000,  status:'대기', paidDate:'',      suzRemit:'필요없음',          memo:'CSV 9월 대기중 · 상구네 서울 · 선금 100% · 리포트 없음'},
      {month:9, region:'대구', brand:'상구네돼지구이', contractType:'유피 100%', service:'9/1~9/30 무상시딩 · 대구점',        invoiceNo:'UP-2026-0913', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0,       remain:660000,  status:'대기', paidDate:'',      suzRemit:'필요없음',          memo:'CSV 9월 대기중 · 상구네 대구 · 선금 100% · 리포트 없음'},
      {month:9, region:'대구', brand:'코코리움 헤어', contractType:'유피 100%', service:'9/1~9/30 무상시딩 + 계정 (합산 165)', invoiceNo:'UP-2026-0914', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:1650000, suzCost:660000,  margin:990000, paid:0,       remain:1650000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 대기중 · 8월 무상 55 + 8월 계정 110 → 9월 1笔 165 합산 청구 · 선금 100% · 수즈 배치 有'},
      {month:9, region:'대구', brand:'크림인유어네일', contractType:'유피 100%', service:'9/1~9/30 무상시딩',                 invoiceNo:'UP-2026-0915', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0,       remain:660000,  status:'대기', paidDate:'',      suzRemit:'필요없음',          memo:'CSV 9월 대기중 · 선금 100% · 리포트 없음'},
      {month:9, region:'대구', brand:'엘리앤코스파',  contractType:'유피 100%', service:'9/1~9/30 무상시딩 + 계정 (합산 165)', invoiceNo:'UP-2026-0916', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:1650000, suzCost:660000,  margin:990000, paid:0,       remain:1650000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 대기중 · 엘리앤코 · 8월 무상 55 + 8월 계정 110 → 9월 합산 165 · 선금 100%'},
      {month:9, region:'대구', brand:'이시아폴리스',  contractType:'유피 100%', service:'8/1~8/31 무상시딩 후불',             invoiceNo:'UP-2026-0917', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0,       remain:660000,  status:'대기', paidDate:'',      suzRemit:'필요없음',          memo:'CSV 9월 대기중 · 이시아플러스점 · 8월 후불 청구 · 선금 100% · 리포트 없음'},
      {month:9, region:'서울', brand:'더티스',        contractType:'유피 40%', service:'9/1~9/30 계정 운영 + 3-5명 KOC',   invoiceNo:'UP-2026-0918', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:1430000, suzCost:660000,  margin:770000, paid:0,       remain:1430000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 L19 · 9월 정규분 · 유피 40% · 선금 100% · 리포트 없음'},
      {month:9, region:'서울', brand:'더티스',        contractType:'유피 18%', service:'9/1~9/30 KOC 6명 + KOL 3명',       invoiceNo:'UP-2026-0919', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:5500000, suzCost:4510000, margin:990000, paid:0,       remain:5500000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 L20 · KOC 6 + KOL 3 확정 · 선금 100% · 리포트 없음'},
      {month:9, region:'서울', brand:'뷰티파머시',    contractType:'유피 100%', service:'9/1~9/30 계정 + 유상시딩',          invoiceNo:'UP-2026-0920', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:5500000, suzCost:4510000, margin:990000, paid:0,       remain:5500000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 L21 · 뷰티 파마시 · 선금 100% · 9/4 리포트 없음 · 수즈 배치 有'},
      {month:9, region:'서울', brand:'샌드뮤지엄',    contractType:'유피 40%', service:'9/1~9/30 계정 운영 (월 150만 협의)', invoiceNo:'UP-2026-0921', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:1100000, suzCost:660000,  margin:440000, paid:0,       remain:1100000, status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 L22 · 샌드뮤지엄 · 세포 가격 월 150만원으로 협의 · 9/4 리포트 없음'},
      {month:9, region:'서울', brand:'샌드뮤지엄',    contractType:'유피 100%', service:'9/1~9/30 무상시딩 (유피전용)',      invoiceNo:'UP-2026-0922', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:400000,  suzCost:0,       margin:400000, paid:0,       remain:400000,  status:'대기', paidDate:'',      suzRemit:'9/11 지결 준비', memo:'CSV 9월 L23 · 샌드뮤지엄 2번째 라인 · 선금 100% · 9/4 리포트 없음 · 유피 100%'}
    ]
  },
  handoff: {
    _buildFromPayments: true,
    config: {
      accountOpsOwner: {
        '수즈': '수즈 (디지털네이티브스)',
        '유피': '손혜민 / UP INTER',
        '혼합': '계정=수즈 · 시딩=UP',
        '유피단독': '손혜민 (全과정 UP 직접운영)'
      },
      seedingOwner: {
        '수즈': '수즈 대행 (유상시딩)',
        '유피': 'UP INTER 팀 (무상시딩 직접 운영)',
        '없음': '시딩 없음 (계정운영만)'
      },
      corpCertMap: {
        'GALAXY': '완료 (기존 계정)',
        'Hetras': '완료',
        'AEYIO': '완료',
        'FRITUR': '진행중',
        'KASHIKO': '완료',
        '동동만두': '불필요 (무상시딩 전용)'
      }
    }
  },

  contracts: {
    filesFromScreenshot: [],
    brands: []
  },

  seedingPosts: [
    // ============== 슬로우앤드 서울 (도산점·한남점) ==============
    {brandKey:'슬로우앤드|서울', store:'도산점', wechatId:'Ooooook27',    wechatName:'🐰',         xhsAccount:'SoGooooD',        profileUrl:'https://xhslink.cn/m/76CUjhvkxO6', followers:'17,000', likes:'185,000', type:'영상', visitorName:'한나',  phone:'1051603988', visitDate:'9/20', visitTime:'15:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'도산점', wechatId:'QiLiKaChaDMS', wechatName:'QiLiKaChaDMS', xhsAccount:'XIN',              profileUrl:'https://xhslink.cn/m/19qkXc8jdA8', followers:'11,000', likes:'33,000',  type:'영상', visitorName:'심',    phone:'1055665817', visitDate:'9/13', visitTime:'16:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'도산점', wechatId:'343910841',   wechatName:'Meng芓颐',    xhsAccount:'516889288',        profileUrl:'https://www.xiaohongshu.com/user/profile/5cd93e2d0000000012023ac7', followers:'10,080', likes:'85,000', type:'영상', visitorName:'맹자이', phone:'010-4661-6828', visitDate:'9/12', visitTime:'15:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'도산점', wechatId:'casper_ho_', wechatName:'多点香菜',    xhsAccount:'东咚咚呀',         profileUrl:'https://www.xiaohongshu.com/user/profile/5c52f966000000001801f2b1', followers:'31,000', likes:'36,000', type:'영상', visitorName:'하효동', phone:'010-5518-9989', visitDate:'9/12', visitTime:'15:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'도산점', wechatId:'1225258014',  wechatName:'Vikiviki',    xhsAccount:'9477235703',       profileUrl:'https://xhslink.cn/o/14vntTZSFav', followers:'13,000', likes:'30,000',  type:'영상', visitorName:'Viki',  phone:'1080565410', visitDate:'9/17', visitTime:'18:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'한남점', wechatId:'ckim668',       wechatName:'Wening',       xhsAccount:'195712534',        profileUrl:'https://xhslink.cn/m/90dS33yVryT', followers:'10,600', likes:'90,000',  type:'영상', visitorName:'진월녕', phone:'1029495823', visitDate:'9/16', visitTime:'13:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'한남점', wechatId:'jungshushu',    wechatName:'ꕤ Jungྀི ᥫᩣ ᰔᩚ', xhsAccount:'27423410846',     profileUrl:'https://xhslink.com/m/6ROhOEdZAVA', followers:'21,000', likes:'151,000', type:'영상', visitorName:'정지윤', phone:'1099478608', visitDate:'9/16', visitTime:'13:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'한남점', wechatId:'-LIULIU-66',    wechatName:'66ott',       xhsAccount:'六六大顺_',         profileUrl:'https://xhslink.cn/o/6NGrRTXmYej', followers:'15,000', likes:'142,000', type:'영상', visitorName:'유쉴유', phone:'1056935280', visitDate:'9/12', visitTime:'17:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'한남점', wechatId:'Ml695956',      wechatName:'Rieng🌼',     xhsAccount:'42102178745',      profileUrl:'https://xhslink.cn/m/A95YJ2oU12B', followers:'10,000', likes:'49,000',  type:'이미지', visitorName:'임미령', phone:'1041804988', visitDate:'9/16', visitTime:'11:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'한남점', wechatId:'xincanlan_15',  wechatName:'💛',          xhsAccount:'黄黄张张',         profileUrl:'https://xhslink.cn/m/AYlOaT67CsK', followers:'10,680', likes:'71,000',  type:'영상', visitorName:'신신',  phone:'1051522368', visitDate:'9/13', visitTime:'12:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'한남점', wechatId:'seewhy2002',    wechatName:'歪歪',        xhsAccount:'3543855533',       profileUrl:'https://xhslink.cn/o/8GCy3nZDTwo', followers:'16,000', likes:'86,000',  type:'이미지', visitorName:'진이',  phone:'1083719231', visitDate:'9/10', visitTime:'15:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'한남점', wechatId:'WendyInKorea',  wechatName:'大不点',      xhsAccount:'小小不点꼬마',      profileUrl:'https://xhslink.cn/m/1i7a5hVRV3u', followers:'11,000', likes:'311,000', type:'영상', visitorName:'민호',  phone:'1065787262', visitDate:'9/14', visitTime:'18:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'한남점', wechatId:'iam13947446019',wechatName:'旻丫',        xhsAccount:'lixandty0505',     profileUrl:'https://xhslink.com/m/6RKmkI1nSwp', followers:'12,000', likes:'82,000',  type:'영상', visitorName:'투투',  phone:'010-7526-0907', visitDate:'9/12', visitTime:'17:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'한남점', wechatId:'hhwere',        wechatName:'momo',        xhsAccount:'酒酒的旅行日记',    profileUrl:'https://xhslink.cn/o/38tx3LZYzDy', followers:'21,000', likes:'89,000',  type:'이미지', visitorName:'momo',  phone:'18816748830', visitDate:'9/13', visitTime:'16:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},
    {brandKey:'슬로우앤드|서울', store:'한남점', wechatId:'1069073837',    wechatName:'常飞飞',      xhsAccount:'常飞飞-飞飞',      profileUrl:'https://xhslink.cn/o/4TinzbQnObW', followers:'124,000', likes:'250,000', type:'이미지', visitorName:'常飞飞', phone:'8615801027052', visitDate:'9/13', visitTime:'12:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1u_8skBuPtZRypxw_-kSVxkk228oBQYb7yrK98p1GYPQ/edit?gid=1747620331'},

    // ============== ① 상구네돼지구이 서울 (잠실새내 10명 · 8月 방문·배포) ==============
    {brandKey:'상구네돼지구이|서울', store:'잠실점', wechatId:'T_TII988',         wechatName:'7白知恩Ji-eun', xhsAccount:'白知恩Ji-eun', profileUrl:'https://xhslink.cn/m/5BQPNOol03G', followers:'3,300',  likes:'13,000',   type:'—', visitorName:'이지원',    phone:'1026377879',    visitDate:'8/25', visitTime:'18:00', visitStatus:'방문 완료', item:'', deployDate:'9/2',  deployUrl:'https://xhslink.cn/o/7hC24jLvLFT', sheetUrl:'https://docs.google.com/spreadsheets/d/1hKk93LRpa8KkGrDM1D3yj-wy4QxxRiKZU5Lsbx6RaC4/edit?gid=0'},
    {brandKey:'상구네돼지구이|서울', store:'잠실점', wechatId:'CindyWong1991623',  wechatName:'...',           xhsAccount:'矮油小姐姐',   profileUrl:'https://xhslink.com/m/5ciGGtjXNZT', followers:'4,619',  likes:'15,000',   type:'—', visitorName:'이',        phone:'010-5890-6218',  visitDate:'8/22', visitTime:'16:30', visitStatus:'방문 완료', item:'', deployDate:'',     deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1hKk93LRpa8KkGrDM1D3yj-wy4QxxRiKZU5Lsbx6RaC4/edit?gid=0'},
    {brandKey:'상구네돼지구이|서울', store:'잠실점', wechatId:'z13013888468',     wechatName:'미나',          xhsAccount:'米娜在韩国',   profileUrl:'https://xhslink.com/m/83WHQgTjxtd', followers:'1,146',  likes:'8,501',    type:'—', visitorName:'주미나',    phone:'010-9568-1758',  visitDate:'8/25', visitTime:'20:00', visitStatus:'방문 완료', item:'', deployDate:'',     deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1hKk93LRpa8KkGrDM1D3yj-wy4QxxRiKZU5Lsbx6RaC4/edit?gid=0'},
    {brandKey:'상구네돼지구이|서울', store:'잠실점', wechatId:'muqingzh',         wechatName:'穆青',          xhsAccount:'木子学姐',     profileUrl:'https://xhslink.com/m/5vB4XYnEgW1', followers:'10,000', likes:'1,800,000', type:'—', visitorName:'木子',      phone:'15700162243',    visitDate:'8/27', visitTime:'19:30', visitStatus:'방문 완료', item:'', deployDate:'9/1',  deployUrl:'https://xhslink.cn/o/9YZRaI556ug', sheetUrl:'https://docs.google.com/spreadsheets/d/1hKk93LRpa8KkGrDM1D3yj-wy4QxxRiKZU5Lsbx6RaC4/edit?gid=0'},
    {brandKey:'상구네돼지구이|서울', store:'잠실점', wechatId:'jillcsj',          wechatName:'Natalia',       xhsAccount:'松松爱发呆',   profileUrl:'https://xhslink.com/m/7aeAgogH5z6', followers:'1,496',  likes:'13,000',   type:'—', visitorName:'조송걸',    phone:'1039536547',    visitDate:'8/29', visitTime:'19:00', visitStatus:'방문 완료', item:'', deployDate:'9/1',  deployUrl:'https://xhslink.cn/o/LmDyQCkj9w', sheetUrl:'https://docs.google.com/spreadsheets/d/1hKk93LRpa8KkGrDM1D3yj-wy4QxxRiKZU5Lsbx6RaC4/edit?gid=0'},
    {brandKey:'상구네돼지구이|서울', store:'잠실점', wechatId:'Freshnessssy',     wechatName:'won',           xhsAccount:'Badyoung在韩国', profileUrl:'https://xhslink.cn/m/4NPSCt5ti04', followers:'9,054',  likes:'175,000',  type:'—', visitorName:'원사의',    phone:'1096313922',    visitDate:'8/29', visitTime:'18:00', visitStatus:'방문 완료', item:'', deployDate:'8/31', deployUrl:'https://xhslink.cn/o/LmDyQCkj9w', sheetUrl:'https://docs.google.com/spreadsheets/d/1hKk93LRpa8KkGrDM1D3yj-wy4QxxRiKZU5Lsbx6RaC4/edit?gid=0'},
    {brandKey:'상구네돼지구이|서울', store:'잠실점', wechatId:'iam13947446019',   wechatName:'旻丫',          xhsAccount:'973217248',    profileUrl:'https://xhslink.com/m/36q4ihCe1lJ', followers:'1,088',  likes:'12,000',   type:'—', visitorName:'투투',      phone:'010-7526-0907',  visitDate:'8/30', visitTime:'19:00', visitStatus:'방문 완료', item:'', deployDate:'9/3',  deployUrl:'https://xhslink.cn/o/AfdI6CIcs2Y', sheetUrl:'https://docs.google.com/spreadsheets/d/1hKk93LRpa8KkGrDM1D3yj-wy4QxxRiKZU5Lsbx6RaC4/edit?gid=0'},
    {brandKey:'상구네돼지구이|서울', store:'잠실점', wechatId:'Raychan04',        wechatName:'raychan',       xhsAccount:'不吃折耳根',   profileUrl:'https://xhslink.com/m/Ae8Zp2ql4r2', followers:'14,000', likes:'63,000',   type:'—', visitorName:'정윤성',    phone:'010-2184-8360',  visitDate:'8/25', visitTime:'22:00', visitStatus:'방문 완료', item:'', deployDate:'8/26', deployUrl:'https://xhslink.cn/o/1Sp7U8cJXgu', sheetUrl:'https://docs.google.com/spreadsheets/d/1hKk93LRpa8KkGrDM1D3yj-wy4QxxRiKZU5Lsbx6RaC4/edit?gid=0'},
    {brandKey:'상구네돼지구이|서울', store:'잠실점', wechatId:'Xybsy_',           wechatName:'Ethan',         xhsAccount:'Ethan',        profileUrl:'https://www.xiaohongshu.com/user/profile/5af42248e8ac2b54bd880e22', followers:'6,384',  likes:'56,000',   type:'—', visitorName:'이쓴',      phone:'1030529506',    visitDate:'8/25', visitTime:'19:30', visitStatus:'방문 완료', item:'', deployDate:'8/31', deployUrl:'https://xhslink.cn/m/OK1YsVlOuB', sheetUrl:'https://docs.google.com/spreadsheets/d/1hKk93LRpa8KkGrDM1D3yj-wy4QxxRiKZU5Lsbx6RaC4/edit?gid=0'},
    {brandKey:'상구네돼지구이|서울', store:'잠실점', wechatId:'15866369023',     wechatName:'王悦',          xhsAccount:'卡卡的韩国生活指北', profileUrl:'https://xhslink.cn/o/A9Zm8KOal8m', followers:'584',    likes:'4,108',    type:'—', visitorName:'위에',      phone:'1059680551',    visitDate:'8/23', visitTime:'19:00', visitStatus:'방문 완료', item:'', deployDate:'',     deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1hKk93LRpa8KkGrDM1D3yj-wy4QxxRiKZU5Lsbx6RaC4/edit?gid=0'},

    // ============== ② 사파리스팟 서울 (평일 11-20 · 11명 · 8月 방문 완료) ==============
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'18766349611', wechatName:'刘苏苏',   xhsAccount:'5826166818',         profileUrl:'https://xhslink.cn/m/4c2UwbcaaLq', followers:'11,000', likes:'51,000',   type:'—', visitorName:'리우란',   phone:'',               visitDate:'8/15', visitTime:'13:00', visitStatus:'방문 완료', item:'', deployDate:'8/20', deployUrl:'https://xhslink.cn/o/17ZUV9FDKDn', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'18660157108', wechatName:'히하啊qiu',xhsAccount:'哈哈酱的芋泥小屋',    profileUrl:'https://xhslink.cn/m/91qbuyfey4E', followers:'11,002', likes:'75,000',   type:'—', visitorName:'강하',     phone:'',               visitDate:'8/12', visitTime:'12:00', visitStatus:'방문 완료', item:'', deployDate:'8/20', deployUrl:'https://xhslink.cn/o/8XpvQCoM9Bh', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'bonlv11',      wechatName:'李太瘦',   xhsAccount:'a909955318',         profileUrl:'https://xhslink.cn/m/2w5mQ6NJxPB', followers:'14,000', likes:'57,000',   type:'—', visitorName:'LiShuang', phone:'',               visitDate:'8/20', visitTime:'13:00', visitStatus:'방문 완료', item:'', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/7GSJ5Gs45ma', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'mpxmao777',   wechatName:'大福猫',   xhsAccount:'福气猫猫在首尔',     profileUrl:'https://xhslink.cn/m/3MHRBnFP95n', followers:'8,118',  likes:'16,000',   type:'—', visitorName:'나나',     phone:'',               visitDate:'8/14', visitTime:'13:00', visitStatus:'불참', item:'', deployDate:'',     deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'withcc233',    wechatName:'蔡蔡',     xhsAccount:'嗨是蔡蔡',           profileUrl:'https://xhslink.com/m/2toG41u0Rkl', followers:'3,582',  likes:'110,000',  type:'—', visitorName:'채천화',   phone:'',               visitDate:'8/21', visitTime:'19:30', visitStatus:'방문 완료', item:'', deployDate:'8/22', deployUrl:'https://xhslink.cn/o/6FOZgB2pt0Y', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'Cpx469588968', wechatName:'Jennie_chenn', xhsAccount:'瞎说什么大实话', profileUrl:'https://xhslink.cn/m/9nZAFoWqkGq', followers:'1,466',  likes:'1,950,000', type:'—', visitorName:'진반효',   phone:'',               visitDate:'8/24', visitTime:'16:30', visitStatus:'방문 완료', item:'', deployDate:'8/28', deployUrl:'https://xhslink.cn/o/9M8LGZLgDPy', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'xiaoyuMSJ',    wechatName:'马萌萌',   xhsAccount:'413129385',          profileUrl:'https://xhslink.com/m/Dzt3y1i8pH', followers:'2,288',  likes:'23,000',   type:'—', visitorName:'마사가',   phone:'',               visitDate:'8/18', visitTime:'18:00', visitStatus:'방문 완료', item:'', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/9c1JiA61kxU', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'2030881599',   wechatName:'少女诗',   xhsAccount:'54778310',           profileUrl:'https://www.xiaohongshu.com/user/profile/628a56e8000000002102141f', followers:'1,550', likes:'18,000', type:'—', visitorName:'시아', phone:'', visitDate:'8/21', visitTime:'19:00', visitStatus:'방문 완료', item:'', deployDate:'8/23', deployUrl:'https://xhslink.cn/o/WOO8ULzxnw', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'hh_QKLNN_hh',  wechatName:'등아 안녕!!!', xhsAccount:'小鹿发现计划', profileUrl:'https://xhslink.cn/m/7vmG5if9NLE', followers:'1,440', likes:'15,000', type:'—', visitorName:'한등아', phone:'', visitDate:'8/12', visitTime:'16:30', visitStatus:'방문 완료', item:'', deployDate:'8/22', deployUrl:'https://xhslink.cn/o/6L5Q2D1i5SX', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'wndud1123',     wechatName:'주영',     xhsAccount:'gagagada',           profileUrl:'https://xhslink.cn/m/RaWOdQQ0jx', followers:'1,255',  likes:'6,491',    type:'—', visitorName:'노주영',   phone:'',               visitDate:'8/14', visitTime:'12:00', visitStatus:'방문 완료', item:'', deployDate:'8/14', deployUrl:'http://xhslink.cn/o/zLGTqbgc1J', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},
    {brandKey:'사파리스팟|서울', store:'본점', wechatId:'yaosummer001', wechatName:'🙈瑶summer', xhsAccount:'🙈yoyo在韩国', profileUrl:'https://xhslink.cn/m/96NTYWs0yvs', followers:'6,187', likes:'78,000', type:'—', visitorName:'요요', phone:'', visitDate:'8/25', visitTime:'17:00', visitStatus:'방문 완료', item:'', deployDate:'8/28', deployUrl:'https://xhslink.cn/o/7yWd8YbQ2LP', sheetUrl:'https://docs.google.com/spreadsheets/d/1c7TfknmELEyL97JGQ5E0xIO_zXDhirJrZ8gwDQCgWgk/edit?gid=0'},

    // ============== ④ 브라이드앤유 서울 (평일 11-17 · 14명 · 9月 방문 예정) ==============
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'ppy_zoey',       wechatName:'盼盼zoey',   xhsAccount:'大双眼皮于小驴',   profileUrl:'https://xhslink.com/m/1oYtfA9DfOy', followers:'12,000', likes:'34,000',   type:'영상', visitorName:'조이',      phone:'1036563087',     visitDate:'9/9',  visitTime:'13:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'jinwen844795031',wechatName:'威西奥',     xhsAccount:'486015372',        profileUrl:'https://www.rednote.com/user/profile/5e1aa61b0000000001000fdd', followers:'15,000', likes:'11,000',   type:'이미지', visitorName:'유림',    phone:'010-3999-8941',  visitDate:'9/10', visitTime:'15:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'Wanghp999',      wechatName:'四叶草海外购', xhsAccount:'Wanghp999',      profileUrl:'https://www.rednote.com/user/profile/56621c0cf53ee010f8226b78', followers:'10,000', likes:'135,000',  type:'이미지', visitorName:'해피',    phone:'1035283968',     visitDate:'9/10', visitTime:'15:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'gabao0909',      wechatName:'GA（黑皮版',  xhsAccount:'sd0411',          profileUrl:'https://www.rednote.com/user/profile/670d1d97000000000b031efe', followers:'14,000', likes:'117,000',  type:'이미지', visitorName:'Gaga',    phone:'18640843477',    visitDate:'9/9',  visitTime:'17:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'15158057736',    wechatName:'江晚钰',     xhsAccount:'Yizhixiaonono',    profileUrl:'https://www.rednote.com/user/profile/6604213d000000000600c1f3', followers:'12,000', likes:'22,400',   type:'이미지', visitorName:'장옥',    phone:'无',              visitDate:'9/9',  visitTime:'11:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'ckim668',        wechatName:'Wening',     xhsAccount:'阿玥的小日常',     profileUrl:'https://xhslink.cn/m/3VZU4HNzLTE', followers:'10,600', likes:'89,000',   type:'이미지', visitorName:'진월녕',  phone:'1029495823',     visitDate:'9/14', visitTime:'14:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'ivyswiftie',     wechatName:'ivyswiftie', xhsAccount:'ivyswiftie',      profileUrl:'https://www.rednote.com/user/profile/5c3069b10000000005027e0f', followers:'16,498', likes:'685,000',  type:'영상', visitorName:'다정',    phone:'1023962865',     visitDate:'9/7',  visitTime:'11:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'18207138984',    wechatName:'斯嘉丽的行李', xhsAccount:'6562243232',     profileUrl:'https://www.xiaohongshu.com/user/profile/61e561870000000021024a3f', followers:'12,000', likes:'56,000',   type:'이미지', visitorName:'斯嘉丽',  phone:'18207138984',    visitDate:'9/13', visitTime:'18:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'1225258014',     wechatName:'啾咪',       xhsAccount:'9477235703',       profileUrl:'https://xhslink.cn/o/AGgPsEQx1iq', followers:'13,000', likes:'30,000',   type:'이미지', visitorName:'Viki',    phone:'1080565410',     visitDate:'9/19', visitTime:'11:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'Wonderful_car',  wechatName:'Carissa',    xhsAccount:'Carissatravel',    profileUrl:'https://xhslink.cn/o/2ieeAF555as', followers:'13,000', likes:'69,000',   type:'이미지', visitorName:'Carissa', phone:'1059095313',     visitDate:'9/22', visitTime:'13:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'seewhy2002',     wechatName:'歪歪',       xhsAccount:'482451610',        profileUrl:'https://xhslink.cn/o/51Ae7REM56B', followers:'11,000', likes:'41,000',   type:'영상', visitorName:'진이',    phone:'1083719231',     visitDate:'9/10', visitTime:'11:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'Mojo663',        wechatName:'醒醒',       xhsAccount:'up9969',           profileUrl:'https://xhslink.cn/m/AwLxIFRnZAR', followers:'20,299', likes:'100,000',  type:'이미지', visitorName:'홍홍',    phone:'1057253663',     visitDate:'9/24', visitTime:'13:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'lizizi7788',     wechatName:'白黎酱',     xhsAccount:'白黎酱',           profileUrl:'https://www.xiaohongshu.com/user/profile/5de3937f0000000001002bd7', followers:'12,000', likes:'100,000',  type:'영상', visitorName:'白黎酱',  phone:'17349772730',    visitDate:'9/14', visitTime:'均可',   visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},
    {brandKey:'브라이드앤유|서울', store:'서울점', wechatId:'xiaoyuMSJ',      wechatName:'马萌萌',     xhsAccount:'zxcv1127',         profileUrl:'https://xhslink.cn/m/2yEXhIyGajg', followers:'29,000', likes:'125,000',  type:'이미지', visitorName:'마사가',  phone:'1065909029',     visitDate:'9/17', visitTime:'17:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/12ag9c297Kkujcnn9WoiIJziVbnv066dm26eNdwQlo60/edit?gid=1908966238'},

    // ============== ⑤ YEOMIM 서울 (11-18 · 10명 · 9月 방문 예정) ==============
    {brandKey:'YEOMIM|서울', store:'서울점', wechatId:'xincanlan_15',  wechatName:'💛',              xhsAccount:'黄黄张张',       profileUrl:'https://xhslink.cn/m/AYlOaT67CsK', followers:'10,678', likes:'71,000',   type:'영상', visitorName:'신신',      phone:'010-5152-2368',   visitDate:'9/15', visitTime:'15:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1g6uDJG2dOzl4znQWzfhNXiMTcwzbFK6A-PfqX0pjqY8/edit?gid=744255109'},
    {brandKey:'YEOMIM|서울', store:'서울점', wechatId:'Ml695956',      wechatName:'Rieng🌼',         xhsAccount:'42102178745',    profileUrl:'https://xhslink.cn/m/A95YJ2oU12B', followers:'10,000', likes:'49,000',   type:'이미지', visitorName:'임미령',    phone:'1041804988',      visitDate:'9/16', visitTime:'15:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1g6uDJG2dOzl4znQWzfhNXiMTcwzbFK6A-PfqX0pjqY8/edit?gid=744255109'},
    {brandKey:'YEOMIM|서울', store:'서울점', wechatId:'18207138984',  wechatName:'斯嘉丽的行李',    xhsAccount:'6562243232',     profileUrl:'https://www.xiaohongshu.com/user/profile/61e561870000000021024a3f', followers:'12,000', likes:'56,000',   type:'이미지', visitorName:'斯嘉丽',    phone:'18207138984',     visitDate:'9/11', visitTime:'14:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1g6uDJG2dOzl4znQWzfhNXiMTcwzbFK6A-PfqX0pjqY8/edit?gid=744255109'},
    {brandKey:'YEOMIM|서울', store:'서울점', wechatId:'seewhy2002',    wechatName:'歪歪',            xhsAccount:'3543855533',     profileUrl:'https://xhslink.cn/o/92ExZGszOev', followers:'16,000', likes:'86,000',   type:'이미지', visitorName:'진이',      phone:'1083719231',      visitDate:'9/10', visitTime:'17:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1g6uDJG2dOzl4znQWzfhNXiMTcwzbFK6A-PfqX0pjqY8/edit?gid=744255109'},
    {brandKey:'YEOMIM|서울', store:'서울점', wechatId:'18518313180',  wechatName:'AOAOQING',       xhsAccount:'9457779270',     profileUrl:'https://xhslink.cn/o/2XPHqOXJXiE', followers:'74,000', likes:'210,000',  type:'영상', visitorName:'Judy',      phone:'1026690167',      visitDate:'9/8',  visitTime:'15:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1g6uDJG2dOzl4znQWzfhNXiMTcwzbFK6A-PfqX0pjqY8/edit?gid=744255109'},
    {brandKey:'YEOMIM|서울', store:'서울점', wechatId:'WendyInKorea',  wechatName:'大不点',          xhsAccount:'xiaobudianisme', profileUrl:'https://xhslink.cn/m/8fRQZ3ev9rx', followers:'11,000', likes:'311,000',  type:'영상', visitorName:'민호',      phone:'1065787262',      visitDate:'9/14', visitTime:'17:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1g6uDJG2dOzl4znQWzfhNXiMTcwzbFK6A-PfqX0pjqY8/edit?gid=744255109'},
    {brandKey:'YEOMIM|서울', store:'서울점', wechatId:'hhwere',        wechatName:'就你吃不饱',      xhsAccount:'酒酒的旅行日记', profileUrl:'https://xhslink.cn/o/38tx3LZYzDy', followers:'21,000', likes:'90,000',   type:'이미지', visitorName:'momo',      phone:'18816748830',     visitDate:'ok',   visitTime:'ok',     visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1g6uDJG2dOzl4znQWzfhNXiMTcwzbFK6A-PfqX0pjqY8/edit?gid=744255109'},
    {brandKey:'YEOMIM|서울', store:'서울점', wechatId:'xiaoyuMSJ',      wechatName:'马萌萌',          xhsAccount:'zxcv1127',       profileUrl:'https://xhslink.cn/m/2yEXhIyGajg', followers:'29,000', likes:'125,000',  type:'이미지', visitorName:'마사가',    phone:'1065909029',      visitDate:'9/8',  visitTime:'12:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1g6uDJG2dOzl4znQWzfhNXiMTcwzbFK6A-PfqX0pjqY8/edit?gid=744255109'},
    {brandKey:'YEOMIM|서울', store:'서울점', wechatId:'ivyswiftie',     wechatName:'ivyswiftie',      xhsAccount:'ivyswiftie',      profileUrl:'https://xhslink.com/m/3vSbtdvY0SI', followers:'16,498', likes:'685,000',  type:'영상', visitorName:'다정',      phone:'1023962865',      visitDate:'9/25', visitTime:'14:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1g6uDJG2dOzl4znQWzfhNXiMTcwzbFK6A-PfqX0pjqY8/edit?gid=744255109'},
    {brandKey:'YEOMIM|서울', store:'서울점', wechatId:'769869845',      wechatName:'万万',            xhsAccount:'大湾区万万',     profileUrl:'https://www.xiaohongshu.com/user/profile/633e703c000000001901cdfd', followers:'11,000', likes:'35,000',   type:'이미지', visitorName:'万万',      phone:'18924301103',     visitDate:'9/8',  visitTime:'16:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1g6uDJG2dOzl4znQWzfhNXiMTcwzbFK6A-PfqX0pjqY8/edit?gid=744255109'},

    // ============== ⑥ 샌드뮤지엄 서울 (월목14시/금토일13시 · 11명 · 9月 방문 예정) ==============
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'390365160',           wechatName:'宝宝并亲了一你一口', xhsAccount:'阿梨亚bb',           profileUrl:'https://www.xiaohongshu.com/user/profile/558a802ae58d130a5cd67edd', followers:'5,882',  likes:'29,000',   type:'영상 집합', visitorName:'스니',      phone:'010-6783-0422',   visitDate:'9/21', visitTime:'19:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'xincanlan_15',          wechatName:'💛',                xhsAccount:'黄黄张张',           profileUrl:'https://xhslink.cn/m/AYlOaT67CsK', followers:'10,678', likes:'71,000',   type:'영상 집합', visitorName:'신신',      phone:'1051522367',       visitDate:'9/15', visitTime:'17:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'1291117482',          wechatName:'大象象_',           xhsAccount:'DANA',               profileUrl:'https://xhslink.cn/m/8iV7FBv5M34', followers:'3,888',  likes:'38,000',   type:'영상 단품', visitorName:'WANG XINRUI', phone:'1079390030',       visitDate:'9/24', visitTime:'12:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'seewhy2002',          wechatName:'歪歪',              xhsAccount:'3543855533',         profileUrl:'https://xhslink.cn/o/92ExZGszOev', followers:'16,000', likes:'86,000',   type:'영상 단품', visitorName:'진이',      phone:'1083719231',       visitDate:'9/12', visitTime:'18:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'WXY980022',           wechatName:'大意生存冒险模式',    xhsAccount:'63846833459',        profileUrl:'https://xhslink.cn/o/4arLC62q4Ab', followers:'1,443',  likes:'153,000',  type:'영상 단품', visitorName:'왕효의',    phone:'1083610961',       visitDate:'9/15', visitTime:'14:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'SSS334551',           wechatName:'蛋挞妹',            xhsAccount:'首尔小杉',           profileUrl:'https://xhslink.cn/o/2AwQdIKOSFj', followers:'5,800',  likes:'30,000',   type:'영상 집합', visitorName:'杉杉',      phone:'1080316036',       visitDate:'9/10', visitTime:'16:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'josie1016',           wechatName:'大漂亮',            xhsAccount:'环球Jo小C',          profileUrl:'https://xhslink.com/m/22pJIV0ROV1', followers:'31,000', likes:'65,000',   type:'영상 단품', visitorName:'Wang Jia', phone:'18920621883',      visitDate:'9/21', visitTime:'17:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'LAICAI6LAICAILAI888', wechatName:'把猫给我',           xhsAccount:'42905528962',       profileUrl:'https://xhslink.com/m/7cWqKEjVVwF', followers:'12,000', likes:'84,000',   type:'영상 집합', visitorName:'이정연',    phone:'1082618566',       visitDate:'9/9',  visitTime:'17:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'769869845',           wechatName:'万万',              xhsAccount:'大湾区万万',         profileUrl:'https://www.xiaohongshu.com/user/profile/633e703c000000001901cdfd', followers:'11,000', likes:'35,000',   type:'영상 집합', visitorName:'wan',       phone:'',                   visitDate:'9/8',  visitTime:'15:30', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'Wolla996144',         wechatName:'山楂',              xhsAccount:'是肚肚耶！',         profileUrl:'https://xhslink.cn/o/GaGuUTRPWD', followers:'1,778',   likes:'10,000',   type:'이미지',   visitorName:'월',        phone:'1058099976',       visitDate:'9/15', visitTime:'16:00', visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},
    {brandKey:'샌드뮤지엄|서울', store:'서울점', wechatId:'xiaoyuMSJ',           wechatName:'马萌萌',            xhsAccount:'마萌萌 in Seoul',   profileUrl:'https://xhslink.cn/m/3vSbtdvY0SI', followers:'—',     likes:'—',       type:'—',     visitorName:'马萌萌',    phone:'',                   visitDate:'—',    visitTime:'—',      visitStatus:'대기', item:'', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1mAsFwz-pNzcH5c5FIL_JxweUboNDK3lyg_1UY2Ye12o/edit?gid=2090146197'},

    // ============== ⑦ 아비에무아 서울 (가방 제품발송 · 15명 · HOWDY/CACTUS/OAK/RORA BAG) ==============
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'QiLiKaChaDMS',  wechatName:'QiLiKaChaDMS',   xhsAccount:'艺',                    profileUrl:'https://xhslink.cn/m/5uALIEWGJdy', followers:'11,000', likes:'33,000',   type:'영상단품',       visitorName:'艺',       phone:'1086695817',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'CACTUS HOBO BAG [Burgundy]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'ckim668',        wechatName:'Wening',         xhsAccount:'195712534',              profileUrl:'https://xhslink.cn/m/MuKNpHgPO9', followers:'10,600', likes:'90,000',   type:'영상집합 1위',    visitorName:'진월녕',   phone:'1020495823',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'HOWDY BAG MINI [Black]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'jungshushu',     wechatName:'ꕤ Jungྀི ᥫᩣ ᰔᩚ',xhsAccount:'27423410846',            profileUrl:'https://xhslink.com/m/6ROhOEdZAVA', followers:'21,000', likes:'151,000',  type:'영상집합 1위',    visitorName:'정지윤',   phone:'1099478608',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'CACTUS HOBO BAG MINI [Black]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'Ooooook27',      wechatName:'GR',             xhsAccount:'SoGooooD',               profileUrl:'https://xhslink.cn/m/5jeoUaDi1BI', followers:'18,871', likes:'186,000',  type:'영상단품',       visitorName:'한나',     phone:'1951602888',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'OAK BAG MINI [Crack Black]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'Val20170315',    wechatName:'怡君',           xhsAccount:'君在韩国',               profileUrl:'https://xhslink.cn/m/5G26cnoi53B', followers:'10,493', likes:'183,000',  type:'영상단품',       visitorName:'류이수',   phone:'1065789905',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'HOWDY BAG [Mocha]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'SukiiiiWang',    wechatName:'suki w',         xhsAccount:'SukiWang',               profileUrl:'https://xhslink.com/m/7ZY9JBEwJf3', followers:'73,000', likes:'605,000',  type:'영상단품',       visitorName:'wang biyao', phone:'1072026870',   visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'RORA HOBO BAG [Black]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'hhwere',         wechatName:'hcir',           xhsAccount:'酒酒的旅行日记',          profileUrl:'https://xhslink.cn/o/DXU3G41zc8', followers:'21,000', likes:'60,000',   type:'영상단품',       visitorName:'hcir',     phone:'1072026870',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'HOWDY BAG [Shine Navy]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'mandarin_g',     wechatName:'o',              xhsAccount:'我不是哈密瓜',            profileUrl:'https://xhslink.cn/o/7dKDnGeMrSu', followers:'12,000', likes:'310,000',  type:'영상단품',       visitorName:'멜론',     phone:'1067055125',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'HOWDY BAG MINI [Pearl Pink]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'1225258014',     wechatName:'Vikiviki',       xhsAccount:'9477235703',              profileUrl:'https://xhslink.cn/o/6rMi3CICvDT', followers:'13,000', likes:'30,000',   type:'영상집합 1위',    visitorName:'PENG',     phone:'1039688772',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'OAK BAG MINI [Crack Black]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'ouni163',        wechatName:'甜饼Cookie',     xhsAccount:'甜饼Cookie',             profileUrl:'https://xhslink.cn/m/4m5CUV4gma8', followers:'50,000', likes:'136,000',  type:'영상단품',       visitorName:'쿠키',     phone:'1048319566',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'HOWDY BAG MINI [Shine Navy]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'mpxmao777',      wechatName:'大福猫',         xhsAccount:'福气猫猫在首尔',          profileUrl:'https://xhslink.cn/m/157oqZLIa5f', followers:'8,104',  likes:'17,000',   type:'영상단품',       visitorName:'나나',     phone:'1057996680',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'HOWDY BAG [Mocha]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'josie1016',      wechatName:'Josie',          xhsAccount:'大漂亮王饱饱',            profileUrl:'https://xhslink.com/m/3WYMlFcWKhQ', followers:'11,000', likes:'46,000',   type:'영상단품',       visitorName:'wang jia', phone:'18920623330',    visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'HOWDY BAG [Mocha]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'muali123',       wechatName:'vivi',           xhsAccount:'361397735',              profileUrl:'https://xhslink.cn/m/8DiV1XidqHx', followers:'3,798',  likes:'25,000',   type:'영상단품',       visitorName:'이이이',   phone:'1025316891',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'CACTUS HOBO BAG MINI [Burgundy]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'xincanlan_15',    wechatName:'💛',              xhsAccount:'黄黄张张',               profileUrl:'https://xhslink.cn/o/7DXwEROZunb', followers:'10,680', likes:'71,000',   type:'영상단품',       visitorName:'신신',     phone:'1051522368',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'HOWDY BAG [Shine Black]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},
    {brandKey:'아비에무아|서울', store:'택배발송', wechatId:'z356325526',     wechatName:'🐭(没回复请多拍）', xhsAccount:'Crystal种草日记',         profileUrl:'https://xhslink.cn/m/493x6BkRt6J', followers:'11,050', likes:'44,900',   type:'영상단품',       visitorName:'조란',     phone:'1057188886',     visitDate:'', visitTime:'', visitStatus:'제품 발송 완료', item:'HOWDY BAG [Shine Navy]', deployDate:'', deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/16YTxyZIV2huV3HKZGgQeECn3GHBmogXYCP2TY4M3hz8/edit?gid=0'},

    // ============== ⑨ 뷰티파머시 서울 (신림동·도봉로 주소 · 5명 · 9月 배포 완료) ==============
    {brandKey:'뷰티파머시|서울', store:'서울점', wechatId:'威西奥',     wechatName:'—', xhsAccount:'486015372', profileUrl:'https://xhslink.com/m/5Vgh3yXwW8a', followers:'15,000', likes:'—',     type:'—', visitorName:'유림',     phone:'010-3999-8941',  visitDate:'', visitTime:'', visitStatus:'배포 완료', item:'서울특별시 관악구 신림동', deployDate:'9/4',  deployUrl:'https://xhslink.cn/o/19VtIUjwvUU', sheetUrl:'https://docs.google.com/spreadsheets/d/1C0T5OjVoks0N0tSuFJUFVQLXgEoBWByElcoYmihDvn0/edit?gid=706873513'},
    {brandKey:'뷰티파머시|서울', store:'서울점', wechatId:'7',         wechatName:'—', xhsAccount:'423265350', profileUrl:'https://xhslink.cn/m/4HfmUFDaQRo', followers:'3,300',  likes:'—',     type:'—', visitorName:'이지원',   phone:'1026377879',     visitDate:'', visitTime:'', visitStatus:'배포 완료', item:'서울시 신림동 1515-8', deployDate:'9/3',  deployUrl:'https://xhslink.cn/o/AIUCykDsv9V', sheetUrl:'https://docs.google.com/spreadsheets/d/1C0T5OjVoks0N0tSuFJUFVQLXgEoBWByElcoYmihDvn0/edit?gid=706873513'},
    {brandKey:'뷰티파머시|서울', store:'서울점', wechatId:'Kimウンウ',   wechatName:'—', xhsAccount:'837952807', profileUrl:'https://xhslink.com/m/EQzGQZIQss', followers:'1,260',  likes:'—',     type:'—', visitorName:'주은우',   phone:'1028609609',     visitDate:'', visitTime:'', visitStatus:'배포 완료', item:'서울시 강북구 도봉로', deployDate:'8/29', deployUrl:'https://xhslink.cn/o/83NsU66mmFt', sheetUrl:'https://docs.google.com/spreadsheets/d/1C0T5OjVoks0N0tSuFJUFVQLXgEoBWByElcoYmihDvn0/edit?gid=706873513'},
    {brandKey:'뷰티파머시|서울', store:'서울점', wechatId:'蛋挞妹',     wechatName:'—', xhsAccount:'首尔小杉',   profileUrl:'https://xhslink.cn/o/4ZyhGqTNdIi', followers:'5,840',  likes:'—',     type:'—', visitorName:'杉杉',     phone:'1080316036',     visitDate:'', visitTime:'', visitStatus:'배포 완료', item:'성북구 안암동2가 고려대로', deployDate:'8/29', deployUrl:'https://xhslink.cn/o/9iReS4B5HG1', sheetUrl:'https://docs.google.com/spreadsheets/d/1C0T5OjVoks0N0tSuFJUFVQLXgEoBWByElcoYmihDvn0/edit?gid=706873513'},
    {brandKey:'뷰티파머시|서울', store:'서울점', wechatId:'椰萝金',     wechatName:'—', xhsAccount:'cosmic53668', profileUrl:'https://xhslink.cn/m/9g5dgrKCfaL', followers:'2,000',  likes:'—',     type:'—', visitorName:'CHEN',     phone:'',                 visitDate:'', visitTime:'', visitStatus:'배포 완료', item:'서울특별시 강북구 도봉로 지하 198 (미아동)', deployDate:'9/2',  deployUrl:'https://xhslink.cn/o/789EHuRkHha', sheetUrl:'https://docs.google.com/spreadsheets/d/1C0T5OjVoks0N0tSuFJUFVQLXgEoBWByElcoYmihDvn0/edit?gid=706873513'},

    // ============== ⑩ KASHIKO 서울 (우체국 택배 발송 19건 · 8月 배포 완료) ==============
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'yanjing0922',       wechatName:'Angel欧妮',   xhsAccount:'Angel欧妮',           profileUrl:'https://xhslink.com/m/4XvljxdhiEc', followers:'10,000',   likes:'57,000',    type:'이미지', visitorName:'주연정',   phone:'010-3856-6272',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'마포구 광성로 17', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/5NcJvR5e49M', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'LL1576694119',     wechatName:'Kiwi',        xhsAccount:'小momo',              profileUrl:'https://xhslink.com/m/46qHNC8gLtc', followers:'31,000',   likes:'219,000',   type:'영상',   visitorName:'류입',     phone:'010-8486-6217',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'서울특별시 성북구 돈암동 2-80', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/9tgyiIHeMkc', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'olivia_x m y',     wechatName:'Olivia.Xu',   xhsAccount:'奥利奥利在线碎嘴',      profileUrl:'https://xhslink.com/m/8dkDJOfyz9H', followers:'11,000',   likes:'55,000',    type:'영상',   visitorName:'서명은',   phone:'010-3021-4048',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'마포구 월드컵북로5나길 18', deployDate:'8/14', deployUrl:'http://xhslink.cn/o/6jhn3xhr3UL', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'hhlin9',           wechatName:'lin huihui', xhsAccount:'Hye酱',                profileUrl:'https://xhslink.com/m/8iM4dIqtVM', followers:'10,232',   likes:'172,000',   type:'영상',   visitorName:'임혜혜',   phone:'010-2591-2199',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'경기도 부천시 소사구 범안로 180', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/1OuVGmiLVk7', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'yubb0220',         wechatName:'-',           xhsAccount:'醉醉咪',              profileUrl:'https://xhslink.com/m/5maXw1RdRBm', followers:'12,200',   likes:'91,000',    type:'영상',   visitorName:'키미',     phone:'010-2322-3314',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'서울시 용산구 청파로 251-1', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/4v2WCuFmMNB', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'ppy_zoey',         wechatName:'盼盼zoey',    xhsAccount:'大双眼皮',            profileUrl:'https://xhslink.com/m/1oYtfA9DfOy', followers:'12,000',   likes:'32,000',    type:'영상',   visitorName:'조이',     phone:'010-3656-3087',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'김포시 걸포2로74', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/AaoqEwjNf19', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'mandarin_g',       wechatName:'0',           xhsAccount:'我不是哈密瓜',         profileUrl:'https://xhslink.cn/m/6Mws60iLQxQ', followers:'11,000',   likes:'307,000',   type:'영상',   visitorName:'멜론',     phone:'010-6705-5125',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'종로구 종로 66길 28(501호)', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/AQtOm3Uz9L6', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'jungshushu',       wechatName:'지윤智润',    xhsAccount:'27423410846',         profileUrl:'https://xhslink.com/m/6ROhOEdZAVA', followers:'21,000',   likes:'142,000',   type:'영상',   visitorName:'정지윤',   phone:'010-9947-8608',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'서울특별시 관악구 남부순환로 168가길15', deployDate:'8/25', deployUrl:'https://xhslink.cn/o/3Vmjeo4GYGW', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'597949892',        wechatName:'卉',          xhsAccount:'Annii',                profileUrl:'https://xhslink.com/m/6B10ooajDZI', followers:'10,000',   likes:'52,000',    type:'영상',   visitorName:'LD119302',phone:'010-2993-9444',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'서울특별시 동대문구 왕산로5길6', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/2A3JnxiKEYM', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'xiaogou0203n',      wechatName:'妮妮',        xhsAccount:'妮妮',                 profileUrl:'https://xhslink.com/m/4TMw0LoMopS', followers:'21,000',   likes:'30,000',    type:'영상',   visitorName:'후연이',   phone:'010-5425-0203',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'은평구 신사동19-162', deployDate:'8/11', deployUrl:'http://xhslink.cn/o/6jhn3xhr3UL', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'343910841',        wechatName:'Meng芓颐',    xhsAccount:'暖颐燃梦',             profileUrl:'https://xhslink.com/m/9otNHbLREpw', followers:'10,045',   likes:'83,000',    type:'영상',   visitorName:'맹자이',   phone:'010-4661-6828',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'경기 시흥시 오이도4길27-1', deployDate:'8/25', deployUrl:'https://xhslink.cn/o/56bAXl4cCKV', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'zzz12-3',          wechatName:'XXX',         xhsAccount:'天上掉下个胖赵',         profileUrl:'https://xhslink.com/m/pQ5QmMYOsn', followers:'7,440',    likes:'53,000',    type:'영상',   visitorName:'조가남',   phone:'010-6386-5611',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'경기도 화성시 동탄구 동탄첨단산업2로 87', deployDate:'8/17', deployUrl:'https://xhslink.cn/o/h7FxRX9OAI', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'954622463',        wechatName:'小孟',        xhsAccount:'小孟同学',             profileUrl:'https://xhslink.com/m/5r0f5rvXX6s', followers:'10,300',   likes:'118,000',   type:'영상',   visitorName:'송호',     phone:'010-8096-5299',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'서울특별시 동대문구 이문로8길29-10', deployDate:'8/16', deployUrl:'https://xhslink.cn/o/5j6CG6jbhGz', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'469070433',        wechatName:'kathyyy',     xhsAccount:'kathy圆圆',           profileUrl:'https://www.xiaohongshu.com/user/profile/61bdf9e40000000021028c9f', followers:'10,000',   likes:'103,000',   type:'영상',   visitorName:'임우군',   phone:'010-2420-9267',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'경기도 고양시 일산동구 성현로413', deployDate:'8/30', deployUrl:'https://xhslink.cn/o/UqrSMBYoJo', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'Wolla996144',      wechatName:'山楂',        xhsAccount:'窝窝还能吃！',         profileUrl:'https://xhslink.cn/m/15oiaEnFlba', followers:'8,457',    likes:'157,000',   type:'영상',   visitorName:'월월',     phone:'010-5809-9976',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'서울시 성북구 석관동127-23', deployDate:'8/17', deployUrl:'https://xhslink.cn/o/5gHN9YnsdRZ', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'liza731',          wechatName:'南方姑娘',    xhsAccount:'首尔乔恩',             profileUrl:'https://xhslink.com/m/Zi6i7J2Tpt', followers:'21,978',   likes:'16,130',    type:'이미지', visitorName:'강이',     phone:'010-2958-7298',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'경기도 시흥시 월동중앙로 55', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/1ZWMk6ybEAw', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'Shushulovu',       wechatName:'2026年来财',  xhsAccount:'174cm._.',            profileUrl:'https://www.xiaohongshu.com/user/profile/5c6d54ce000000001201f15e', followers:'5,606',    likes:'148,000',   type:'영상',   visitorName:'슈슈',     phone:'010-2271-7357',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'서울특별시 강남구 도산대로1길 26-7', deployDate:'8/22', deployUrl:'http://xhslink.com/o/Ar28eLedr7y', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'yuanbaomelody',    wechatName:'小宝在韩国',  xhsAccount:'媛宝在韩国',           profileUrl:'https://xhslink.com/m/8VzZs8mvPWT', followers:'10,988',   likes:'23,797',    type:'영상',   visitorName:'보봉',     phone:'010-3660-6689',  visitDate:'', visitTime:'', visitStatus:'발송 완료', item:'인천 검단구 불로동800-1', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/7zEFDKhEoqr', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},
    {brandKey:'KASHIKO|서울', store:'택배발송', wechatId:'elaineshangwu',    wechatName:'李紫青（主持人）', xhsAccount:'Elaine紫青',    profileUrl:'https://www.xiaohongshu.com/user/profile/595e2d4b50c4b4541dd86aa0', followers:'20,000',   likes:'70,000',    type:'영상',   visitorName:'LI XIAOQING', phone:'82 2-6466-6000', visitDate:'', visitTime:'', visitStatus:'제품 발송', item:'서울특별시 중구 퇴계로 37 · 포인츠 쉐라톤', deployDate:'',   deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1iQzMMexQdIMXpGJB_h2IIFeQNU3jDEt4rPYEWa1BbMo/edit?gid=0'},

    // ============== ⑪ 크리스에프앤씨 서울 (11-20시 · 27명 최대 · 8月 방문·배포 완료) ==============
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'QiLiKaChaDMS', wechatName:'QiLiKaChaDMS',              xhsAccount:'艺',                    profileUrl:'https://xhslink.cn/m/7GQhSFQeYpr', followers:'11,000',  likes:'33,000',   type:'단품 영상',       visitorName:'艺',         phone:'1056775817',     visitDate:'8/13', visitTime:'18:00', visitStatus:'방문 완료', item:'', deployDate:'8/16', deployUrl:'https://xhslink.cn/o/AlZvgnm2rTh', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'zzz12-3',       wechatName:'XXX',                     xhsAccount:'天上掉下个胖赵',          profileUrl:'https://xhslink.cn/m/8MIepco6Mzt', followers:'7,510',   likes:'56,000',   type:'단품 영상',       visitorName:'조가남',     phone:'1063865611',     visitDate:'8/21', visitTime:'17:00', visitStatus:'방문 완료', item:'', deployDate:'8/26', deployUrl:'http://xhslink.com/o/7wwpefDbMHx', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'zhangliang_0606',wechatName:'1',                       xhsAccount:'菱斑响尾蛇',             profileUrl:'https://xhslink.cn/m/4JfjnwzI9z8', followers:'10,000',  likes:'80,000',   type:'단품 영상',       visitorName:'하침',       phone:'1081380060',     visitDate:'8/13', visitTime:'18:00', visitStatus:'방문 완료', item:'', deployDate:'8/14', deployUrl:'http://xhslink.com/o/7tC8ALEV58E', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'1225258014',    wechatName:'v i ki v i ki',           xhsAccount:'Jumii小啾咪',            profileUrl:'https://xhslink.cn/m/85W90YAoLqq', followers:'13,000',  likes:'30,000',   type:'단품 영상',       visitorName:'Viki',       phone:'1080565410',     visitDate:'8/18', visitTime:'17:00', visitStatus:'방문 완료', item:'', deployDate:'8/24', deployUrl:'https://xhslink.cn/o/3RbEGixSO', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'Ooooook27',     wechatName:'GR',                      xhsAccount:'fullmoon🐰✨',           profileUrl:'https://xhslink.cn/m/72Zk8OlRJkA', followers:'32,889',  likes:'143,000',  type:'집합 영상 1순위',  visitorName:'무무',       phone:'1051602888',     visitDate:'8/13', visitTime:'18:30', visitStatus:'방문 완료', item:'', deployDate:'8/19', deployUrl:'http://xhslink.cn/o/9UVLIgBXrE', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'tzh1999519',    wechatName:'长腿老头',                xhsAccount:'小唐不爱吃泡菜',          profileUrl:'https://xhslink.cn/m/1oiewtF5Qyu', followers:'5,590',   likes:'37,000',   type:'단품 영상',       visitorName:'택이',       phone:'1076286796',     visitDate:'8/13', visitTime:'15:00', visitStatus:'방문 완료', item:'', deployDate:'8/20', deployUrl:'https://xhslink.cn/o/6v1UNzhlk0g', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'KristinWuuu',   wechatName:'Kristin🐱（回复慢多发几次🥹）', xhsAccount:'Kristin🐱',        profileUrl:'https://xhslink.com/m/3aVobFGQ1Bz', followers:'11,283',  likes:'40,991',   type:'단품 영상',       visitorName:'WU ZHIJING오지정', phone:'1058501916', visitDate:'8/18', visitTime:'19:00', visitStatus:'방문 완료', item:'', deployDate:'9/1',  deployUrl:'https://xhslink.cn/o/6yI8EIFUtYI', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'yanjing_0922',   wechatName:'Angel欧妮',               xhsAccount:'冷白皮Angel',            profileUrl:'https://xhslink.cn/m/5geZx8zepTP', followers:'21,000',  likes:'223,000',  type:'집합 영상 1순위',  visitorName:'주연정',     phone:'1038566272',     visitDate:'8/12', visitTime:'15:00', visitStatus:'방문 완료', item:'', deployDate:'8/20', deployUrl:'https://xhslink.cn/o/1KQJlwt0vyV', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'Kkysns',        wechatName:'Tobi',                    xhsAccount:'Debiii',                profileUrl:'https://www.xiaohongshu.com/user/profile/662f8f9a000000000d024611', followers:'150,000', likes:'856,000',  type:'집합 영상 1순위',  visitorName:'Huangxueting',phone:'15975949897',    visitDate:'8/24', visitTime:'14:30', visitStatus:'방문 완료', item:'', deployDate:'',   deployUrl:'', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'Kiwi',          wechatName:'LL1576694119',            xhsAccount:'一一이이',               profileUrl:'https://xhslink.cn/m/hs1G85BfR',  followers:'13,000',  likes:'134,000',  type:'단품 영상',       visitorName:'류입',       phone:'1084866217',     visitDate:'8/14', visitTime:'19:00', visitStatus:'방문 완료', item:'', deployDate:'8/20', deployUrl:'https://xhslink.cn/o/A8p1yfFs0af', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'yaosummer001',  wechatName:'🙈瑶summer',              xhsAccount:'🙈yoyo在韩国',           profileUrl:'https://xhslink.cn/m/2SWZtzIDvJd', followers:'6,181',   likes:'77,000',   type:'집합 영상 1순위',  visitorName:'요요',       phone:'1065829726',     visitDate:'8/13', visitTime:'14:00', visitStatus:'방문 완료', item:'', deployDate:'8/25', deployUrl:'https://xhslink.cn/o/AUCk1uffSsp', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'Shushulovu',    wechatName:'2026年来财',              xhsAccount:'174cm._.',              profileUrl:'https://www.xiaohongshu.com/user/profile/5c6d54ce000000001201f15e', followers:'5,620',   likes:'150,000',  type:'단품 영상',       visitorName:'슈슈',       phone:'1022717357',     visitDate:'8/11', visitTime:'19:30', visitStatus:'방문 완료', item:'', deployDate:'9/3',  deployUrl:'http://xhslink.com/o/3TcTTrCVPf3', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'WSND6091',      wechatName:'猫猫Miya',                xhsAccount:'猫猫Miya',              profileUrl:'https://xhslink.cn/m/8dcmiOoJ0Dq', followers:'17,000',  likes:'151,000',  type:'집합 영상 1순위',  visitorName:'미야',       phone:'1048069188',     visitDate:'8/13', visitTime:'15:00', visitStatus:'방문 완료', item:'', deployDate:'8/24', deployUrl:'https://xhslink.cn/o/7wl5O2EkoWY', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'469070433',     wechatName:'kathyyy',                 xhsAccount:'kathy圆圆',             profileUrl:'https://www.xiaohongshu.com/user/profile/61bdf9e40000000021028c9f', followers:'10,000',  likes:'103,000',  type:'단품 영상',       visitorName:'케이시',     phone:'1024209267',     visitDate:'8/11', visitTime:'18:00', visitStatus:'방문 완료', item:'', deployDate:'8/18', deployUrl:'https://xhslink.cn/o/78uN7rP3zT6', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'Wolla996145',    wechatName:'山楂',                    xhsAccount:'窝窝还能吃！',           profileUrl:'https://xhslink.cn/m/3hsnPTK9f6P', followers:'8,457',   likes:'158,000',  type:'단품 영상',       visitorName:'이월',       phone:'1058999976',     visitDate:'8/12', visitTime:'16:30', visitStatus:'방문 완료', item:'', deployDate:'8/25', deployUrl:'https://xhslink.cn/o/8XW0hWRGT7Q', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'JIANING925_',    wechatName:'🍊',                      xhsAccount:'糯米小丞🍊',             profileUrl:'https://xhslink.cn/m/jiiW6lN1s',  followers:'16,000',  likes:'93,000',   type:'단품 영상',       visitorName:'두가녕',     phone:'1096389562',     visitDate:'8/22', visitTime:'11:00', visitStatus:'방문 완료', item:'', deployDate:'8/26', deployUrl:'https://xhslink.cn/o/Am6wsPBHFjs', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'jungshushu',    wechatName:'jung',                    xhsAccount:'지윤智润',              profileUrl:'https://xhslink.com/m/6ROhOEdZAVA', followers:'21,000',  likes:'145,000',  type:'단품 영상',       visitorName:'임지윤',     phone:'1099478608',     visitDate:'8/21', visitTime:'15:00', visitStatus:'방문 완료', item:'', deployDate:'8/28', deployUrl:'https://xhslink.cn/o/87XbZXzUz4B', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'SjMRy0808',     wechatName:'田田在韩吃喝玩乐',         xhsAccount:'田田在韩吃喝玩乐',       profileUrl:'https://xhslink.cn/m/9xU1TexetBc', followers:'5,682',   likes:'63,000',   type:'단품 영상',       visitorName:'정의',       phone:'1091839316',     visitDate:'8/26', visitTime:'11:30', visitStatus:'방문 완료', item:'', deployDate:'8/30', deployUrl:'https://xhslink.cn/o/9PvoxdtZMHe', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'hccstef',       wechatName:'琛琛',                    xhsAccount:'皮皮桃儿',               profileUrl:'https://xhslink.cn/m/nbzqKF3C8z', followers:'22,500',  likes:'303,000',  type:'집합 영상 1순위',  visitorName:'황첸',       phone:'1043651181',     visitDate:'8/18', visitTime:'15:30', visitStatus:'방문 완료', item:'', deployDate:'8/25', deployUrl:'https://xhslink.cn/o/6pYnHlaDvce', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'mpxmao777',     wechatName:'大福猫',                  xhsAccount:'福气猫猫在首尔',         profileUrl:'https://xhslink.cn/m/7VMex71i0md', followers:'8,120',   likes:'16,000',   type:'단품 영상',       visitorName:'나나',       phone:'1057996680',     visitDate:'8/18', visitTime:'16:00', visitStatus:'방문 완료', item:'', deployDate:'8/26', deployUrl:'http://xhslink.com/o/6mzE5qB5p2s', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'bonlv11',       wechatName:'李太瘦',                  xhsAccount:'元气少女瘦瘦',           profileUrl:'https://xhslink.cn/m/7q8034sjiFg', followers:'14,000',  likes:'57,000',   type:'단품 영상',       visitorName:'LiShuang', phone:'13840150514',    visitDate:'8/13', visitTime:'19:00', visitStatus:'방문 완료', item:'', deployDate:'8/21', deployUrl:'https://xhslink.cn/o/4t7kVGvRtI7', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'zoefdcy2025',   wechatName:'zoebae',                  xhsAccount:'韩国的zoebae',           profileUrl:'https://xhslink.cn/m/1u9vLEyHm9q', followers:'5,611',   likes:'110,000',  type:'집합 영상 1순위',  visitorName:'배현아',     phone:'1063666682',     visitDate:'8/10', visitTime:'17:00', visitStatus:'방문 완료', item:'', deployDate:'8/20', deployUrl:'https://xhslink.cn/o/32cA8rFIf9i', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'doubaaao',      wechatName:'.',                       xhsAccount:'豆宝豆宝',               profileUrl:'https://xhslink.cn/m/2Mal38ibTf0', followers:'7,900',   likes:'130,000',  type:'단품 영상',       visitorName:'종맹',       phone:'1092186688',     visitDate:'8/13', visitTime:'11:30', visitStatus:'방문 완료', item:'', deployDate:'8/31', deployUrl:'https://xhslink.cn/o/3JoS2Kb4HJ9', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'954622463',     wechatName:'小孟',                    xhsAccount:'小孟同学',               profileUrl:'https://xhslink.cn/m/39hfsHyjxAN', followers:'10,300',  likes:'123,000',  type:'단품 영상',       visitorName:'승이',       phone:'1082016658',     visitDate:'8/20', visitTime:'15:00', visitStatus:'방문 완료', item:'', deployDate:'9/1',  deployUrl:'https://xhslink.cn/o/2Nrg3lUZyKq', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'MoodPC66315',   wechatName:'あさみみ',                xhsAccount:'还没想好叫什么',         profileUrl:'https://xhslink.cn/m/9riQGl8Intu', followers:'7,500',   likes:'140,000',  type:'단품 영상',       visitorName:'유유',       phone:'1021917626',     visitDate:'8/14', visitTime:'19:00', visitStatus:'방문 완료', item:'', deployDate:'8/31', deployUrl:'https://xhslink.cn/o/6g5dCCwIZI2', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'},
    {brandKey:'크리스에프앤씨|서울', store:'서울점', wechatId:'1051603888',    wechatName:'小兔子',                  xhsAccount:'SoGooooD',               profileUrl:'https://xhslink.cn/m/76CUjhvkxO6', followers:'17,000',  likes:'185,000',  type:'영상',             visitorName:'한나',       phone:'1051603888',     visitDate:'8/28', visitTime:'18:30', visitStatus:'방문 완료', item:'', deployDate:'8/29', deployUrl:'https://xhslink.cn/o/1WR00Zc6KnB', sheetUrl:'https://docs.google.com/spreadsheets/d/1zTxx8QYeqEMOR6X5-TCqY50dnA4IwKSpfUGiO7I_UrI/edit?gid=92795280'}
  ]
};


function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

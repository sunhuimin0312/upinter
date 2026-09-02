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
    { month: 8, brand: '에이와이오', status: '검수·배포', visitConfirm: 15, deploy: 7, before: 8, progressCount: 20, apply: 31, select: 15 },
    { month: 8, brand: '성구네 돼지구이 서울', status: '검수·배포', visitConfirm: 10, deploy: 2, before: 8, progressCount: 10, apply: 11, select: 10 },
    { month: 8, brand: '헤트라스 명동', status: '검수·배포', visitConfirm: 26, deploy: 18, before: 8, progressCount: 30, apply: 30, select: 26 },
    { month: 8, brand: '프리터', status: '검수·배포', visitConfirm: 15, deploy: 10, before: 5, progressCount: 15, apply: 16, select: 15 },
    { month: 8, brand: '성구네 돼지구이 대구', status: '모집 중', visitConfirm: 5, deploy: null, before: 5, progressCount: 10, apply: null, select: null },
    { month: 8, brand: '코코리움헤어', status: '모집 중', visitConfirm: 5, deploy: null, before: 5, progressCount: 10, apply: null, select: null },
    { month: 8, brand: '엘리앤코', status: '모집 중', visitConfirm: 5, deploy: null, before: 5, progressCount: 10, apply: null, select: null },
    { month: 8, brand: '크림인유어 네일', status: '모집 중', visitConfirm: 5, deploy: null, before: 5, progressCount: 10, apply: null, select: null },
    { month: 8, brand: '이시아플러스점', status: '모집 중', visitConfirm: 5, deploy: null, before: 5, progressCount: 10, apply: null, select: null },
    { month: 8, brand: '아이소이 제품발송', status: '검수·배포', visitConfirm: 18, deploy: 17, before: 1, progressCount: '20–30', apply: 80, select: 18 },
    { month: 8, brand: '잇존', status: '검수·배포', visitConfirm: 10, deploy: 9, before: 1, progressCount: 10, apply: 14, select: 10 },
    { month: 8, brand: '카시코 제품발송', status: '검수·배포', visitConfirm: 10, deploy: 9, before: 1, progressCount: 10, apply: 22, select: 10 },
    { month: 8, brand: '동동만두', status: '검수·배포', visitConfirm: 10, deploy: 10, before: 0, progressCount: 10, apply: 11, select: 10 },
    { month: 8, brand: '김해 에스테틱', status: '모집 중', visitConfirm: null, deploy: null, before: null, progressCount: 10, apply: null, select: null },
    { month: 7, brand: '헤트라스 한남', status: '검수·배포', visitConfirm: 25, deploy: 22, before: 3, progressCount: 30, apply: 45, select: 25 },
    { month: 7, brand: '프리터', status: '검수·배포', visitConfirm: 20, deploy: 18, before: 2, progressCount: 20, apply: 38, select: 20 },
    { month: 7, brand: '에이와이오', status: '검수·배포', visitConfirm: 15, deploy: 14, before: 1, progressCount: 15, apply: 28, select: 15 },
    { month: 7, brand: '잇존', status: '검수·배포', visitConfirm: 15, deploy: 13, before: 2, progressCount: 15, apply: 32, select: 15 },
    { month: 6, brand: '헤트라스 한남', status: '완료', visitConfirm: 20, deploy: 20, before: 0, progressCount: 20, apply: 40, select: 20 },
    { month: 6, brand: '프리터', status: '완료', visitConfirm: 15, deploy: 15, before: 0, progressCount: 15, apply: 30, select: 15 },
    { month: 6, brand: 'Rockcake', status: '완료', visitConfirm: 10, deploy: 10, before: 0, progressCount: 10, apply: 25, select: 10 }
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
      month: 8
    },
    records: [
      {month:8, region:'서울', brand:'슬로우앤드',    contractType:'수즈 18%', service:'계정운영(수즈) + 유상시딩(수즈)', invoiceNo:'UP-2026-0801', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:3300000, suzCost:2706000, margin:594000, paid:3300000, remain:0, status:'완료', paidDate:'08.10', suzRemit:'1차 지결 완료', memo:'선금 100%'},
      {month:8, region:'서울', brand:'YEOMIM',       contractType:'수즈 18%', service:'유상시딩(수즈)',                    invoiceNo:'UP-2026-0802', manager:'손혜민', issueDate:'07.28', dueDate:'07.28', total:3850000, suzCost:3157000, margin:693000, paid:3850000, remain:0, status:'완료', paidDate:'07.28', suzRemit:'1차 지결 완료', memo:'선금 100%'},
      {month:8, region:'서울', brand:'KUME',         contractType:'수즈 18%', service:'계정운영(수즈) + 유상시딩(수즈)', invoiceNo:'UP-2026-0803', manager:'손혜민', issueDate:'07.09', dueDate:'07.10', total:4400000, suzCost:3608000, margin:792000, paid:4400000, remain:0, status:'완료', paidDate:'07.10', suzRemit:'1차 지결 완료', memo:'선금 100%'},
      {month:8, region:'서울', brand:'ITZON',        contractType:'유피 40%', service:'계정운영(수즈) + 무상시딩(유피)', invoiceNo:'UP-2026-0804', manager:'치치',   issueDate:'08.05', dueDate:'08.10', total:1100000, suzCost:660000,  margin:440000, paid:1100000, remain:0, status:'완료', paidDate:'08.10', suzRemit:'1차 지결 완료', memo:'선금 100%'},
      {month:7, region:'서울', brand:'아비에무아',    contractType:'수즈 18%', service:'계정운영(수즈) + 유상시딩(수즈) 7월분', invoiceNo:'UP-2026-0711', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:1100000, suzCost:902000,  margin:198000, paid:1100000, remain:0, status:'완료', paidDate:'08.10', suzRemit:'1차 지결 완료', memo:'선금 100% · 7월분'},
      {month:8, region:'서울', brand:'아비에무아',    contractType:'수즈 18%', service:'계정운영(수즈) + 유상시딩(수즈)', invoiceNo:'UP-2026-0805', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:1650000, suzCost:1353000, margin:297000, paid:1650000, remain:0, status:'완료', paidDate:'08.10', suzRemit:'1차 지결 완료', memo:'선금 50% 입금'},
      {month:8, region:'서울', brand:'사파리스팟',    contractType:'유피 40%', service:'계정운영(수즈) + 무상시딩(유피)', invoiceNo:'UP-2026-0806', manager:'치치',   issueDate:'08.05', dueDate:'08.10', total:1100000, suzCost:660000,  margin:440000, paid:1100000, remain:0, status:'완료', paidDate:'08.10', suzRemit:'1차 지결 완료', memo:'선금 100%'},
      {month:8, region:'서울', brand:'프리터',        contractType:'수즈 60%', service:'계정운영(수즈) + 무상시딩(유피)', invoiceNo:'UP-2026-0807', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:1100000, suzCost:902000,  margin:198000, paid:1100000, remain:0, status:'완료', paidDate:'08.10', suzRemit:'1차 지결 완료', memo:'선금 100%'},
      {month:8, region:'서울', brand:'KASHIKO',      contractType:'유피 100%', service:'계정운영 + 무상시딩 (유피전용)',  invoiceNo:'UP-2026-0808', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:660000,  suzCost:0,       margin:660000, paid:660000,  remain:0, status:'완료', paidDate:'08.10', suzRemit:'해당없음 (유피 100%)', memo:'선금 100%'},
      {month:8, region:'서울', brand:'동동만두',      contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0809', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0,       remain:660000,  status:'대기', paidDate:'',     suzRemit:'첫달 후불',           memo:'8월만 후불 · 미입금'},
      {month:8, region:'대구', brand:'이시아폴리스',  contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0810', manager:'치치',   issueDate:'',      dueDate:'',      total:660000,  suzCost:0,       margin:660000, paid:0,       remain:660000,  status:'지연', paidDate:'',     suzRemit:'해당없음',            memo:'구두계약 · 미입금'},
      {month:8, region:'서울', brand:'상구네돼지구이', contractType:'유피 100%', service:'무상시딩 (유피전용) · 서울점',     invoiceNo:'UP-2026-0811', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:660000,  suzCost:0,       margin:660000, paid:660000,  remain:0, status:'완료', paidDate:'08.10', suzRemit:'해당없음', memo:'계약 완'},
      {month:8, region:'대구', brand:'상구네돼지구이', contractType:'유피 100%', service:'무상시딩 (유피전용) · 대구점',     invoiceNo:'UP-2026-0812', manager:'치치',   issueDate:'08.05', dueDate:'08.10', total:660000,  suzCost:0,       margin:660000, paid:660000,  remain:0, status:'완료', paidDate:'08.10', suzRemit:'해당없음', memo:'계약 완'},
      {month:8, region:'대구', brand:'크림인유어네일', contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0813', manager:'치치',   issueDate:'08.05', dueDate:'08.10', total:660000,  suzCost:0,       margin:660000, paid:660000,  remain:0, status:'완료', paidDate:'08.10', suzRemit:'해당없음', memo:'계약 완'},
      {month:8, region:'대구', brand:'코코리움 헤어', contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0814', manager:'손혜민', issueDate:'08.05', dueDate:'08.10', total:550000,  suzCost:0,       margin:550000, paid:550000,  remain:0, status:'완료', paidDate:'08.10', suzRemit:'해당없음', memo:'계약 완'},
      {month:8, region:'대구', brand:'엘리앤코스파',  contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0815', manager:'치치',   issueDate:'08.05', dueDate:'08.10', total:550000,  suzCost:0,       margin:550000, paid:550000,  remain:0, status:'완료', paidDate:'08.10', suzRemit:'해당없음', memo:'계약 완'},
      {month:8, region:'서울', brand:'샌드뮤지엄',    contractType:'유피 100%', service:'무상시딩 (유피전용) · 8월 중순~',  invoiceNo:'UP-2026-0816', manager:'손혜민', issueDate:'08.12', dueDate:'08.12', total:250000,  suzCost:0,       margin:250000, paid:250000,  remain:0, status:'완료', paidDate:'08.12', suzRemit:'해당없음', memo:'8월 16~31 집행'},
      {month:8, region:'서울', brand:'크리스에프앤씨',contractType:'유피 18%',  service:'계정운영(수즈) + 유상시딩(수즈)',  invoiceNo:'UP-2026-0817', manager:'손혜민', issueDate:'08.05', dueDate:'08.15', total:4950000, suzCost:4059000, margin:891000, paid:4950000, remain:0, status:'완료', paidDate:'08.15', suzRemit:'2차 지결 완료', memo:'후불 100% · 8/24 지결 비용'},
      {month:8, region:'서울', brand:'브라이드앤유',  contractType:'유피 18%',  service:'계정운영(수즈) + 유상시딩(수즈) · 8월', invoiceNo:'UP-2026-0818', manager:'손혜민', issueDate:'08.11', dueDate:'08.15', total:4400000, suzCost:3608000, margin:594000, paid:4400000, remain:0, status:'완료', paidDate:'08.15', suzRemit:'2차 지결 완료', memo:'선금 100% · 주간보고'},
      {month:7, region:'서울', brand:'브라이드앤유',  contractType:'유피 15%',  service:'티몰 정산 · 7월분',               invoiceNo:'UP-2026-0712', manager:'손혜민', issueDate:'08.11', dueDate:'08.15', total:2154600, suzCost:1831410, margin:323190, paid:2154600, remain:0, status:'완료', paidDate:'08.15', suzRemit:'2차 지결 완료', memo:'7/1~7/30 집행'},
      {month:8, region:'서울', brand:'뷰티파머시',    contractType:'유피 18%',  service:'계정운영(수즈) + 유상시딩(수즈)',  invoiceNo:'UP-2026-0819', manager:'손혜민', issueDate:'',      dueDate:'',      total:4400000, suzCost:3608000, margin:792000, paid:4400000, remain:0, status:'완료', paidDate:'',      suzRemit:'미배치',            memo:'계약 완 · 수즈 미송금'},
      {month:8, region:'대구', brand:'고운빛깔에스테틱', contractType:'유피 62%', service:'계정운영(수즈) + 무상시딩(유피)', invoiceNo:'UP-2026-0820', manager:'치치',   issueDate:'',      dueDate:'',      total:1650000, suzCost:660000,  margin:990000, paid:0,       remain:1650000, status:'지연', paidDate:'',     suzRemit:'미배치',            memo:'구두계약 · 미입금'},
      {month:8, region:'대구', brand:'코코리움 헤어', contractType:'유피 40%',  service:'계정운영(수즈)',                  invoiceNo:'UP-2026-0821', manager:'손혜민', issueDate:'',      dueDate:'',      total:1100000, suzCost:660000,  margin:440000, paid:1100000, remain:0, status:'완료', paidDate:'',      suzRemit:'미배치',            memo:'계약 완 · 수즈 미송금'},
      {month:8, region:'대구', brand:'엘리앤코스파',  contractType:'유피 40%',  service:'계정운영(수즈)',                  invoiceNo:'UP-2026-0822', manager:'치치',   issueDate:'',      dueDate:'',      total:1100000, suzCost:660000,  margin:440000, paid:1100000, remain:0, status:'완료', paidDate:'',      suzRemit:'미배치',            memo:'계약 완 · 수즈 미송금'},
      {month:8, region:'서울', brand:'샌드뮤지엄',    contractType:'유피 40%',  service:'계정운영(수즈) · 8/16~',          invoiceNo:'UP-2026-0823', manager:'손혜민', issueDate:'08.12', dueDate:'08.12', total:500000,  suzCost:330000,  margin:170000, paid:500000,  remain:0, status:'완료', paidDate:'',      suzRemit:'2차 지결 완료',      memo:'8월 중 시작'},
      {month:8, region:'서울', brand:'더티스',        contractType:'유피 40%',  service:'계정운영(수즈)',                  invoiceNo:'UP-2026-0824', manager:'손혜민', issueDate:'',      dueDate:'',      total:1100000, suzCost:660000,  margin:440000, paid:0,       remain:1100000, status:'지연', paidDate:'',     suzRemit:'미배치',            memo:'구두계약 · 미입금'},
      {month:8, region:'서울', brand:'더티스',        contractType:'유피 18%',  service:'유상시딩(수즈)',                  invoiceNo:'UP-2026-0825', manager:'손혜민', issueDate:'',      dueDate:'',      total:4400000, suzCost:3608000, margin:792000, paid:0,       remain:4400000, status:'지연', paidDate:'',     suzRemit:'미배치',            memo:'구두계약 · 미입금'},
      {month:8, region:'서울', brand:'에끌라두',      contractType:'유피 18%',  service:'유상시딩(수즈)',                  invoiceNo:'UP-2026-0826', manager:'손혜민', issueDate:'',      dueDate:'08.21', total:10285000, suzCost:8433700, margin:1851300, paid:10285000, remain:0, status:'완료', paidDate:'',     suzRemit:'2차 지결 완료',      memo:'고액 건 · 8/21 결제입금'},
      {month:9, region:'서울', brand:'슬로우앤드',    contractType:'유피 18%',  service:'계정운영(수즈) + 유상시딩(수즈)',  invoiceNo:'UP-2026-0901', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:5500000, suzCost:4510000, margin:990000, paid:0, remain:5500000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'YEOMIM',       contractType:'유피 18%',  service:'유상시딩(수즈)',                  invoiceNo:'UP-2026-0902', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:3850000, suzCost:3157000, margin:693000, paid:0, remain:3850000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'KUME',         contractType:'유피 18%',  service:'계정운영(수즈) + 유상시딩(수즈)',  invoiceNo:'UP-2026-0903', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:4400000, suzCost:3608000, margin:792000, paid:0, remain:4400000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'ITZON',        contractType:'유피 40%',  service:'계정운영(수즈) + 무상시딩(유피)',  invoiceNo:'UP-2026-0904', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:1100000, suzCost:660000,  margin:440000, paid:0, remain:1100000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'아비에무아',    contractType:'유피 18%',  service:'계정운영(수즈) + 유상시딩(수즈)',  invoiceNo:'UP-2026-0905', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:3300000, suzCost:2706000, margin:594000, paid:0, remain:3300000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'8월 50% 및 9월 50% · 선금 50%'},
      {month:9, region:'대구', brand:'사파리스팟',    contractType:'유피 20%',  service:'계정운영(수즈) + 무상시딩(유피)',  invoiceNo:'UP-2026-0906', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:1100000, suzCost:880000,  margin:220000, paid:0, remain:1100000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'8월 50% 및 9월 50% · 선금 50%'},
      {month:9, region:'서울', brand:'브라이드앤유',  contractType:'유피 18%',  service:'계정운영(수즈) + 유상시딩(수즈) · 9월', invoiceNo:'UP-2026-0907', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:4400000, suzCost:3608000, margin:792000, paid:0, remain:4400000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'8/15 커머스 전월 / 마케팅 익월 요청 · 선금 100%'},
      {month:9, region:'서울', brand:'프리터',        contractType:'유피 40%',  service:'계정운영(수즈) + 무상시딩(유피)',  invoiceNo:'UP-2026-0908', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:1100000, suzCost:660000,  margin:440000, paid:0, remain:1100000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'프리터',        contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0909', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:550000,  suzCost:0,       margin:550000, paid:0, remain:550000,  status:'대기', paidDate:'', suzRemit:'해당없음 (유피 100%)', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'KASHIKO',      contractType:'유피 100%', service:'계정운영 + 무상시딩 (유피전용)',   invoiceNo:'UP-2026-0910', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:1100000, suzCost:0,       margin:1100000,paid:0, remain:1100000, status:'대기', paidDate:'', suzRemit:'해당없음 (유피 100%)', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'동동만두',      contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0911', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:1320000, suzCost:0,       margin:1320000,paid:0, remain:1320000, status:'대기', paidDate:'', suzRemit:'해당없음 (유피 100%)', memo:'8월 비용 및 9월 선금 · 선금 100%'},
      {month:9, region:'서울', brand:'상구네돼지구이', contractType:'유피 100%', service:'무상시딩 (유피전용) · 서울점',     invoiceNo:'UP-2026-0912', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0, remain:660000,  status:'대기', paidDate:'', suzRemit:'해당없음 (유피 100%)', memo:'9월분 · 선금 100%'},
      {month:9, region:'대구', brand:'상구네돼지구이', contractType:'유피 100%', service:'무상시딩 (유피전용) · 대구점',     invoiceNo:'UP-2026-0913', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0, remain:660000,  status:'대기', paidDate:'', suzRemit:'해당없음 (유피 100%)', memo:'9월분 · 선금 100%'},
      {month:9, region:'대구', brand:'코코리움 헤어', contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0914', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0, remain:660000,  status:'대기', paidDate:'', suzRemit:'해당없음 (유피 100%)', memo:'9월분 · 선금 100%'},
      {month:9, region:'대구', brand:'크림인유어네일', contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0915', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0, remain:660000,  status:'대기', paidDate:'', suzRemit:'해당없음 (유피 100%)', memo:'9월분 · 선금 100%'},
      {month:9, region:'대구', brand:'엘리앤코스파',  contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0916', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0, remain:660000,  status:'대기', paidDate:'', suzRemit:'해당없음 (유피 100%)', memo:'9월분 · 선금 100%'},
      {month:9, region:'대구', brand:'이시아폴리스',  contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0917', manager:'치치',   issueDate:'09.04', dueDate:'09.10', total:660000,  suzCost:0,       margin:660000, paid:0, remain:660000,  status:'대기', paidDate:'', suzRemit:'해당없음 (유피 100%)', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'더티스',        contractType:'유피 18%',  service:'계정운영(수즈)',                  invoiceNo:'UP-2026-0918', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:1430000, suzCost:858000,  margin:572000, paid:0, remain:1430000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'더티스',        contractType:'유피 18%',  service:'유상시딩(수즈)',                  invoiceNo:'UP-2026-0919', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:5500000, suzCost:4510000, margin:990000, paid:0, remain:5500000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'8/15 커머스 전월 / 마케팅 익월 요청 · 선금 100%'},
      {month:9, region:'서울', brand:'뷰티파머시',    contractType:'유피 100%', service:'계정운영(수즈) + 유상시딩(수즈)',  invoiceNo:'UP-2026-0920', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:4400000, suzCost:3608000, margin:792000, paid:0, remain:4400000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'샌드뮤지엄',    contractType:'유피 40%',  service:'계정운영(수즈)',                  invoiceNo:'UP-2026-0921', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:1100000, suzCost:660000,  margin:440000, paid:0, remain:1100000, status:'대기', paidDate:'', suzRemit:'미배치', memo:'9월분 · 선금 100%'},
      {month:9, region:'서울', brand:'샌드뮤지엄',    contractType:'유피 100%', service:'무상시딩 (유피전용)',              invoiceNo:'UP-2026-0922', manager:'손혜민', issueDate:'09.04', dueDate:'09.10', total:400000,  suzCost:0,       margin:400000, paid:0, remain:400000,  status:'대기', paidDate:'', suzRemit:'해당없음 (유피 100%)', memo:'9월분 · 선금 100%'}
    ]
  }
};

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

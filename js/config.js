const CONFIG = {
  googleSheets: {
    enabled: false,
    apiKey: '',
    spreadsheetId: '',
    ranges: {
      seeding: '무상시딩!A1:I',
      posts: '계정관리!A1:K',
      growth: '월별성장!A1:K'
    }
  },
  sync: {
    autoRefreshMs: 5 * 60 * 1000,
    showStatus: true
  },
  ui: {
    currentMonth: 8,
    currentYear: 2026,
    dateFormat: 'MM.DD',
    numberFormat: 'ko-KR'
  }
};

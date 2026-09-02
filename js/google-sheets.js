const GoogleSheets = {
  async fetchRange(range) {
    return new Promise((resolve, reject) => {
      if (!CONFIG.googleSheets.enabled) {
        resolve(null);
        return;
      }
      if (!CONFIG.googleSheets.apiKey || !CONFIG.googleSheets.spreadsheetId) {
        console.warn('Google Sheets 설정이 완료되지 않았습니다. config.js 에서 apiKey 와 spreadsheetId 를 설정하세요.');
        resolve(null);
        return;
      }
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.googleSheets.spreadsheetId}/values/${range}?key=${CONFIG.googleSheets.apiKey}`;
      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then(data => resolve(data))
        .catch(err => {
          console.error('Google Sheets 데이터 불러오기 실패:', err);
          resolve(null);
        });
    });
  },

  parseSeedingData(rawValues) {
    if (!rawValues || !rawValues.values || rawValues.values.length < 2) return [];
    const headers = rawValues.values[0];
    const rows = rawValues.values.slice(1);
    return rows.map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        obj[h.trim()] = row[i] !== undefined ? row[i] : null;
      });
      return obj;
    });
  },

  async loadAll() {
    return Promise.all([
      this.fetchRange(CONFIG.googleSheets.ranges.seeding),
      this.fetchRange(CONFIG.googleSheets.ranges.posts),
      this.fetchRange(CONFIG.googleSheets.ranges.growth)
    ]).then(([seedingRaw, postsRaw, growthRaw]) => ({
      seeding: this.parseSeedingData(seedingRaw),
      posts: this.parseSeedingData(postsRaw),
      growth: this.parseSeedingData(growthRaw)
    }));
  }
};

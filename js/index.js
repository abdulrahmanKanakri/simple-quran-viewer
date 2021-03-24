const app = {
  data() {
    return {
      pageCounter: 1,
      minPage: 1,
      maxPage: 604,
    };
  },
  methods: {
    nextPage() {
      this.pageCounter++;
    },
    prevPage() {
      this.pageCounter--;
    },
    pad(n, size) {
      var s = "000000000" + n;
      return s.substr(s.length - size);
    }
  },
  computed: {
    getPageCounter() {
      return this.pageCounter;
    },
    loadCurrentPage() {
      const page_id = this.pad(this.pageCounter, 3);
      return `https://www.daily-quran.com/static/pages/page-${page_id}.jpg`;
    },
  },
};

Vue.createApp(app).mount('#app');

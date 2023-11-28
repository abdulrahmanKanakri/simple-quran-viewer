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
    updatePageCounter(e) {
      const value = e.target.value;
      if(value <= this.maxPage && value >= this.minPage) {
        this.pageCounter = value;
      }
    }
  },
  computed: {
    getPageCounter() {
      return this.pageCounter;
    },
    loadCurrentPage() {
      const page_id = Number(this.pageCounter).toString().padStart(3, "0");
      return `https://www.daily-quran.com/static/pages/pngs/page-${page_id}.jpg`;
    },
  },
};

Vue.createApp(app).mount('#app');

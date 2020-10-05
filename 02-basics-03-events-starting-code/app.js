const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed: {
    fullname () {
      if (this.name === '') {
        return '';
      }
      return `${this.name} Yepez`;
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput () {
      this.name = '';
    },
  },
});

app.mount('#events');

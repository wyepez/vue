const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    outputFullname () {
      if (this.name === '') {
        return '';
      }
      return `${this.name} Yepez`;
    },
    resetInput () {
      this.name = '';
    },
  },
});

app.mount('#events');

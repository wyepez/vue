const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },
  watch: {
    counter () {
      if (this.counter > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    fullname () {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return `${this.name} ${this.lastName}`;
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
      this.lastName = '';
    },
  },
});

app.mount('#events');

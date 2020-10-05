const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
    submitForm()
    {
      alert('Submitted!');
    },
  },
});

app.mount('#events');

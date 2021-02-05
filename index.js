/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "Dani",
      showInfo: false,
      fruits: ["apple", "banana", "cantaloupe"],
      newFruit: "",
      todos: []
    };
  },
  methods: {
    changeMessage: function() {
      this.message = "Cool....";
    },
    addNewFruit: function() {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
    loadTodos: function() {
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response.data);
        this.todos = response.data;
      });
    }
  }
});

// response = HTTP.get("https://jsonplaceholder.typicode.com/todos")
// response.parse

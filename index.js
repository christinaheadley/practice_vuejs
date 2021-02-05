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
      todos: [],
      title: ""
    };
  },
  created: function() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      console.log(response.data);
      this.todos = response.data;
    });
  },
  methods: {
    changeMessage: function() {
      this.message = "Cool....";
    },
    addNewFruit: function() {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
    addNewTodo: function() {
      var params = {
        userId: 1,
        title: this.title,
        completed: false
      };
      // create action
      axios.post("https://jsonplaceholder.typicode.com/todos", params)
      .then(response => {
        console.log(response.data);
        this.todos.unshift(response.data);
        this.title = "";
      });
    }
  }
});

// response = HTTP.get("https://jsonplaceholder.typicode.com/todos")
// puts response.parse
// HTTP.post("https://jsonplaceholder.typicode.com/todos", body: {})

/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "Dani",
      showInfo: false,
      fruits: ["apple", "banana", "cantaloupe"],
      newFruit: ""
    };
  },
  methods: {
    changeMessage: function() {
      this.message = "Cool....";
    },
    addNewFruit: function() {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
});
/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "Dani"
    };
  },
  methods: {
    changeMessage: function() {
      this.message = "Cool....";
    }
  }
});
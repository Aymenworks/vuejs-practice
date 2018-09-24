var app = new Vue({
  el: '#username',
  data: {
    name: 'My boy',
  }
})

Vue.component('people-list', {
  // Prop is a custom attribute given by the view
  props: ['people'],
  template: '<li>{{ people.name }}</li>'
})

var secondSection = new Vue({
  el: '#secondSection',
  data: {
    currentTime: new Date().toLocaleString(),
    shouldDisplayWeather: true,
    peoples: [
      {  name: "Aymen" },
      {  name: "Karin" },
      {  name: "Katsuya" },
      {  name: "John" },
      {  name: "Koya" },
      {  name: "Kota" },
    ],
  },
  methods: {
    addPeople: function() {
      console.log("test")
      secondSection.peoples.push( { name: "New people" } )
    },
    removeLastPeople: function() {
      secondSection.peoples.pop()
    }
  }
})

var loginSection = new Vue({
  el: "#loginSection",
  data: {
    email: "aymen"
  }
})

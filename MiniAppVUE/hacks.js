var app = new Vue({
  el: '#app',
  data: {
    lista: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
  },
  methods: {
  	
  }
})
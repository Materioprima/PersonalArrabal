var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola caracola '+ new Date().toLocaleString(),
    titulo: 'Titulaso',
    cambios: 'cambio',
    bizivle: false , 
    footer: 'Pie',
    lista:[
    	{texto: 'Hola', pene:'picha'}, 
    	{texto: 'que tal', pene:'picha'},
    	{texto: 'como estamos', pene:'picha'} ]
  },
  methods: {
  	reversa: function () {
  		this.titulo = this.titulo.split('').reverse().join('')
  	},

  	jugada: function() {
  		this.titulo = 'PENE'
  	}
  }
})
$('button').click(function(e) {
	$('.contenido').empty();
	llamada(10);
});

function llamada(cont){
	if(cont>0){
		$.getJSON('https://dog.ceo/api/breeds/image/random', function(data) {
			$('.contenido').append('<img class ="foto" src="'+data.message+'">');
			console.log(data);
		});
		llamada(cont-1);
	}
}
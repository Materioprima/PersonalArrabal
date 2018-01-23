$('button').click(function(e) {
	$('.contenido').empty();
	for(var i=0;i<50;i++){
		llamada();
	}
});

function llamada(){
	$.getJSON('https://dog.ceo/api/breeds/image/random', function(data) {
		$('.contenido').append('<img class ="foto" src="'+data.message+'">');
		console.log(data);
	});
}
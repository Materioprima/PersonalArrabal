var anadir=$('.add');
var borrar=$('.clr');
var form=$('#formulario');
var lista=$('.elem');
var elemento=$('.texto');
var arrayelem= localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function inicio(){
	pintaArray();
}
inicio();
function anadeElem(elem){
	lista.append('<li>'+elem+'</li>');
}

function pintaArray(){
	lista.empty();
	arrayelem.forEach(item => {
  		anadeElem(item);
  		lista.append('<button class="puntitos bt1" style="background-color:green;">+</button>');
  		lista.append('<button class="puntitos bt2" style="background-color:blue;">-</button>');
  		lista.append('<button class="puntitos bt3" style="background-color:red;">X</button>');
	});
}

function enter(){
	var textaco=$( ".texto" ).val();
	if(textaco!=""){
		console.log(textaco);
		arrayelem.push(textaco);
		local();
		pintaArray();
		$(".texto").val("");
	}
}

function local(){
	localStorage.setItem('items', JSON.stringify(arrayelem));
	const data = JSON.parse(localStorage.getItem('items'));
}

form.submit(function(e) {
	e.preventDefault();
	enter();
});

anadir.click(function(e) {
	enter();
});

borrar.click(function(e) {
	lista.empty();
	localStorage.clear();
	arrayelem=[];
});

$('.bt1').click(function(e) {
	
});

$('.bt2').click(function(e) {
	
});

$('.bt3').click(function(e) {
	
});


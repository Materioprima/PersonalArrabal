var anadir=$('.add');
var borrar=$('.clr');
var form=$('#formulario');
var lista=$('.elem');
var elemento=$('.texto');
var arrayelem= localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
var posicion=0;

function inicio(){
	pintaArray();
}
inicio();
function anadeElem(elem){
	lista.append('<li>'+elem+'</li>');
	posicion+=4;
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

function manejo(el1,el2,el3,el4,bot){
	console.log(el1);
	console.log(el2);
	console.log(el3);
	console.log(el4);
	if(bot==3){
		el1.remove();
		el2.remove();
		el3.remove();
		el4.remove();
	}
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
	var mas=$(this).get(0);
	var cosa=$(this).prev().get(0);
	var menos=$(this).next().get(0);
	var quitar=$(this).next().next().get(0);
	console.log(cosa);
	console.log(mas);
	console.log(menos);
	console.log(quitar);
	mas.remove();
});

$('.bt2').click(function(e) {
	var hola=$('.bt2').index(this);
	console.log(hola);
});

$('.bt3').click(function(e) {
	var mas=$(this).get(0);
	var cosa=$(this).prev().get(0);
	var menos=$(this).prev().prev().get(0);
	var quitar=$(this).prev().prev().prev().get(0);
	manejo(quitar,menos,cosa,mas,3);
});


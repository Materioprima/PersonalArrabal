$(document).ready(function(){
	var bombas=0;
	var toque=1;
	var incoming=0;
	var contador= $(".in1>h3");
	var segundo= $(".in2>h2");
	setInterval(function(){
		bombas+=incoming;
		contador.text('BOMBS: '+bombas);
		segundo.text('BOMBS/s: '+incoming);
	},1000);
	$(".foto").mousedown(function() {
		$(".foto").css({
			transform: 'scale3d(1.15,1.15,1) rotate(10deg)',
			opacity: '0.95'
		});;
		bombas+=toque;
		contador.text('BOMBS: '+bombas);
	});
	$(".in1").mouseup(function() {
		$(".foto").css({
			transform: 'scale3d(1,1,1) rotate(0deg)',
			opacity: '1'
		});
	});
});
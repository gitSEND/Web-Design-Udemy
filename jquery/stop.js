$(document).ready(function(){
	$('#ejecutar').on('click', function(){
		/* 	Stop por defecto va a parar la animacion en curso y pasar a la siguiente.
			Podemos parar la cola de animaciones siguientes
			y tambien podemos saltar al final de la animacion.
		*/

		$('.caja').animate({
			marginLeft: '500px'
		}, 5000);


		// $('.caja').animate({
		// 	marginLeft:  '0px'
		// }, 5000);
	});

	$('#parar').on('click', function(){
		//.stop(limpiarAnimaciones, Saltar al final);
		// .stop(true, false);
		$('.caja').stop(false, true);
	});
});
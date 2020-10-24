$(document).ready(function(){

	/*Los callbacks son funciones que se ejecutan 
	despues de que una animacion haya terminado.*/

	$('#ejecutar').on('click', function(){
		$('.caja').slideUp(1000, function(){
			$(this).slideDown(1000);
		});
	});

	/* Si no existieran los callbacks se ejecutarian las 
	siguientes acciones justo despues del inicio de la animacion.
	Esto nos podria provocar errores en el diseño.
	*/

	// // Esto no funcionaria correctamente sin un callback:
	// $('#ejecutar').on('click', function(){
	// 	$('.caja').slideUp(300);
	// 	alert('Animacion Iniciada');
	// 	$('.caja').slideDown(300);
	// });

});
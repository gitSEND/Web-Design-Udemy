// De esta forma podemos ejecutar nuestro codigo 
// hasta que todo el documento haya cargado.
$(document).ready(function(){
	// alert('Hola jquery');

	// Syntax de Jquery
	// $(selector).accion();

	/*
		$ - Indicamos que vamos acceder a jquery.
		selector - Accedemos al elemento que queramos trabajar.
		accion - Lo que queremos hacer con el elementos seleccionado.
	*/

	// Puedes probar en consola el siguiente codigo:
	// $('h1').hide();
});

// Tambien podemos hacerlo de esta forma:
$(function(){
	// Codigo que se ejecutara hasta que el documento haya cargado.
});
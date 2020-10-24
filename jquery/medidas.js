$(document).ready(function(){
	var titulo = $('#titulo');
	var info = $('#info');

// .width()
// Calcula el ancho del elemento
	info.append('Ancho: ' + titulo.width() + '<br>');

// .innerWidth()
// Calcula el ancho del elemento + el padding
	info.append('Ancho Interno: ' + titulo.innerWidth() + '<br>');


// .outerWidth()
// Calcula el ancho del elemento + el padding + el borde
	info.append('Ancho Externo: ' + titulo.outerWidth() + '<br>');


// .outerWidth(true)
// Calcula el ancho del elemento + el padding + el borde + margin
	info.append('Ancho Externo: ' + titulo.outerWidth(true) + '<br>');

// -----

// .height()
// Calcula el alto del elemento
	info.append('Alto: ' + titulo.height() + '<br>');

// .innerHeight()
// Calcula el alto del elemento + el padding
	info.append('Alto Interno: ' + titulo.innerHeight() + '<br>');

// .outerHeight()
// Calcula el alto del elemento + el padding + el borde
	info.append('Alto Externo: ' + titulo.outerHeight() + '<br>');
	
// .outerHeight()
// Calcula el alto del elemento + el padding + el borde + margin
	info.append('Alto Externo: ' + titulo.outerHeight(true) + '<br>');


});
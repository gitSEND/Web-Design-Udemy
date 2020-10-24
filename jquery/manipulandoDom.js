$(document).ready(function(){

// .text()
	// $('#titulo').text('Encabezado Modificado con Jquery');

// .html()
	$('#titulo').html('<u>Encabezado Modificado con Jquery</u>');

// .val()
	var nombre = $('#nombre');
	nombre.on('change', function(){
		$('#titulo').text(nombre.val());
	});
	
// .attr()
	$('#enlace').text('FalconMasters.com');
	$('#enlace').attr('href', 'http://www.falconmasters.com');
	
	// Multiples atributos.
	$('#enlace').attr({
		'class': 'azul',
		'target': '_blank'
	});	

});

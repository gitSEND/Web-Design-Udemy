$(document).ready(function(){
	var contenedor = $('#contenedor');
	var contador = 1;
	// Creamos una nueva caja con Jquery
	// Y la guardamos en la variable Caja

	$('#agregar').on('click', function(){
		var caja = $('<div></div>').attr('class', 'caja').text(contador);
		contador++;

// Append agrega contenido al INICIO de un contenedor.
		// contenedor.append(caja);
		
// Prepend agrega contenido al FINAL de un contenedor.
		contenedor.prepend(caja);

// Before me permite posicionar un elemento ANTES de otro.
		// contenedor.before(caja);
		
// After me permite posicionar un elemento DESPUES de otro.
		// contenedor.after(caja);
	});
});
var cajas = document.getElementsByTagName('div');
// var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primera');

// cajas[0] nos retorna la primera caja


// primeraCaja.textContent = 'Hola Mundo!';
primeraCaja.innerHTML = '<u>Hola Mundo</u>';

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- 

// ----- Creando Nodos
	// 1.- Crear el elemento
	var caja = document.createElement('div');
	// 2.- Crear uno nodo de texto
	var contenido = document.createTextNode('Hola Mundo');
	// 3.- Añadir el nodo de texto al elemento
	caja.appendChild(contenido);
	// 4.- Agregar atributos a los caja
	caja.setAttribute('class', 'caja naranja');

	// 5.- Agregar el elemento al documento
	// var contenedor = document.getElementById('contenedor');
	// contenedor.appendChild(caja);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- 

// ----- Modificando la clase o id de un elemento
caja.id = 'primera';
caja.className = 'caja naranja';

// ----- Conociendo el elemento padre
	var padre = cajas[0].parentNode;

// ----- Posicionar el elemento antes de otro seleccionado
	// padre.insertBefore(caja, primeraCaja);

// ----- Remplazando Nodos
	padre.replaceChild(caja, cajas[2]);

// ----- Eliminando Nodos
	padre.removeChild(cajas[3]);
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
(function(){
var $enviar = $('#send');
var $nombre = $('#nombre');
var $apellido = $('#apellidos');
var $telefono = $('#telefono');
var $correo = $('#email');

var cargarPagina = function(){
	 $('.modal').modal();
	 $enviar.click(enviarDatos);
	 $enviar.click(limpiarInputs);
	 $enviar.click(contContactos);
};

var enviarDatos = function(){
	//Nodo Padre
	var $contactos = $('#contactos');

	//Creación de contenedores
	var $item = $('<li/>', {'class': 'collection-item avatar'});

		var $icono = $('<img>', {'class': 'circle blue contactImage'});
		$icono.attr('src', 'imgs/dian.ico');

		var $span = $('<span/>', {'class': 'title'});
		$span.append($nombre.val() + " " + $apellido.val());

		var $contNumero = $('<p/>');
		$contNumero.append($telefono.val());
		var $contCorreo = $('<p/>');
		$contCorreo.append($correo.val());

		var $editar = $('<a/>', {'class': 'secondary-content'});
		$editar.attr('href', '#modalEditar');
		var $iconoEditar = $('<i class="material-icons">mode_edit</i>');
		$editar.append($iconoEditar);
	$item.append($icono);
	$item.append($span);
	$item.append($contNumero);
	$item.append($contCorreo);
	$item.append($editar);
	$contactos.append($item);
}
var limpiarInputs=function(){
	$nombre.val("");
	$nombre.removeClass('valid active');
	$apellido.val("");
	$apellido.removeClass('valid active');
	$telefono.val("");
	$telefono.removeClass('valid active');
	$correo.val("");
	$correo.removeClass('valid active');
}
var contContactos=function(){
	var $contactos = $('#contacts');
	var $noNombres=$('.title').length;
	$contactos.text($noNombres);
}

$(document).ready(cargarPagina);     
}) ();




const mensajes = []; 

function agregarMensaje(mensaje) {
    mensajes.push(mensaje);
}

function obtnerCantidaddeMensaje() {
    return mensajes.length;
}

function obtenerMensajes() {
    return mensajes;
}

function borrarMensajes() { 
    mensajes.splice(0, mensajes.length);
} 

module.exports = {
    agregarMensaje,
    obtnerCantidaddeMensaje,
    obtenerMensajes,
    borrarMensajes
}; 
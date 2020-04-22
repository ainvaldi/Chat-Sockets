
let ModuloChat = {

    mensajes : [{
        id: 1,
        mensaje: "Bienvenidos al chat.",
        usuario: "La sala les dice"
    }],

    agregarMensaje: function  (mensaje) {
        this.mensajes.push(mensaje);
    },

    obtnerCantidaddeMensaje: function () {
        return mensajes.length;
    }
};

/*
let ModuloChat = function () {

    let mensajes = [{
        id: 1,
        mensaje: "Bienvenidos al chat.",
        usuario: "La sala les dice:"
    }];

    mensajes.mostrar = function (mensajes) {
        return mensajes;
    }

    mensajes.agregarMensaje = function (mensaje) {
        modulo.listaMensaje.push(mensaje);
    }

    mensajes.obtnerCantidaddeMensaje = function () {
        return modulo.listaMensaje.length;
    }

    return mensajes;

};
*/


// ModuloChat.agregarMensaje('soy un mensaje');
// ModuloChat.obtnerCantidaddeMensaje();
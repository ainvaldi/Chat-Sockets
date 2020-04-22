const socket = io();
 
// Obtener el username desde la URL
const datosUrl = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});
let nombreForm = datosUrl.username;

// Envio el username 
socket.emit('nuevo-usuario', {nombreForm});

// Envio para un mensaje
socket.on ('aceptar-acceso', function(nombre){
    socket.emit('new-mensaje', {
        id: 0,
        mensaje: 'se ha unido.',
        usuario: nombre
    }) 
})
    
// Recibir usuarios conectados
socket.on ('lista-conectados', function (usernames) {
    renderConectados(usernames);
})
// Username en uso, denegar acceso
socket.on ('denegar-acceso', function (username) {
    renderDenegar(username , " ya esta en uso.") 
})
// Chat lleno, denegar acceso
socket.on ('denegar-acceso-50-usuarios', function (username) {
    renderDenegar (username , " el chat esta lleno.");
 

})
function renderDenegar(username, mensaje) {
    alert(username + mensaje);
    return document.location.href="/" ;
}



let listaConectados = document.getElementById('lista-conectados'); 
let dmensaje = document.getElementById('chat-mensaje');
let mensajeForm = document.getElementById('mensaje');
let btnenviar = document.getElementById('btnenviar');
let actions = document.getElementById('actions');


// Funcion para renderizar un conectados
function renderConectados(data) {
    var html = data.map(function (elem, index) {
        return (`<div> 
                <em>${elem}</em>
              </div>`);
    }).join(" ");
    listaConectados.innerHTML = html;
}

// Funcion para renderizar un mensaje
function render(data) {
    var html = data.map(function (elem, index) {
        return (`<div>
                <strong>${elem.usuario}</strong>:
                <em>${elem.mensaje}</em>
              </div>`);
    }).join(" ");
    dmensaje.innerHTML = html;
}
  
// Escuchar mensajes y mostrarlos
socket.on('chat-mensaje', function (data) {
    actions.innerHTML = '';
    console.log(data);
    render(data);
})

// Btn enviar mensaje
btnenviar.addEventListener("click", () => {
    if (mensajeForm.value == '') {
        alert('Por favor ingrese un mensaje');
        return false;
    } else { 
        socket.emit('new-mensaje', {
            id: 0,
            mensaje: mensajeForm.value,
            usuario: nombreForm
        })
    }
    mensajeForm.value = ''
})
mensajeForm.addEventListener('keypress',function(){
    socket.emit('chat:typing', nombreForm);
});

socket.on('chat:typing', function(data){
    actions.innerHTML = `<p><em>${data} esta escribiendo un mensaje</emp></p>`
})


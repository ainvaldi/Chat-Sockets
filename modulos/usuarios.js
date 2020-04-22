const conectados = []; 

// Cuando se une un usuario
function agregarUsuario(username, socket_id) {
  const user = {  username, socket_id};
  conectados.push(user); 
}

// Usuarios conectados (probando)
function traerUsuariosConectados() {
  let usernames = []; 
  conectados.map(function (elem, index) {
    usernames.push(elem.username);
  })
  return usernames;
}

 // Cuando un usuario sale
function sacarUsuario(id) {
  const index = conectados.findIndex(username => username.socket_id === id);

  if (index !== -1) {
    return conectados.splice(index, 1)[0];
  }
}
 
module.exports = {
  agregarUsuario,
  traerUsuariosConectados,
  sacarUsuario 
};

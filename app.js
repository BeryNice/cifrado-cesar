//let string = document.getElementById('stringMessage').value;

/* V.1.0 CODIFICA E IMPRIME EN PARRARO
const encode = () => {
  let string = document.getElementById('stringMessage').value;
  let offset = parseInt (document.getElementById('keychainOffset').value);
  offsetMove = offset;
  let messageEncode = "";

  for (var i = 0; i < string.length; i++) {
    var message = string[i].charCodeAt();
    console.log(string[i].charCodeAt());
    //(x+n)%+26
    messageEncode += String.fromCharCode(message + offset);
  }
  document.getElementById('encryptedMessage').innerHTML = messageEncode;
}
encode()
*/


const encode = () => {
  //declaramos la variable donde se almacena el mensaje de entrada
  let string = document.getElementById('stringMessage').value;
  //declaramos la variable donde se almacena la posición a desplazar
  let offset = parseInt (document.getElementById('keychainOffset').value);
  //offsetMove = offset;

  // declaramos una nueva variable en donde se almacena el mensaje codificado
  let messageEncode = "";
  //codificar mensaje
  for (var i = 0; i < string.length; i++) {
    var message = string[i].charCodeAt();
    console.log(string[i].charCodeAt());
    //(x+n)%+26
    messageEncode += String.fromCharCode(message + offset);
  }
  // Imprimimos mensaje en HTML
  document.getElementById('encryptedMessage').innerHTML = messageEncode;
}
encode()

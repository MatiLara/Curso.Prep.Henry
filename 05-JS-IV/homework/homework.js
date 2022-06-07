// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  //
  //
  //
  var objeto = {
    nombre: nombre,
    edad: edad,
     meow: function() {
       return "Meow!";
      }
  }
  return objeto;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  //var objeto = {
  // x:1,
  // y:1}
  //
  objeto[property] = null; //accedo al objeto - creo la propiedad (property, que es mi var)
  return objeto;           // y por ultimo le asigo el valor que pide, es este caso null.
}
//

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  //tenemos un objeto con una propiedad adentro --->
  //  var objetoMisterioso = {
  //   numeroMisterioso: 999}
  //Creo la var resultado para meterle la operacion que tenemos que hacer dentro
var resultado = objetoMisterioso.numeroMisterioso * 5;//para acceder al numero accedemos al objeto y luego a la propiedad con dot notation.
return resultado;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  // tenemos: var objeto = {
  // una propiedad: "alguna cosa" }
  delete objeto[unaPropiedad];
  // elimino la propiedad con lo de arriba y retornamos el objeto sin la propiedad abajo.
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var newObjeto = {
    nombre: nombre,
    email: email,
    password: password
  }
  return newObjeto;

}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  //
  if (usuario.email != null || usuario.email != undefined) {
    return true;
  }
  return false;
}




function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
 // Una forma sería: var tienePropiedad = objeto.hasOwnProperty(propiedad);
  //return tienePropiedad;

  if(objeto.hasOwnProperty(propiedad)) {
    return true;
  }
  return false;
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if (usuario.password === password) {
    return true;
  }
  return false;
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
}
// Tambien con brackets notation podría poner:
//usuario["password"] = nuevaPassword; y funcionaria, recordad las comillas!!!

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  // tenemos: var usuario = {
  //  amigos: [] }
  // la propiedad amigos es un array.
  usuario.amigos.push(nuevoAmigo);//con usuario.amigos accedo a la propiedad y le pusheo el
  return usuario;                 // valor nuevoAmigo al array. luego retorno el objeto usuario.
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (var i=0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var acumulador = 0;
  for (var i=0; i<usuario.posts.length; i++) {
  var acumulador = acumulador + usuario.posts[i].likes
  console.log(acumulador)  
}
 return acumulador; 
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  console.log("producto",producto)
  producto.calcularPrecioDescuento = function(){
    return producto.precio - (producto.precio*producto.porcentajeDeDescuento)
  }
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};

var container; 

container = document.getElementById("c1"); 
/**Obtiene la etiqueta del id */

container.innerText = "Hola Mundo!";
/**hola mundo es lo que muestra dentro del primer container */

container.style.backgroundColor = "#000000";

container.style.color = "#1cb723";

container.style.width = "200px";

container.style.height = "200px";

container.innerHTML = "<input type=”text” placeholder='escriba su texto'>";
/**primer container negro con un input que pide escribir el texto */
/** inner html agrega un elemento html y el inner text solo modifica texto */
 var containers
 containers = document.querySelectorAll(".c2");

 /**almacena los elementos de c2 */

 containers.forEach(element => {
     element.style.backgroundColor= '#009999';
     element.innerHTML = "<input type=”text” placeholder='escriba su texto'>";
 });

 /**Los otroa containers son de otro color  */

 var boton = document.getElementById("btn-click");

boton.onclick = function(evt) 
{ 
alert("Hola mundo"); 
}

var btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}
/** Se copia lo que esta escrito en la caja de texto */
/** InnerText  */
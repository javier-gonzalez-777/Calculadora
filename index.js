//Elementos del dom
const precioSpan = document.querySelector(".precio-inicial");
const totalSpan = document.querySelector(".valor-total")
const sumar= document.querySelector("#btn-sumar");
const restar= document.querySelector("#btn-restar");
const cantidad= document.querySelector(".cantidad");

//Variables
let precio = 400000;
let total=0;
let cant=0;
precioSpan.innerHTML= precio;
totalSpan.innerHTML=total;
cantidad.innerHTML=cant;

//total.innerHTML=total;


//Funciones
function sumarPrecio() {
    cant=Number(cantidad.innerHTML)+1;
    cantidad.innerHTML=cant;
   // console.log(cant)
    totalSpan.innerHTML=precio * cant;
    //totalSpan.innerHTML=precio;

}

function restarPrecio() {
    cant=Number(cantidad.innerHTML)-1;
    cantidad.innerHTML=cant;
   // console.log(cant)
    totalSpan.innerHTML=precio * cant;
    //totalSpan.innerHTML=precio;

}

// Eventos

sumar.addEventListener("click", sumarPrecio);
restar.addEventListener("click", restarPrecio);

    





precioSpan.innerHTML = precio;
totalSpan.innerHTML=total;

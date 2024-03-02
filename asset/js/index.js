

precioSpan = document.querySelector(".precio-inicial");
totalApagar = document.querySelector(".valor-total")
let precio = 400000
precioSpan.innerHTML = precio

cantidad = document.querySelector(".cantidad");

function incremento (){
var contador = cantidad.innerHTML
contador++
let total = precio * contador;
cantidad.innerHTML = contador;
totalApagar.innerHTML = total
}

function decremento (){
    var contador = cantidad.innerHTML
    var total = totalApagar.innerHTML
    contador--
    if(contador >= 0){
        total = total - precio
        cantidad.innerHTML = contador;
        totalApagar.innerHTML = total
    }
}
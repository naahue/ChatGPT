function validarEnvio(){
    parrafo = document.getElementById("error")
    if(document.carrito.nombre.value.length <= 2){
        document.carrito.nombre.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "NOMBRE INCORRECTO"
        return
    }


let DNIentero= parseInt(document.carrito.dni.value)
if (isNaN(DNIentero)) {
    document.carrito.dni.focus()
    parrafo.style.color = "red"
    parrafo.innerHTML = "DNI INCORRECTO"
    return
}
else{
    if (document.carrito.dni.value.length !=8) {
        document.carrito.dni.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "DNI INCORRECTO"
        return
    }
}

if (isNaN(document.carrito.zapatillas.selectedIndex == 0)) {
    document.carrito.zapatillas.focus()
    parrafo.style.color = "red"
    parrafo.innerHTML = "SELECCION INCORRECTA"
}

if (isNaN(document.carrito.numero.selectedIndex == 0)) {
    document.carrito.numero.focus()
    parrafo.style.color = "red"
    parrafo.innerHTML = "SELECCION INCORRECTA"
}
parrafo.style.color = "green"
parrafo.innerHTML = "GRACIAS POR SU COMPRA"
document.carrito.submit()
}
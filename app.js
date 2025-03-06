// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let ingreso = document.getElementById('amigo').value;
    console.log(ingreso);
    asignarTextoElemento('ul', ingreso)
    amigos.push (ingreso);
    console.log(amigos);
    limpiarCaja();
    return;
}

function crearLista(){
    let ul = document.createElement('ul');
    ul.textContent = agregarAmigo();
    crearLista();

}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
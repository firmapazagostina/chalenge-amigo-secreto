// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
const lista = document.getElementById('listaAmigos')
let nombre = '';

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function agregarAmigo(){
    nombre = document.getElementById('amigo').value;
    console.log(nombre);
    
    
    listaAmigos.push (nombre);
    console.log(listaAmigos);
    
    limpiarCaja();
    return;
}


function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
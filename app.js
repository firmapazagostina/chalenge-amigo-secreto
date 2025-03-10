// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];


function agregarAmigo(){
    const nombre = document.getElementById('amigo').value;
    console.log(nombre);
    if(nombre !== ''){
        listaAmigos.push (nombre);
        console.log(listaAmigos);
    } else{
        alert('Por favor, ingrese un nombre valido')
    }
    
    crearLista();

    limpiarCaja();

    return;
}


function crearLista(){
    
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    listaAmigos.forEach( (nombre) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li)
    });
    
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    if(listaAmigos.length < 2){
        alert('se necesitan al menos 2 amigos para hacer el sorteo')
    }
    const sorteo = Math.floor(Math.random()*listaAmigos.length)
    const amigoSorteado = listaAmigos[sorteo]
    console.log(sorteo)
    console.log(amigoSorteado)
    const listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.style.display = 'none'

    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    
    return;
}


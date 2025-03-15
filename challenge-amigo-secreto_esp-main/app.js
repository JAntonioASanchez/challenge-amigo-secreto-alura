// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo').value.trim();
    if (inputAmigo === "") {
        alert('Por favor inserte un nombre')
        return;
    }
    amigos.push(inputAmigo);
    //console.log(amigos);
    limpiarCaja();
    actualizarLista()
}

function limpiarCaja() {
    document.querySelector('#amigo').value = "";
}

function actualizarLista() {
    let inputLista = document.getElementById("listaAmigos");
    inputLista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        inputLista.appendChild(item);
    }
}

function sortearAmigo() {
    if(amigos.length === 0){
        alert("No hay amigos disponibles para sortear");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = "";
}



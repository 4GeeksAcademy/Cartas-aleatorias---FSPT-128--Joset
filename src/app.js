function generarCarta() {
    const numerosCarta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const palos = ["♦", "♠", "♥", "♣"];

    const numeroAleatorio = Math.floor(Math.random() * numerosCarta.length);
    const paloAleatorio = Math.floor(Math.random() * palos.length);
    const paloElegido = palos[paloAleatorio];

    document.getElementById('cardContent').innerHTML = numerosCarta[numeroAleatorio];
    const theCard = document.getElementById('theCard');
    theCard.className = "";
    theCard.classList.add("card");
    theCard.classList.add(obtenerClasePalo(paloElegido));
    document.querySelector('#theCard .top-izq').textContent = paloElegido;
    document.querySelector('#theCard .bottom-der').textContent = paloElegido;

}


window.onload = function () {
    generarCarta();
    intervalo = setInterval(generarCarta, 10000);


    document.getElementById('botonGenerar').addEventListener('click', function () {
        generarCarta();
        clearInterval(intervalo);
        intervalo = setInterval(generarCarta, 10000);
    });
}

function obtenerClasePalo(palo) {
            if (palo === "♦") return "palo-diamantes";
            if (palo === "♠") return "palo-picas";
            if (palo === "♥") return "palo-corazones";
            if (palo === "♣") return "palo-treboles";
        }

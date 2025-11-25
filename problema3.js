function imprimirMensaje(mensaje) {
    const salida = document.getElementById("resultado");
    salida.textContent = mensaje;
}

function invertirNum() {
    const input = document.querySelector("input");
    let num = parseInt(input.value);

    if (isNaN(num)) {
        imprimirMensaje("Ingrese un número válido.");
        return;
    }

    let invertido = num.toString().split("").reverse().join("");

    imprimirMensaje(`Número invertido: ${invertido}`);
}

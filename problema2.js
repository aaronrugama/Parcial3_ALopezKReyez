function imprimirMensaje(mensaje) {
    const salida = document.getElementById("resultado");
    salida.textContent = mensaje;
}

function convertirDia() {
    const input = document.querySelector("input");
    let numero = parseInt(input.value);

    if (isNaN(numero) || numero < 1 || numero > 365) {
        imprimirMensaje("Ingrese un número válido entre 1 y 365.");
        return;
    }

    const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const nombresMeses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    let mes = 0;

    while (numero > meses[mes]) {
        numero -= meses[mes];
        mes++;
    }

    const mensaje = `La fecha es ${numero} de ${nombresMeses[mes]}`;
    imprimirMensaje(mensaje);
}

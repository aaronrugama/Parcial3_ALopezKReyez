function calcularCalificacion() {
    const p1 = parseFloat(document.getElementById('nota1').value);
    const p2 = parseFloat(document.getElementById('nota2').value);
    const p3 = parseFloat(document.getElementById('nota3').value);
    
    const notaParciales60 = (p1 + p2 + p3) * 0.2;
    

    const notaA = (91 - notaParciales60) / 0.4;
    const notaB = (81 - notaParciales60) / 0.4;
    const notaC = (71 - notaParciales60) / 0.4;
    const notaD = (61 - notaParciales60) / 0.4;

    let resultado = "";
    resultado += `Para la A: ${notaA > 100 ? 'No es posible' : notaA.toFixed(2)}\n`;
    resultado += `Para la B: ${notaB > 100 ? 'No es posible' : notaB.toFixed(2)}\n`;
    resultado += `Para la C: ${notaC > 100 ? 'No es posible' : notaC.toFixed(2)}\n`;
    resultado += `Para la D: ${notaD > 100 ? 'No es posible' : notaD.toFixed(2)}\n`;
    document.getElementById("resultado").innerText = resultado;
}
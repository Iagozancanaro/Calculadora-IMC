function calcularIMC() {

    //Entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //Processamento
    let iMC = peso / (altura * altura);   
    
    let resultado;

    if (iMC < 18.5) {
        resultado = "Abaixo do peso";
    } else if (iMC < 24.9) {
        resultado = "Peso normal";
    } else if (iMC < 29.9) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obesidade";
    }
    
    //Saida
    document.getElementById("seuIMC").textContent = "Seu iMC é: " + iMC;
    document.getElementById("classificacao").textContent = "Classificação: " + resultado;
}
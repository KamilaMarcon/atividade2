var peso
var altura;
var imc;
var resultado;

//recebendo o event
function calcular(event) {
    //refresh dos inpputs

    event.preventDefault();
    //alert('teste');

    //recebendo os dados digitados pelo usuario
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //calculo do imc 
    imc = peso / (altura * altura);

    //testado a recepão dos valores de peso e atura
    //e testado o calculo do imc 

    console.log(peso);
    console.log(altura);
    console.log(imc);

    resultado = document.getElementById('resultado');
    if (imc < 17) {
        resultado.innerHTML = '</br> seu resultado foi:'
            + imc.toFixed(2) + '</br>cuidado voce esta muito abaixo do peso';
    }
    else if(imc<=17&&imc<18.5){
        resultado.innerHTML = '</br> seu resultado foi:'
        + imc.toFixed(2) + '</br>cuidado voce esta abaixo do peso';
    }
    
}
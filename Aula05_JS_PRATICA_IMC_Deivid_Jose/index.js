var peso;
var altura;
var imc;
var resultado;

//l recebendo o evento
function calcular(event) {
    //refresh do input

    event.preventDefault();
    //alert('Teste');

    //recebendo os dados digitados pelo úsuario
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //calcular imc
    imc = peso / (altura * altura)

    //testando a recepção dos valores de peso e altura
    //e testando o calculo do imc
    console.log(peso);
    console.log(altura);
    console.log(imc);

    resultado = document.getElementById('resultado');
    if (imc < 17) {
        resultado.innerHTML = '</br> Seu resultado foi:' + imc.toFixed(2) + '</br>Cuidado você está muito abaixo do peso'
    } else if (imc >= 17 && imc < 18.5) {
        resultado.innerHTML = '</br> Seu resultado foi:' + imc.toFixed(2) + '</br>Você está muito abaixo do peso'
    
    } 

}

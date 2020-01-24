let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Todas as linhas da tabela usando a classe paciente
let pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {
    //Adiciona a variavel o paciente correto em ordem do for
    let paciente = pacientes[i];

    //Dados do peso
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    //Dados da altura
    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    //Dados do imc
    let tdImc = paciente.querySelector(".info-imc");

    let pesoEValido = validaPeso(peso);
    let alturaEValida = validaAltura(altura);

    if (!pesoEValido) {
        console.log("peso inválido");
        pesoEValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido"); //O metodo classList retona uma lista das classes de um objeto
    }

    if (!alturaEValida) {
        console.log("altura inválida");
        alturaEValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEValido && alturaEValida) {
        let imc = calculaImc(peso, altura); //Calculo IMC
        tdImc.textContent = imc
    }

}

//Função para calcular imc
function calculaImc(peso, altura){
    let imc = peso / (altura * altura);
    return imc.toFixed(2); //Limita em duas casas decimais;
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    } else {
        return false;
    }
}
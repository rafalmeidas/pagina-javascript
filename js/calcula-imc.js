var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Todas as linhas da tabela usando a classe paciente
var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
    //Adiciona a variavel o paciente correto em ordem do for
    var paciente = pacientes[i];

    //Dados do peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //Dados da altura
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //Dados do imc
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEValido = validaPeso(peso);
    var alturaEValida = validaAltura(altura);

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
        var imc = calculaImc(peso, altura); //Calculo IMC
        tdImc.textContent = imc
    }

}

//Função para calcular imc
function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
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
function seletor(nome){
    let seletor = document.querySelector(nome);

    return seletor;
}

let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    //Retira o padrão do formulario que seria recarregar a página, dessa forma não ocorre essa atualização da pág
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPacienteDoFormulario(form);

    let pacienteTr = montaTr(paciente);

    let erros = validaPaciente(paciente);
    console.log(erros);
    
    if(erros.length > 0){
        exibiMensagensDeErro(erros);
        return;
    }

    //Adiconando paciente a tabela
    tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(pacienteTr)
    
    form.reset();
    let ul = seletor("#mensagens-erro");
    ul.innerHTML = "";
});

function exibiMensagensDeErro(erros){
    let ul = seletor("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    //Extraindo informações do paciente do form e criando objeto paciente
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    //Criando <tr> com javascript
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Função appendChild adiciona um filho a uma tr por exemplo
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//Função que cria uma td
function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome deve ser preenchido!");
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura deve ser preenchida!");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso deve ser preenchido!");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura deve ser preenchida!");
    }

    return erros;
}
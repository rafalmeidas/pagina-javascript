let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    //Retira o padrão do formulario que seria recarregar a página, dessa forma não ocorre essa atualização da pág
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPacienteDoFormulario(form);

    let pacienteTr = montaTr(paciente);

    //Adiconando paciente a tabela
    tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(pacienteTr)

    form.reset();
});

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
function montaTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}
var campoFiltro = document.querySelector("#filtrar-tabela");


//Evento de perceber o que se escreve
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        pacientes.forEach(function(paciente) {
            var tdNome = paciente.querySelector(".info-nome");
            var nomePaciente = tdNome.textContent;
    
            var expressao = new RegExp(campoFiltro.value,"i");
            if( !expressao.test(nomePaciente)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else{
        pacientes.forEach(function(paciente) {
            paciente.classList.remove("invisivel");
        });
    }
});
var tabela = seletor("table");

tabela.addEventListener("dblclick", function(event){
    //var alvoEvento = event.target; //td clicada
    //var paiDoAlvo = alvoEvento.parentNode; //tr da td clicada
    //paiDoAlvo.remove();
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    
});


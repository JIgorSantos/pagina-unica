// Inicializa a biblioteca de animação AOS
AOS.init();

//FUNÇÃO ENCAPSULADA: PREENCHE O SELECT COM OS DADOS DA API DO IBGE
(function(){
    var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    var select = document.getElementById('estado');
    

    /* Consulta a API com o método fetch e
    com um laço de repetição incrementa as tags option */
    //1o then() captura os dados, 2o then() trata os dados, catch() tratamento do erro
    fetch(url).then(Response => Response.json()).then(json => {
        var options = '<option>Selecione</option>';
        //laço de repetição
        for (let index = 0; index < json.length; index++) {
            options += '<option>'+json[index].nome+'</option>';
        }
        select.innerHTML = options;
    }).catch(erro => console.log(erro));    
})();
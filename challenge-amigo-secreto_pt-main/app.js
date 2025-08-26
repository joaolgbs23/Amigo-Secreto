let pessoasAdicionadas = [];
function adicionarAmigo(){
    let NomeAdicionado = document.getElementById("amigo").value;// seleciona o valor que for digitado
    if(NomeAdicionado !== "" ){
        pessoasAdicionadas.push(NomeAdicionado);
        console.log(pessoasAdicionadas);//mostra se foi adicionado corretamente
        let nomeNaLista = document.getElementById("listaAmigos");
        nomeNaLista.innerHTML = pessoasAdicionadas; // adiciona as pessoas visualmente a lista
    } else{
        alert("nome invalido");//caso invalido avisa o sistema
    }
}
function atualizarlista(){}
function sortearAmigos(){}
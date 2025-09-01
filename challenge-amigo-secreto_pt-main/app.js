let pessoasAdicionadas = [];
let pessoaSorteada;
function adicionarAmigo(){
    let nomeAdicionado = document.getElementById("amigo").value;// seleciona o valor que for digitado
    if(nomeAdicionado.length > 0){
        pessoasAdicionadas.push(nomeAdicionado);
        console.log(pessoasAdicionadas);//mostra se foi adicionado corretamente
        let nomeNaLista = document.getElementById("listaAmigos");
        nomeNaLista.innerHTML = pessoasAdicionadas; // adiciona as pessoas visualmente a lista
    } else{
        alert("nome invalido");//caso invalido avisa o sistema
    }
    limparCampo();
    sortearAmigo();
    
}
function atualizarLista(){

    
}





function sortearAmigo(){
    if (pessoasAdicionadas.length > 0){
            let sorteio = Math.floor(Math.random()* pessoasAdicionadas.length);
            let pessoaSorteada = pessoasAdicionadas[sorteio];
            console.log(sorteio);
            pessoaSorteada = document.getElementById("resultado");
            pessoaSorteada.innerHTML = pessoaSorteada;
            console.log(pessoaSorteada);
       


    }

}
    
    
    /* Ninguém pode tirar a si mesmo.Ninguém pode ser sorteado por mais de uma pessoa (ou seja, o sorteio precisa ser justo e único).Todos terminam com um único "amigo secreto" designado.
*/


function limparCampo(){
    nomeAdicionado = document.getElementById("amigo");
    nomeAdicionado.value = ""

}
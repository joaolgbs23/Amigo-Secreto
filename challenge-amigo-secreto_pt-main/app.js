let pessoasAdicionadas = [];

function adicionarAmigo(){
    let nomeAdicionado = document.getElementById("amigo").value.trim(); // remove espaços extras
    if(nomeAdicionado.length > 0){
        pessoasAdicionadas.push(nomeAdicionado);
        console.log(pessoasAdicionadas); // verificação
        atualizarLista(); // atualiza a lista no HTML
    } else{
        alert("Nome inválido"); // caso vazio
    }
    limparCampo();
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa antes para não duplicar

    for (let i = 0; i < pessoasAdicionadas.length; i++){
        lista.innerHTML += `<li>${pessoasAdicionadas[i]}</li>`; 
    }
}

function sortearAmigo(){
    if (pessoasAdicionadas.length > 0){
        let sorteio = Math.floor(Math.random() * pessoasAdicionadas.length);
        let pessoa = pessoasAdicionadas[sorteio];
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Amigo sorteado: <strong>${pessoa}</strong>`;
        console.log("Sorteado:", pessoa);
    } else {
        alert("Adicione pelo menos um nome antes de sortear!");
    }
}

function limparCampo(){
    document.getElementById("amigo").value = "";
}
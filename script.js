let nomesConvidados = []

function adicionar() {
    let nome = document.getElementById("nomeConvidado").value
    let idade = document.getElementById("idadeConvidado").value
    let email = document.getElementById("emailConvidado").value

    if (nome == "") {
        alert("Preencha o nome do Convidado")
    } else
    if (idade == "") {
        alert("Preencha a idade do Convidado")
    } else
    if (email == "") {
        alert("Preencha o email do Convidado")
    } else {
        nomesConvidados.push({ nome, idade, email })
        atualizarLista()
    }
}

function atualizarLista() {
    let lista = document.getElementById("divLista")
    lista.innerHTML = ""

    for (let i = 0; i < nomesConvidados.length; i++) {

        lista.innerHTML = lista.innerHTML + `<div class="divRemover">
                           <span> Nome: ${nomesConvidados[i].nome}<br>  
                           Idade: ${nomesConvidados[i].idade} anos <br>
                           Email: ${nomesConvidados[i].email}</span>    
                           <button class="btnRemover" onclick="removeLista(${i})"> 
                             <img  src="img/buttonRemover.svg">
                           </button> 
                           </div>`
    }

    lista.scrollTop = lista.scrollHeight - lista.clientHeight;


}

function removeLista(intPos) {
    nomesConvidados.splice(intPos, 1);
    atualizarLista();
}
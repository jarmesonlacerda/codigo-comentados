var list = new LinkedList(); //variavel lista recebe nova lista

$().ready(function(){
    //função de clique de iserir e remover os elementos 
    $('#insert').click(insertElement)
    $('#insert_at').click(insertElementAt)
    $('#remove').click(removeElement)
    $('#remove_at').click(removeElementAt)
})

function showData(){
    let text = `<div class="ui label">
                    ${list.show('</div><div class="ui label">')}
                </div>`
    let out = $('#output');
    out.empty() // saida de uma declaração vazia
    out.append(text); // saida do elemneto especificado
}
function insertElement(){ //inserir elemento
    let val = prompt('digite um valor a ser inserido:') // mensagem na tela
    list.append(val)
    showData();
}
function insertElementAt(){//Retorna o elemento em um índice especificado em uma coleção
    let val = prompt('digite um valor a ser inserido:') // mensagem do valor a ser inserido
    let pos = prompt('digite uma posição a inserir:') // mensagem da posição a ser inserida
    list.insert(pos, val) // inserir na lista a posição e o valor
    showData();
}
function removeElement(){ // remover elemento
    let val = prompt('digite um valor a ser removido:') //remover o valor escolhido pelo usuario
    list.remove(val) // remover da lista o valor
    showData();
}
function removeElementAt(){ // remover um elemento especificado pelo usuario
    let pos = prompt('digite uma posição a remover:') // mensagem pra digitar uma posição a ser removida
    list.removeAt(pos)
    showData();
}
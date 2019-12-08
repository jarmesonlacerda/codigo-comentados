var queue = new StaticQueue();
//StaticQueue() é uma lista ordenada de elementos (fila estatica)
$().ready(function() {
    //ready () para disponibilizar uma função após o carregamento do documento
    ///As funções dos cliques para colocar item nesta fila, remover o item mais antigo desta fila, limpar e adicionar item
    $('#enqueue').on('click', enqueueElement);
    $('#item').keydown(function(e) {
        //verify if enter was pressed
        if (e.which == 13) enqueueElement();
    });
    $('#dequeue').on('click', dequeueElement);
    $('#clear').on('click', clearQueue);
});

function enqueueElement() {
    //inserindo item e mostrando
    var item = $('#item').val();
    if (item) {
        queue.enqueue(item);
        $('#item').val('');
        showQueue();
    }
}

function dequeueElement() {
    //removendo elemento, jogando um alerta na tela e mostrando o resultado
    if (queue.isEmpty()) {
        alert('Fila Vazia');
    } else {
        alert('Foi removido o elemento ' + queue.dequeue());
        showQueue();
    }
}

function clearQueue() {
    //Limpando a fila
    queue.clear();
    showQueue();
}

function showQueue() {
    ///Declarando a função de mostrar Fila
    $('#output').empty();
    $('#output').append('<div class="ui label">' +
        queue.print('</div><div class="ui label">') + '</div></div>');
}
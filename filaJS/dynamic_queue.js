
class DynamicQueue{
    //não impedirá nenhuma execução. Em vez disso, toda execução é colocada em uma fila, que será drenada no limite de taxa desejado
    constructor(){
        //é um método especial para criar e inicializar um objeto criado a partir de uma classe
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    enqueue(element){
        //insere uma coisa na coleção
        let newNode = new Node(element);
        if(this.head==null){
            this.head=newNode;
        }else {
            this.tail.next=newNode;
        }
        this.tail=newNode;
        this.count++;
    }

    dequeue(){
        //que remove a coisa mais antiga da coleção
    }

    front(){
        //retorna o elemento frontal da fila
        if(this.isEmpty()) return null; 
        return this.head.content;
    }

    back(){
        //carrega o URL anterior na lista de histórico
        if(this.isEmpty()) return null;
        return this.tail.content;
    }

    isEmpty(){
        //verifica se esta string está vazia ou não. Retorna true , se o comprimento da string for 0, caso contrário, false
        //esta fila está vazia?
        return this.head==null;
    }

    size(){
        //número de Items nesta fila
        return this.count;
    }

    clear(){
        //remove todos os elementos de um objeto
        this.head=this.tail=null;
        this.count=0;
    }

    print(separator=''){
        //função imprime a mensagem especificada na tela ou em outro dispositivo de saída padrão
    }
}


class Node{
    //Declarando a classe Node
    constructor(element){
        this.content = element;
        this.next = null;
    }
}
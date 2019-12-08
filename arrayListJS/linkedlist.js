class LinkedList {
//A classe Java LinkedList pode conter elementos duplicados
//A classe Java LinkedList mantém a ordem de inserção.
//A classe Java LinkedList não está sincronizada.
//Na classe Java LinkedList, a manipulação é rápida porque nenhuma mudança precisa ocorrer.
    constructor() {
        //construindo inicialmente com valores zero e nulos
        this.head = null;  
        this.length = 0;     
    }

    append(element) {
        let newNode = new Node(element); ////Declarando o novo Nó
        if(!this.head){ //um loop
            this.head = newNode; // cabeca do nó
        }else{
            let current = this.head;
            while(current.next){ //estrutura de repetição
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++; //incrementando
    }

    insert(position, element) { //inserir elemento na posição
        if(position>0 && position<=this.length){ // se posição maior que zero e diferente de posição menor igual a isto do array
            let index = -1,
                current = this.head,
                node = new Node(element); // nó recebe novo nó(elemento)
            while(current){ // loop 
                index++; //incremento
                if(index==(position-1)){
                    node.next=current.next;
                    current.next = node;
                }
                current=current.next;
            }
            this.length++;
        }else if(position==0){
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    remove(element) { //remover elemento
        if(this.isEmpty()) 
            return null; //retornando valor nulo
        let current = this.head,
            previous = null; //retorna o elemento anterior do elemento especificado
        while(current){
            if(current.content==element){
                if(!previous){ //remover o primeiro
                    this.head=current.next;
                }else{
                    previous.next = current.next;
                }
                this.length--;
                current.next=null;
                return current.content;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }

    removeAt(position) {
        //Remove o elemento no índice especificado do ArrayList
        let element = this.getElement(position);
        this.remove(element);
    }

    size() {
         //retornando numero de item de uma array
        return this.length;
    }

    show(separator = '-') {
        //show () mostra os elementos ocultos selecionados
        let text = '';
        for(let current = this.head; current!=null ; current = current.next){
            	text += current.content + separator;
        }
        let newSize = text.length-separator.length
        return text.substring(0,newSize); //retornando a subString do novo array
    }

    isEmpty() {
        //isEmpty()	esta lista está vazia?
        //retornando uma array nulo
        return this.head==null;
    }

    getElement(position) {
        //Retorna a referência do elemento através do seu ID
        let index = -1;
        for(let current = this.head; current != null; current=current.next){
            index ++;
            if(index==position) return current.content;
        }
        return null;
    }

    search(element) {
         //search() executa uma busca de uma expressão regular neste objeto
        //search () procura em uma string um valor especificado e retorna a posição da correspondência
        let position = -1.
            current = this.head,
            notFound = true;
        if(!current) return position;
        while(notFound && current){
            if(current.content==element) notFound=false;
            position++;
            current=current.next;
        }
        if(notFound) return -1;
        return position;
    }
}
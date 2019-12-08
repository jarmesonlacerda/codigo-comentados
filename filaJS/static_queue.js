class StaticQueue{
    // uma fila é uma lista ordenada de elementos

    constructor(){
        //é um método especial para criar e inicializar um objeto criado a partir de uma classe
        this.data = new Array(20);  //construindo array
        this.count = 0 // contador
    }

    enqueue(element){
        //inserindo elemneto
        this.data[this.count]=element;
        this.count++;
    }

    dequeue(){
        //removendo elemento
        if(this.count>0){
            this.count--;
            return this.data.shift();
        }
        //retornando valor zero
        return null;
    }

    front(){
        //retornando elemento frontal da fila
        return this.data[0];
    }

    back(){
        //retornando o carregamento da URL anterior na lista de histórico e contando -1
        return this.data[this.count-1]
    }

    isEmpty(){
        //retornando valor igual a zero
        return this.count==0
    }

    size(){
        //retornando o contador
        return this.count;
    }

    clear(){
        // limpando o contador
        this.count=0
    }

    print(separator=''){
        //imprimindo
        let output = '';
        for(let i = 0; i<this.count; i++)
            output+=this.data[i]+separator;
        return output.substr(0, output.length-separator.length);
    }

}











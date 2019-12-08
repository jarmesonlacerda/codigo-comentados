
class ArrayList{
//uma coleção é uma estrutura de dados, na realidade um objeto, que pode armazenar ou agrupar referências a outros objetos (um contêiner).
    constructor(){
        //Construindo o array
        this.data = [];
    }

    append(element) {
        //append () insere o conteúdo especificado no final dos elementos selecionados
        this.data.push(element); //inserindo elemento nesta lista
    }

    insert(position, element) { //inserindo elemento na posição
        if(this.positionIsValid(position) || position==this.size()){ // se a posição for invalida , (verdadeiro ou falso) , posição de numeros de item
            this.data.splice(position, 0, element);// splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
        }
    }
    positionIsValid(position){
        //retornando posição
        return (position >= 0 && position < this.size());
    }

    remove(element) {
        //removendo elemento e retornando elemento enquanto remove elemento antigos
        let index = this.search(element);
        if(index!=-1) return this.data.splice(index, 1);
    }

    removeAt(position){
        //removendo posição
        if(this.positionIsValid(position)){
            this.data.splice(position, 1);
        }
    }

    size(){
        //retornando numero de item de uma string ou array
        return this.data.length;
    }

    show(separator='-'){
        //show () mostra os elementos ocultos selecionados
        return this.data.join(separator);
    }

    isEmpty(){
        //isEmpty()	esta lista está vazia?
        //retornando uma array igual a zero
        return this.data.length===0;
    }

    getElement(position){
        //Retorna a referência do elemento através do seu ID
        if(this.positionIsValid(position))
            return this.data[position];
        return null;
    }

    search(element){
        //search() executa uma busca de uma expressão regular neste objeto
        //search () procura em uma string um valor especificado e retorna a posição da correspondência.
        for(let i =0 ; i<this.data.length; i++)
            if(this.data[i]==element) return i;
        return -1;
    }


}
/*
Feito por: Felipe Francisco
Iniciado em: 16/02/2025
Terminado em: 18/02/2025 21:40
Empreendimento mental tentando entender javascript: colossal. 
Referência: https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
Saldo final: Algumas coisas melhorei, outras fiz igual, outras piorei. De qualquer jeito, foi um exercício
                                                                            bom de ter praticado.
*/


//especificação através da classe nó de todos os objetos nós que a lista encadeada vai criar.
class No {
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}

//Classe em si da lista encadeada.
class ListaEncadeada {
    //construtor básico, toda ListaEncadeada vai começar zerada
    constructor(){
        this.cabeca = null;
        this.tamanho = 0;
    }

    //adicionar valores somente ao final da lista
    add(valor){
        const novoNo = new No(valor);
        if(this.cabeca === null){
            this.cabeca = novoNo;
        }
        else {
            //uma variavel para guardar as referencias dos nós e percorrer todos
            let iteradorNo = this.cabeca;
            while(iteradorNo.proximo !== null){
                iteradorNo = iteradorNo.proximo;
            }

            //aqui o iterador já está no ultimo nó
            iteradorNo.proximo = novoNo;
        }
        this.tamanho += 1;
        
    }

    /*funcionando
    não adiciona no final+1 da lista por motivos de concepção desta exata lista.  (falso)
    Mentira, acabei de confirmar que do jeito que implementei (não do site) da sim.
    
    */
    adicionarEm(valor, posicao){
        if(posicao < 1 || posicao > this.tamanho + 1){
            console.log("Posição não corresponde ao alcance da estrutura.");
        }
        else {
            let novoNo = new No(valor);
            let iteradorNo = this.cabeca;
            if (posicao === 1) {
                novoNo.proximo = this.cabeca;
                this.cabeca = novoNo;
            } else {
                /*acabei de confirmar esse loop pq funcionava mas ainda assim me encafifou. Conceito interessante.
                código interno é executado (posição - 2) vezes. Se posição = 3, só há uma troca de nó
                porém como começa no head (ou seja, começa no 1) então o cálculo da posição do nó final é 
                (posição - 2) + 1 que é justamente o nó anterior do que eu quero trocar.
                Acertei na cagada instintiva kkkk
                */
                for(let j = 1; j < posicao - 1; j++){
                    iteradorNo = iteradorNo.proximo;
                }
                novoNo.proximo = iteradorNo.proximo;
                iteradorNo.proximo = novoNo;
            }
            this.tamanho += 1;
        }
    }

    //funcionando
    removerEm(posicao){
        if(posicao < 1 || posicao > this.tamanho){
            console.log("Posição não corresponde ao alcance da estrutura.");
        }
        else {
            let noADeletar = null;
            let iteradorNo = this.cabeca;
            if (posicao === 1) {
                noADeletar = this.cabeca;
                this.cabeca = this.cabeca.proximo;
            } else {
                for(let j = 1; j < posicao - 1; j++){
                    iteradorNo = iteradorNo.proximo;
                }
                noADeletar = iteradorNo.proximo;
                let noSeguinte = noADeletar.proximo;
                iteradorNo.proximo = noSeguinte;
                noADeletar.proximo = null;
            }
            this.tamanho--;
            return noADeletar.valor;
        }
    }

    //remover todas as instâncias desse valor
    //funcionando
    removerValores(valor){
        const valores = [];
        let anterior = null;
        let iteradorNo = this.cabeca;
        while(iteradorNo !== null){
            //so tem if, não tem else
            if(iteradorNo.dado === valor){
                if(anterior === null){
                    valores.push(iteradorNo.dado);
                    this.cabeca = this.cabeca.proximo;
                    this.tamanho--;
                } else {
                    valores.push(iteradorNo.dado);
                    anterior.proximo = iteradorNo.proximo;
                    this.tamanho--;
                }
            } //fim primeiro if
            anterior = iteradorNo;
            iteradorNo = iteradorNo.proximo;
        }
        if(valores.length > 0){
            return valores;
        } else {
            return "Não havia nos com esse valor na estrutura";
        }
    }

    //funcionando
    acessarEm(posicao){
        if(posicao < 1 || posicao > this.tamanho){
            console.log("Posição não corresponde ao alcance da estrutura.");
        }
        else {
            let iteradorNo = this.cabeca;
            for(let j = 1; j < posicao; j++){
                iteradorNo = iteradorNo.proximo;
            }
            return iteradorNo.dado;
        }
    }
    //o do site geeksforgeeks era mais simples, mas vou fazer um que leva em consideração multiplos valores iguais
    //funcionando
    indiceDe(valor){
        let contador = 1;
        const casos = [];
        let texto = "O valor requisitado encontra-se nos NÓS de indíces: "
        let iteradorNo = this.cabeca;
        while(iteradorNo){
            if(iteradorNo.dado === valor){
                casos.push(contador);
            }
            contador++;
            iteradorNo = iteradorNo.proximo;
        }
        for(let i = 0; i < casos.length; i++){
            texto += casos[i] + " ";
        }
        return texto;
    }

    //funcionando
    imprimirLista(){
        let iteradorNo = this.cabeca;
        let stringLista = ""
            while(iteradorNo !== null){
                stringLista += iteradorNo.dado + " ";
                iteradorNo = iteradorNo.proximo;
            }
        console.log(stringLista);
    }

    //funcionando
    vazio(){
        return this.tamanho == 0;
    }

    //funcionando (rever com remoção)
    tamanhoLista(){
        return this.tamanho;
    }

}


const listaUm = new ListaEncadeada();
listaUm.imprimirLista();
listaUm.add(1);
listaUm.add(2);
listaUm.add(3);
listaUm.add(4);
listaUm.add(5);
listaUm.add(2);
listaUm.add(7);
listaUm.imprimirLista();
console.log(listaUm.tamanho);
console.log(listaUm.removerValores(12));
listaUm.imprimirLista();
console.log(listaUm.tamanho);
/*  
listaUm.imprimirLista();
console.log(listaUm.acessarEm(1));
console.log(listaUm.indiceDe(1));
console.log(listaUm.tamanho);
console.log(listaUm.vazio());
console.log(listaUm.tamanhoLista());
*/
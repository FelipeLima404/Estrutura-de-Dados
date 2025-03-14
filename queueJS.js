/*
Feito por: Felipe Francisco
Iniciado em: 19/02/2025 21:00
Terminado em: 19/02/2025 21:35
Referência: vozes da minha cabeça parte 2
Considerações finais: ta engraçado só mexer com EstruturaDeDados e praticamente nada de 
                                algoritmos por conta dos vários métodos que array ja tem.
*/

class Fila {
    constructor(){
        this.lista = [];
        //de novo, não vou usar propriedades "ultimo" e "primeiro" pq lista tem acesso O(1)
    }

    enfileirar(valor){
        this.lista.push(valor);
    }

    desenfileirar(){
        //em outra linguagem teria ficado maior o código, mas array/lista em JS é dinamica, então remover 1° é ok
        //claro, usando o método já incluso na array
        if(this.vazio()){
            return "Lista vazia, não há elemento para desenfileirar";
        } else {
            return this.lista.shift();
        }
    }

    inicio(){
        if(this.vazio()){
            return "Lista vazia";
        } else {
            return this.lista[0];
        }
    }

    final(){
        return this.lista[this.lista.length - 1];
    }

    vazio(){
        return this.lista.length === 0;
    }

    esvaziar(){
        this.lista = [];
    }

    procurarValor(valor){
        let i = 0;
        while(i < this.lista.length){
            if(this.lista[i] === valor){
                return "Valor procurado: " + valor + " Posicao: " + i + " Distância do inicio: " + (i);
            }
            i++;
        }
    }

    tamanho(){
        return this.lista.length;
    }

    printFila(){
        console.log(this.lista);
    }

}

const filaUm = new Fila();
console.log(filaUm.vazio());
filaUm.enfileirar(1);
filaUm.enfileirar(2);
filaUm.enfileirar(3);
filaUm.enfileirar(4);
filaUm.enfileirar(5);
filaUm.enfileirar(12);
filaUm.printFila();
console.log(filaUm.tamanho());
console.log(filaUm.inicio());
console.log(filaUm.final());
filaUm.desenfileirar();
filaUm.printFila();
console.log(filaUm.procurarValor(4));
filaUm.esvaziar();
filaUm.printFila();
console.log(filaUm.tamanho());
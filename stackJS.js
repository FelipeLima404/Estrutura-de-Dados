/*
Feito por: Felipe Francisco
Iniciado em: 19/02/2025 19:30
Terminado em: 19/02/2025 20:10
Referência: vozes da minha cabeça
Considerações finais: 
1 - por array em JS ser um objeto, foi mt tranquilo montar isso aqui. Em c/c++ tive de implementar tudo na mão msm.
2 - pra qualquer pessoa com o mínimo de programês, essa Pilha não tem segurança nenhuma. A array usada é pública.
*/

class Pilha {
    //construtor vazio só pra inicializar mesmo (não otimiza, mas também não da trabalho)
    constructor(){
        //this.indiceTopo = 0;
        /*na real acho que como to usando lista, sinceramente nem deve precisar de topo
        porque arrays ja vem com a propriedade lenght inclusa.
        Se bem que há resizing em arrays em js... Bom, é só um protótipo. Se der pau, deu pau, ok.
        */
        this.lista = [];
    }

    add(valor){
        //array dinamica praticamente não tem fim, então não precisa pensar em multiplos casos
        this.lista.push(valor);
    }

    printPilha(){
        console.log(this.lista);
    }

    retirarTopo(){
        if(this.lista.length === 0){
            return "Valor não existente: pilha vazia"
        } else {
            return this.lista.pop();
        }
        
    }

    valorTopo(){
        return this.lista[this.lista.length - 1];
    }

    procurarValor(valor){
        let i = 0;
        while(i < this.lista.length){
            if(this.lista[i] === valor){
                return "Valor procurado: " + valor + " Posicao: " + i + " Distância do topo: " + (this.lista.length - i - 1);
            }
            i++;
        }
    }

    esvaziar(){
        if(this.lista.length !== 0){
            this.lista = [];
        }
    }

    tamanho(){
        return this.lista.length;
    }

    vazio(){
        if(this.lista.length === 0){
            return "Pilha vazia"
        } else {
            return "Pilha não vazia"
        }

    }
}


const pilhaUm = new Pilha();
console.log(pilhaUm.vazio());
console.log(pilhaUm.retirarTopo());
pilhaUm.add(1);
pilhaUm.add(2);
pilhaUm.add(3);
pilhaUm.add(4);
pilhaUm.add(5);
pilhaUm.add(12);
pilhaUm.printPilha();
console.log(pilhaUm.valorTopo());
console.log(pilhaUm.procurarValor(4));
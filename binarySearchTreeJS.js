/* Vamo lá então, chegou a hora de implementar árvores em JS
Feito por: Felipe Francisco
Iniciado em: 19/02/2025 21:37
Terminado em: 24/02/2025 1:00
Referência: 
Considerações finais: 
*/
//queria fazer uma Binary Tree sem ser de Search, mas tava mais difícil que fazer a de Search
//Então dale BST né

class Node {
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }

}

//me rendi ao geeks for geeks, fiz cara crachá com o site deles
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        // criando novo objeto, bem basiquinho
        let newNode = new Node(data);

        if(this.root === null){
            this.root = newNode;
        } 
        else {
            /* Se a árvore tiver vazia, coloca na raiz
            Se não ta vazia, vai procurar -> e em vez de escrever tudo nesse else, o site preferiu colocar dentro dessa func
             */
            this.insertNode(this.root, newNode);
        }
    }
    //recursaozinha básica pra achar a folha certa
    insertNode(node, newNode){
        //adaptei pq quis (achei que ficou mais claro e organizado)
        if(newNode.data < node.data && node.left === null){
            node.left = newNode;
        } else if(newNode.data < node.data && node.left !== null){
            this.insertNode(node.left, newNode);
        } else if(newNode.data > node.data && node.right === null){
            node.right = newNode;
        } else if(newNode.data > node.data && node.right !== null){
            this.insertNode(node.right, newNode);
        }
    }

    remove(data) {
        //aparentemente fazem modificações na arvore (remoção), usam a árvore nova e jogam a veia fora(?)
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key){
        //caso arvore vazia
        if(this.root === null){
            return null;
        }
        //caso 2
        else if(key < node.data){
            //é escrito dessa forma pq ele ta percorrendo a arvore E !possivelmente! fazendo modificações
            node.left = this.removeNode(node.left, key);
            //se não remover nada, ele só vai retornar o Nó pelo qual passou
            //se remover algo, ai sim ele vai mudar o nó atribuído.
            //se fosse só andar pela árvore, a recursão não precisaria retornar nada
            //mas como ta fazendo modificações, precisa. (pra função recursiva pai)
            return node;
        }
        //caso 3
        else if(key > node.data){
            node.right = this.removeNode(node.right, key);
            return node;
        }
        //caso 4 (valor === nó)
        else { 
            //sem filhos (folha)
            if(node.left === null && node.right === null){
                node = null;
                return null;
            }
            //1 filho
            if(node.left === null){
                node = node.right;
                return node;
            }
            else if(node.right === null){
                node = node.left;
                return node;
            }
            else {
                //por causa das propriedades matemáticas, vai um pra direita, depois tudo pra esquerda até a folha
                //ai troca O VALOR do nó menorzão lá com o valor do nó em que achou nó.dado === valorProcurado
                let aux = this.findMinNode(node.right);
                node.data = aux.data;

                //e deleta esse nó mínimo
                node.right = this.removeNode(node.right, aux.data);
                return node;
            }
        }
    }

    //achar menor valor da árvore (funciona com subárvore também)
    findMinNode(node){
        if(node.left === null){
            return node;
        }
        else {
            return this.findMinNode(node.left)
        }
    }

    //percorrer árvore é um conceito logico
    //daí aproveitam propriedades e o jeitão da recursão pra percorrer a arvore
    inorder(node){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    //mesma coisa, mas em outra ordem
    preorder(node) {
        if(node !== null)
        {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if(node !== null)
        {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }   

    search(node, data){
        if(node === null)
        {
            return null;
        }
        else if (data < node.data) {
            return this.search(node.left, data);
        }
        else if (data > node.data){
            return this.search(node.right, data);
        }
        else {
            return node;
        }
    }

    getRootNode(){
        return this.root;
    }
}

let BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

console.log(BST.getRootNode());

let root = BST.getRootNode();
console.log("inorder traversal");
BST.inorder(root);           
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);

BST.remove(7);
console.log("inorder traversal");
BST.inorder(root); 
 export class Produto{
    id: number;
    nome: string;
    preco: number;
    quantidade: number;

    // metodo construtor - responsavel por criar objeto
    constructor(id: number, nome: string, preco: number, quantidade: number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
 }

 
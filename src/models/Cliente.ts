export class Cliente{
    id: number;
    nome: string;
    cpf: number;
    rg: number;
    anoNascimento: number;

    constructor(id: number, nome: string, cpf: number, rg: number, anoNascimento: number){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.anoNascimento = anoNascimento;
    }
}
export class Cliente{
    id: number;
    nome: string;
    cpf: string;
    rg: number;
    anoNascimento: number;

    constructor(id: number, nome: string, cpf: string, rg: number, anoNascimento: number){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.anoNascimento = anoNascimento;
    }

   getIdade(): number {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoNascimento;
    }

    getNome(): string {
        return this.nome;
    }

    getCPF(): string {
        return this.cpf;
    }

    getRG(): number {
        return this.rg;
    }

}
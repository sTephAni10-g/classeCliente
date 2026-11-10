import {Cliente} from './Cliente.js';
const andre = new Cliente (1, "André Solicito", '068.753.540-98', 410688964, 1980);
console.log('O Cliente é', andre);

const janete = new Cliente (2, "Janete de Oliveira", '501.764.310-98', 203603746, 1970);
console.log('O Cliente é', janete);

const jose = new Cliente (3, "José de Almeida", '862.373.890-08', 421724237, 1965);
console.log('O Cliente é', jose);

const clientes: Cliente[] = [andre, janete, jose];

clientes.forEach((cliente) => {
    console.log(`ID: ${cliente.id}`);
    console.log(`Nome: ${cliente.getNome()}`);
    console.log(`CPF: ${cliente.getCPF()}`);
    console.log(`RG: ${cliente.getRG()}`);
   console.log(`Ano de Nascimento: ${cliente.anoNascimento}`);
    console.log(`Idade: ${cliente.getIdade()} anos`);
    console.log('-----------------------------------');
});

//console.log(jose.getCPF());
//npx tsc
//node dist/models/testeCliente.js

import {Cliente} from './Cliente.js';
const andre = new Cliente (1, "André Solicito", 16875354098, 410688964, 1980);
console.log('O Cliente é', andre);

const janete = new Cliente (2, "Janete de Oliveira", 50176431098, 203603746, 1970);
console.log('O Cliente é', janete);

const jose = new Cliente (3, "José de Almeida", 86237389008, 421724237, 1965);
console.log('O Cliente é', jose);

//console.log(jose.getCPF());

//npx tsc
//node dist/models/testeCliente.js

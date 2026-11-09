//
// Este arquivo está para referencoiar e testar models
// Originalmnte, rodou na pasta src, usando o comando: npx tsx .\src\testeProduto.ts

import {Produto} from './Produto.js';
const iphone = new Produto(1, "Iphone 11 da Apple", 5000.00, 1);
console.log('Produto 1', iphone);
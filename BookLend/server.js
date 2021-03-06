const express = require('express')
const app = express();
Web3 = require('web3')
var web3 =new Web3("HTTP://127.0.0.1:7545");
var abi =   [ { constant: false,
       inputs: [Array],
       name: 'addBook',
       outputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
       signature: '0x028414f2' },
     { constant: true,
       inputs: [Array],
       name: 'my',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0x11f6fafb' },
     { constant: true,
       inputs: [Array],
       name: 's',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0x52efd685' },
     { constant: true,
       inputs: [Array],
       name: 'books',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0x68744046' },
     { constant: true,
       inputs: [],
       name: 'viewallbooks',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0xf8c20860' },
     { constant: true,
       inputs: [],
       name: 'bookscount',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0xfab27249' },
     { constant: false,
       inputs: [Array],
       name: 'reqbook',
       outputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
       signature: '0x99d8422d' },
     { constant: false,
       inputs: [Array],
       name: 'accbook',
       outputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
       signature: '0x207c407e' },
     { constant: false,
       inputs: [Array],
       name: 'rejbook',
       outputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
       signature: '0xba90dfe1' },
     { constant: true,
       inputs: [Array],
       name: 'viewstatus',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0x3d581421' } ];
var addr ='0x42BACcaf94D9AEd91983eb4e25Eb11B67F3617Bb';

var contract = web3.eth.Contract(abi,addr);
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/app/index.html`);
});
app.get('*', (req, res) => {
  
   res.sendFile(`${__dirname}/app/mybooks.html`);
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});

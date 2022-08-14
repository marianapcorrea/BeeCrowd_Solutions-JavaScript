/* 
1004 - Produto Simples
Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.   

Entrada
O arquivo de entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

Exemplos de Entrada	
3
9
Exemplos de Saída
PROD = 27

Exemplos de Entrada	
-30
10
Exemplos de Saída
PROD = -300

Exemplos de Entrada	
0
9
Exemplos de Saída
PROD = 0
*/

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let PROD = a * b;

console.log("PROD = " + PROD);

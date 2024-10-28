let myName = "Joao Montanari";
let value01 = 67;
let value02 = 45;

console.log("Boas vindas!!!");
console.log(`Olá, ${myName}`);

alert(`Olá, ${myName}`);

let languageCode = prompt("Qual é a sua linguage de programação favorita?");
console.log(`Linguagem de programação favorita: ${languageCode}`);

let result = value01 + value02;
console.log(`A soma de ${value01} e ${value02} é igual a ${result}.`);

// Exercicio 7
let age = parseInt(prompt("Qual a sua idade?"));
let adult = age >= 18 ? "Maior de idade" : "Menor de idade";
console.log(adult);

// Exercicio 8
let number = parseInt(prompt("Digite um número"));
if (number > 0) {
    console.log("É possitivo");
} else if (number < 0) {
    console.log("É negativo");
} else {
    console.log("É zero");
}

// Exercicio 9
let count = 1;
while (count <= 10) {
    console.log(`Contagem: ${count}`);
    count++;
}

// Exercicio 10
let grade = parseInt(prompt("Qual foi a sua nota?"));
let aprovation = grade >= 7 ? "Aprovado" : "Reprovado";
console.log(aprovation);

// Exercicio 11, 12 e 13
console.log(`Exercício 11: ${Math.random()}`);
console.log(`Exercício 12: ${parseInt(Math.random() * 10 + 1)}`);
console.log(`Exercício 13: ${parseInt(Math.random() * 1000 + 1)}`);
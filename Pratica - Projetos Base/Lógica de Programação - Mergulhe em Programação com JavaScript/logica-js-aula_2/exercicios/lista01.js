let count = 10;

while (count >= 0) {
    console.log(`Count: ${count}`);
    count--;
}

let userNumber = parseInt(prompt("Digite um número"));

while (userNumber >= 0) {
    console.log(`Contando... ${userNumber}`);
    userNumber--;
}

let inputNumber = parseInt(prompt("Digite um número"));
let contador = 0;

while (contador <= inputNumber) {
    console.log(`Contando de ${contador} até ${inputNumber}`);
    contador++;
}
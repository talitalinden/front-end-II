

/* Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os 
seguintes resultados:

- a maior e a menor altura do grupo;
- a média de altura dos homens;
- o número de mulheres */

var sexo;
var altura;
var mulher = 0;
var homem = 0;
var mediaMasc = 0; // no lugar do 0 pode ser usado uma string para informar
var count = 0;
var quantFeminino = 0;
var quantMasculino = 0;
altura = 0;
var altMenor = 0;
var altMaior = 0;
var i = 0;
mediaMasc = (homem/quantMasculino).toFixed(2); // para definir o uso de casas decimais

for (i = 1; i<= 15; i++){     //testar array//
    sexo = prompt("Qual é o seu sexo? Feminino ou masculino?");
    altura = parseFloat(prompt("Qual é a sua altura["+i+"]?")); // parseInt converte um número inteiro. parseFloat converte string em número
    
    if (i == 1) {
        altMenor = altura;
     } if(altura > altMaior){
        altMaior = altura;
     } if(sexo == 'feminino'){
        mulher += altura;
        quantFeminino++; // ou quantFeminino + 1
     } else if(sexo == 'masculino'){
        homem += altura;
        quantMasculino++; // ou quantMasculino + 1
     }

}

alert("A maior altura do grupo é: " + altMaior + "\n" + "A menor altura do grupo é: " + altMenor + "\n" + "A média de altura dos homens é: " + mediaMasc + "\n" + "O número de mulheres é: " + quantFeminino);
    
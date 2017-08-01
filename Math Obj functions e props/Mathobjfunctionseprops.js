// Alguns exemplos do objeto Math e suas funções e propriedades


// usando o mathRandom para retornar um numero randomico de 1 a 10
// e o mathfloor para arredondar para um inteiro
// lembrando que o mathrandom retorna um valor de 0 a 1, mas nao incluindo o 1, somente //o zero ex: 0,5 0,9 0...

function mathRandom(max,min){
   return Math.floor(Math.random() * (max - min) + min);  
   
}

console.log(mathRandom(10,1));

// o mesmo exemplo só que agora usando numeros reais e transformando em inteiros
//usando o mathfloor, mathceil e mathrandom

function mathRandom2(min,max){
   min = Math.ceil(min); // arredonda para o um numero acima ou para ele mesmo
   max = Math.floor(max); // arredonda para baixo ou pra ele mesmo.
    return Math.floor(Math.random() * (max - min)) + min; // arredonda o num final pra
//um inteiro
}

console.log (mathRandom2(1.5,10.5)); // o resultado vai estar entre 2 e 10, porque o ceil //vai arredondar para 2 e o floor arredondar para 10.

Math.sqrt(100); // metodo sqrt que traz a raiz quadrada, no ex: raiz quadrada de 100 = //10. Este metodo nao aceita numero negativo, ele retornará NAN.

Math.sign('-5'); // retorna se o numero é positivo ou nao.

Math.max(1,2,3,4,5); // retorna o valor maximo num array

Math.round( 20.49); //  20 O round retorna o valor inteiro maximo mais proximo
Math.round( 20.5);  //  21
Math.round( 42  );  //  42
Math.round(-20.5);  // -20
Math.round(-20.51); // -21

Math.pow(7, 2);    // 49 Retorna o valor da base(o primeiro numero) e a exp do segundo 
Math.pow(7, 3);    // 343
Math.pow(2, 10);   // 1024


// Propriedade PI do obj Math

function calculateCircumference(radius) { // calculo da área de um circulo
  return Math.PI * (radius + radius);
}

calculateCircumference(1);  // 6.283185307179586

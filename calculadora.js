function soma(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
};

function divisao(a, b) {
    return a / b
};

function multiplicar(a, b) {
    return a * b
};

function quadradoDoNumero(numero1, numero2) {
    let result = multiplicar(numero1, numero2);
    return numero1 + " de largura e " + numero2 + " de altura é " + result;
}

function mediaDeTresNumeros(numero1, numero2, numero3) {
    let total = soma(numero1, numero2);
    let total2 = soma(numero3, total);
    let result = divisao(total2, 3);
    return numero1 + " + " + numero2 + " + " + numero3 + " = " + result;
}

function calculaPorcentagem(numero1, numero2) {
    let dividindo = divisao(numero1, 100);
    let multiplicando = multiplicar(dividindo, numero2);
    return numero2 + "% de R$" + numero1 + " é R$" + multiplicando;
}

function geradorDePorcentagem(numero1, numero2) {
    let multiplicando = multiplicar(numero1, 100);
    let dividindo = divisao(multiplicando, numero2);
    return "A porcentagem de " + numero1 + " sobre " + numero2 + " é " + dividindo + "%";
}

console.log("-------------- Teste de Operações / Calculadora --------------")

console.log("Soma", soma(10, 5));
console.log("------------------------");
console.log("Subtração", subtrair(10, 5));
console.log("------------------------");
console.log("Divisão", divisao(15, 3));
console.log("------------------------");
console.log("Multiplicação", multiplicar(10, 5));
console.log("------------------------");
console.log(quadradoDoNumero(9, 7), "Ao Quadrado");
console.log("------------------------");
console.log("Media de:", mediaDeTresNumeros(10, 8, 9));
console.log("------------------------");
console.log("Calcular Porcentagem: ", calculaPorcentagem(280, 15));
console.log("------------------------");
console.log("Gerador de porcentagem: ", geradorDePorcentagem(2, 200));
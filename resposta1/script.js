let strNum = document.getElementById("txtNumber");
let result = document.getElementById("result");

function éRaizQuadrada(x) {
    let s = Math.sqrt(x);
    return s === Math.floor(s);
}

function testeFibonacci() {
    let num = parseInt(strNum.value);
    if (num < 0) {
        result.innerHTML = "Número inválido";
        return;
    }
    
    let caseA = 5 * (num * num) + 4;
    let caseB = 5 * (num * num) - 4;
    
    if (éRaizQuadrada(caseA) || éRaizQuadrada(caseB)) {
        result.innerHTML = "Pertence à sequência de Fibonacci";
    } else {
        result.innerHTML = "Não pertence à sequência de Fibonacci";
    }
}
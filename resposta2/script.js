let txt = document.getElementById("text");
let result = document.getElementById("result");

function possuiA() {
    let text = txt.value.toLowerCase();
    let contador = 0;
    for (let a of text) {
        if (a === 'a') {
            contador++;
        }
    }
    if (contador > 0) {
        result.innerHTML = `A palavra inserida possui: ${contador} letra(s) "a".`;
    } else {
        result.innerHTML = "Não foi encontrada a ocorrência da letra 'a'.";
    }
}
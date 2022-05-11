var numeroAluno = 11;

for (var contador =0; contador < numeroAluno; contador ++) {
    
    if (contador == 0) {
        console.log("O número é zero")
    }
// Interpolação
    else if (contador % 2 == 0) {
        console.log(`O número ${contador} é par`)
    } 

// Concatenação
    else if (contador % 2 == 1) {
        console.log(`O número ` + contador + ` é ímpar`)

    }

}
// function listaAlunos(aluno1, aluno2, aluno3, aluno4) {
//     console.log("Sejam Bem-Vindos todods os alunos!");
//     console.log(aluno1);
//     console.log(aluno2);
//     console.log(aluno3);
//     console.log(aluno4);
// }

function listaAlunos(...alunos) {
    console.log("Sejam Bem-Vindos todods os alunos!");
    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[3]);
}

listaAlunos("Adamastor", "Benevidos", "Conegundes", "Demerval");


function sorteadorPrimo(...numeros) {
    console.log(numeros);
    const numeroSorteado = Math.floor(Math.random() * numeros.length)
    console.log(`posição  ${numeroSorteado}`);
    console.log(`número primo ${numeros[numeroSorteado]}`);
    // const numeroSorteado = Math.random()*numeros.length;
    // console.log(numeroSorteado);
};

sorteadorPrimo(2, 3, 5, 7, 11, 13, 17, 19);

//Sorteador de Alunos

function AlunosDS(...Alunos) {
    const alunosDS = Math.floor(Math.random()*Alunos.lenght);
    console.log(`O aluno é ${Alunos[AlunosDS]}`);
}
    AlunosDS('aline', 'ana clara', 'andré', 'bernardo', 'daniel', 'deivid', 'enrique', 'fernanda', 'gabriel rossa', 'gabriel zattera', 'heloise', 'izadora', 'jefte', 'joão matheus', 'joão maurício', 'josé vitor', 'julia', 'kamila', 'karina', 'kevin', 'leonardo freitas', 'leonardo gaspareto', 'lorenzo', 'lucas', 'matheus', 'nicolas', 'nycolas', 'pedro portela', 'rafaela', 'raphael', 'rayra', 'valentina', 'vinícius', 'vitor garret', 'vitor shuski', 'pedro da silva', 'ana luiza')
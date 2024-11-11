let primeiros = [1, 2, 3];

let numeros = [primeiros, 4, 5, 6];

let numeros2 = [...primeiros, 4, 5, 6];

console.log(numeros);
console.log(numeros2);

let pessoa = {
    nome: "José",
    idade: 16,
    cargo: "Estudante"
};

let dadosPessoa = {
    ...pessoa,
    status: "Ativo",
    cidade: "Campo Largo"
};

console.log(dadosPessoa);
console.log(dadosPessoa.cargo);

function novoUsuario(info) {
    let dados = {
        ...info,
        status:"Ativo",
        inicio:"20/09/2024",
        codigo:123
    }
    console.log(dados)
};

novoUsuario({ nome: "Alberto", sobrenome: "Rico", cargo: "Estágiario" })
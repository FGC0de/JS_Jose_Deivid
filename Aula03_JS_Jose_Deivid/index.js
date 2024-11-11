var lista = ["aluno1","aluno2",100];
console.log(lista);

console.log(lista[2])

console.log(lista.length);

console.log(lista.indexOf("aluno3"));
console.log(lista.indexOf("aluno1"));

lista[0] = "Jose";
console.log(lista);
lista[1] = "Deivid";
console.log(lista);
lista[2] = 3;
console.log(lista);

lista.push('Rodrival');
console.log(lista);

lista.shift();
console.log(lista);

lista.pop();
console.log(lista);

console.log(lista.join(';'))
const nome = "Lucas Emmanuel"
let nome2 = "";
let pessoaDefault =  {
    nome: "Lucas Emmanuel",
    idade: "23",
    trabalho: "Programador"
}

let nomes = [ "Lucas Emmanuel", "Maria Silva", "Pedro Silva"];

let pessoas = [
    {
    nome: "Lucas Emmanuel",
    idade: "23",
    trabalho: "Programador"
},
{
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI Designer"
}
];


function alterarNome(){
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterdado recebendo um nome")
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
console.log("Nome:");
console.log(pessoa.nome);

console.log("Nome:");
console.log(pessoa.idade);

console.log("Nome:");
console.log(pessoa.trabalho);
}



function adicionarPessoas(pessoa) {
     pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("---------IMPRIMIR PESSOAS--------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

       console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
     
    })
}

imprimirPessoas();

adicionarPessoas({
   nome: "Pedro Silva",
   idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);


//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva")

//alterarNome();
    
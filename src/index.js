const alice = {
  nome: "Alice",
  idade: 28,
  profissao: "Desenvolvedora"
};
const bob = {
  nome: "Bob",
  idade: 15,
  profissao: ""
};

// ============= TERNARIO - EXEMPLO 1 ===================
// Retorna "Sim" ou "Nao"
function maiorQue18(pessoa) {
  //condicao ? exprVerdadeira : exprFalsa
  return pessoa.idade >= 18 ? "sim" : "não";

  // if (pessoa.idade >= 18) {
  //   return "Sim";
  // } else {
  //   return "Não";
  // }
}

// console.log(maiorQue18(alice)); // Sim
// console.log(maiorQue18(bob)); // Não
// console.log(maiorQue18("a"));

// ============= TERNARIO - EXEMPLO 2 ===================
//Retorna a profissão da pessoa. Se não tem, retorna "desempregada"
function pegaProfissao(pessoa) {
  //condicao ? exprVerdadeira : exprFalsa
  return pessoa.profissao ? pessoa.profissao : "Desempregado(a)";

  // if (pessoa.profissao) {
  //   return pessoa.profissao;
  // } else {
  //   return "Desempregado(a)";
  // }
}
console.log(pegaProfissao(alice));
console.log(pegaProfissao(bob));

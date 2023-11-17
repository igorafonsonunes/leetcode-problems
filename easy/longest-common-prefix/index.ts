/*
Escreva uma função para encontrar a string de prefixo comum mais longa entre uma matriz de strings.
Se não houver um prefixo comum, retorne uma string vazia "".

Exemplo 1:

Entrada: strs = ["flor","fluxo","vôo"]
 Saída: "fl"
Exemplo 2:

Entrada: strs = ["dog","racecar","car"]
 Saída: ""
 Explicação: Não há prefixo comum entre as strings de entrada.
*/

function main(strs: string[]): string {
  if (!strs.length) return "";

  strs.sort();
  let prefix: string[] = [];

  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] == strs[strs.length - 1][i]) {
      prefix.push(strs[0][i]);
    } else {
      break;
    }
  }

  return prefix.join("");
}

main(["flower", "flow", "flight"]);

/*
Dada uma matriz de números inteiros `nums` e um número inteiro `target`, 
retorne os índices dos dois números de forma que a soma deles seja `target`.

Você pode assumir que cada entrada teria exatamente uma solução e não pode usar o mesmo elemento duas vezes.

Você pode retornar a resposta em qualquer ordem.

Exemplo 1:
Entrada: nums = [2,7,11,15], alvo = 9
 Saída: [0,1]
 Explicação: Como nums[0] + nums[1] == 9, retornamos [0, 1].

Exemplo 2:
Entrada: nums = [3,2,4], alvo = 6
 Saída: [1,2]

Exemplo 3:
Entrada: nums = [3,3], alvo = 6
 Saída: [0,1]
*/

function main(nums: number[], target: number): number[] {
  const auxNums: number[] = [];
  let stopFunction = false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        auxNums.push(i, j);
        stopFunction = true;
      }
      break;
    }
    if (stopFunction) break;
  }
  return auxNums;
}

main([2, 7, 11, 15], 9);

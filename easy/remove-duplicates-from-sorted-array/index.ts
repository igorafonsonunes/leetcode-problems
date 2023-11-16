/*
Dada uma matriz inteira nums classificada em ordem não decrescente , remova as duplicatas no local de forma que cada elemento exclusivo apareça apenas uma vez. A ordem relativa dos elementos deve ser mantida a mesma . Em seguida, retorne o número de elementos únicos em nums.

Considere o número de elementos únicos de nums para k. Para ser aceito, você precisa fazer o seguinte:

Altere a matriz nums de forma que os primeiros k elementos nums contenham os elementos únicos na ordem em que estavam presentes nums inicialmente. Os elementos restantes de nums não são importantes, assim como o tamanho de nums.
Retornar k.
Juiz personalizado:

O juiz testará sua solução com o seguinte código:

int[] nums = [...]; //matriz de entrada
int[] expectedNums = [...]; //A resposta esperada com comprimento correto

int k = removeDuplicates(nums); // Chama sua implementação

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

Se todas as afirmações forem aprovadas, sua solução será aceita.

Exemplo 1:

Entrada: nums = [1,1,2]
 Saída: 2, nums = [1,2,_]
 Explicação: Sua função deve retornar k = 2, com os dois primeiros elementos de nums sendo 1 e 2 respectivamente.
Não importa o que você deixa além do k retornado (portanto, eles são sublinhados).

Exemplo 2:
Entrada: nums = [0,0,1,1,1,2,2,3,3,4]
 Saída: 5, nums = [0,1,2,3,4,_,_,_,_, _]
 Explicação: Sua função deve retornar k = 5, com os primeiros cinco elementos de nums sendo 0, 1, 2, 3 e 4 respectivamente.
Não importa o que você deixa além do k retornado (portanto, eles são sublinhados).
*/

function main(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j--;
      }
    }
  }

  console.log(nums.length);
  console.log(nums);
  return nums.length;
}

main([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

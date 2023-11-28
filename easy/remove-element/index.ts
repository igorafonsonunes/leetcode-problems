/*
Dado um array inteiro num se um inteiro val, remova todas as ocorrências de val in nums - place.
A ordem dos elementos pode ser alterada.
Em seguida, retorne o número de elementos em nums que não são iguais a val.

Considere o número de elementos em nums que não são iguais a val be k, para ser aceito, você precisa fazer o seguinte:

Altere a matriz nums de forma que os primeiros k elementos nums contenham os elementos que não são iguais a val.
Os elementos restantes de nums não são importantes, assim como o tamanho de nums.
Retornar k. 

Exemplo 1:

Entrada: nums = [3,2,2,3], val = 3
 Saída: 2, nums = [2,2,_,_]
 Explicação: Sua função deve retornar k = 2, com os dois primeiros elementos de nums sendo 2.
Não importa o que você deixa além do k retornado (portanto, eles são sublinhados).
Exemplo 2:

Entrada: nums = [0,1,2,2,3,0,4,2], val = 2
 Saída: 5, nums = [0,1,4,0,3,_,_,_]
 Explicação: Sua função deve retornar k = 5, com os primeiros cinco elementos de nums contendo 0, 0, 1, 3 e 4.
Observe que os cinco elementos podem ser retornados em qualquer ordem.
Não importa o que você deixa além do k retornado (portanto, eles são sublinhados).
*/

function removeElement(nums: number[], val: number): number {
  let res = 0;

  for(let i =0; i < nums.length; i++){
    if (nums[i] !== val) {
        nums[res] = nums[i];
        res++;
      }
  }

  return res;
}

removeElement([3, 2, 2, 3], 3);

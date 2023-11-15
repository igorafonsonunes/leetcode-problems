/*
Você recebe os cabeçalhos de duas listas vinculadas classificadas list1 e list2.

Mesclar as duas listas em uma lista classificada. A lista deve ser feita unindo os nós das duas primeiras listas.

Retorne o cabeçalho da lista vinculada mesclada .

Exemplo 1:
Entrada: lista1 = [1,2,4], lista2 = [1,3,4]
 Saída: [1,1,2,3,4,4]
Exemplo 2:

Entrada: lista1 = [], lista2 = []
 Saída: []
Exemplo 3:

Entrada: lista1 = [], lista2 = [0]
 Saída: [0]

Esta não é uma solução minha, mas aprendi bastante com ela.
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function main(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = main(list1.next, list2);
    return list1;
  } else {
    list2.next = main(list1, list2.next);
    return list2;
  }
};

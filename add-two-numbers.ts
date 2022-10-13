class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = new ListNode(0);
  let pointer = head;

  let carry = false;

  while (l1 || l2) {
    let sum = 0;

    if (l1) {
      sum += l1.val ?? 0;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val ?? 0;
      l2 = l2.next;
    }

    if (carry) {
      sum++;
    }

    if (sum >= 10) {
      sum %= 10;
      carry = true;
    } else {
      carry = false;
    }

    pointer.next = new ListNode(sum);
    pointer = pointer.next;
  }

  if (carry) {
    pointer.next = new ListNode(1);
  }

  return head.next;
}

// O(m + n)

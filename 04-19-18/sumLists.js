/*
You have two numbers represented by a linked list, where each node containes a single
digit. The digits are stored in reverse order, such that the 1's digits is at the head
of the list. Write a function that adds the two numbers and returns the sum as a linked
list.

EXAMPLE:
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 295.
Output: 2 -> 1 -> 9. That is 912.

Follow Up
Suppose the digits are stored in the forward order. Repeat the above problem.

EXAMPLE:
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
Output: 9 -> 1 -> 2. That is 912.

Hints #7, #30, #71, #95, #109
*/

// i: two nodes that have reverse numbers
// o: a new node that is added from the previous nodes
// c: must return the numbers in reversed order
// e: empty list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

class LinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
  }

  addToTail(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const calculateValAndOver = (current1, current2, carryOver) => {
  const val1 = current1 ? current1.val : 0;
  const val2 = current2 ? current2.val : 0;
  const newVal = val1 + val2 + carryOver;
  return {
    value: newVal >= 10 ? newVal % 10 : newVal,
    over: newVal >= 10 ? 1 : 0,
  };
};

const sumLists = (node1, node2) => {
  let carryOver = 0;
  let result = new LinkedList();
  let current1 = node1;
  let current2 = node2;

  while(current1 || current2) {
    const { value, over } = calculateValAndOver(current1, current2, carryOver);
    const node = new Node(value);
    carryOver = over;
    
    result.addToTail(node);

    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;
  }

  if (carryOver) {
    result.addToTail(new Node(carryOver));
  }

  return result;
};

module.exports = {
  Node,
  LinkedList,
  sumLists,
  calculateValAndOver,
};

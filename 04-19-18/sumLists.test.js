const { Node, LinkedList, sumLists, calculateValAndOver } = require('./sumLists');

describe('### SUMLISTS PROMPT ###', () => {
  describe('___NODE___', () => {
    it('Should return an instance of Node', () => {
      const head = new Node(1);
      expect(head).toBeInstanceOf(Node);
    });

    it('Should return a node with the property value and next', () => {
      const head = new Node(1);
      expect(head).toHaveProperty('val', 1);
      expect(head).toHaveProperty('next', null);
    });
  });

  describe('___LINKED LIST___', () => {
    const list = new LinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    it('Should return an instance of LinkedList', () => {
      expect(list).toBeInstanceOf(LinkedList);
    });

    it('Should have the property of head and tail', () => {
      expect(list).toHaveProperty('head', null);
      expect(list).toHaveProperty('tail', null);
    });

    it('Should have the method addToTail', () => {
      expect(typeof list.addToTail).toBe('function');
    });

    it('Should add a node to the head and tail if the linked list if empty', () => {
      list.addToTail(node1);
      expect(list.head).toBe(node1);
      expect(list.tail).toBe(node1);
    });

    it('Should add the new node to the tail if the head already exists', () => {
      list.addToTail(node2);
      expect(list.head).toBe(node1);
      expect(list.tail).toBe(node2);
      expect(list.head.next.val).toBe(node2.val);
    })
  });

  describe('___CALCULATE VAL AND OVER___', () => {
    const head1 = new Node(3);
    const head2 = new Node(8);
    const head3 = new Node(2);
    const result = calculateValAndOver(head1, head2, 0);
    const result2 = calculateValAndOver(head1, head3, 0);

    it('Should be a function', () => {
      expect(typeof calculateValAndOver).toBe('function');
    });

    it('Should return an object', () => {
      expect(result).toBeInstanceOf(Object);
    });

    it('Should return an object with the properties of newVal and over set to 1 if the sum >= 10', () => {
      expect(result).toHaveProperty('value', 1);
      expect(result).toHaveProperty('over', 1);
    });

    it('Should have over equal to 0 if the sum < 10', () => {
      expect(result2).toHaveProperty('value', 5);
      expect(result2).toHaveProperty('over', 0);
    });
  });

  describe('___SUM LISTS___', () => {
    const head1 = new Node(3);
    head1.next = new Node(2);
    head1.next.next = new Node(5);

    const head2 = new Node(8);
    head2.next = new Node(3);
    head2.next.next = new Node(2);

    const head3 = new Node(3);
    head3.next = new Node(2);
    head3.next.next = new Node(5);

    it('Should be a function', () => {
      expect(typeof sumLists).toBe('function');
    });

    it('Should return an instance of Node', () => {
      const result = sumLists(head1, head2);
      expect(result).toBeInstanceOf(LinkedList);
    });

    it('Should return a singly-linked list with the digits reversed', () => {
      const result = sumLists(head1, head2);
      expect(result.head.val).toBe(1);
      expect(result.head.next.val).toBe(6);
      expect(result.head.next.next.val).toBe(7);
    });

    it('Should return an empty LinkedList if nothing is passed in', () => {
      const result = sumLists();
      expect(result).toBeInstanceOf(LinkedList);
    })

    it('Should return a list even if only one node is passed in', () => {
      const result = sumLists(null, head2);
      expect(result.head.val).toBe(8);
      expect(result.head.next.val).toBe(3);
      expect(result.head.next.next.val).toBe(2);
    });

    it('Should return a longer list if the sum is greater than the originals', () => {
      const result= sumLists(head1, head3);
      expect(result.head.val).toBe(6);
      expect(result.head.next.val).toBe(4);
      expect(result.head.next.next.val).toBe(0);
      expect(result.head.next.next.next.val).toBe(1);
    });
  });
});

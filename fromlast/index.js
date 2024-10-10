// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.head;
    let fast = list.head;
  
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
  
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
  
    return slow;
  }
  
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class List {
    constructor() {
      this.head = null;
    }
  
    insertLast(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

module.exports = fromLast;

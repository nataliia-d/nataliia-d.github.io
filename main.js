$( document ).ready(() => {    
  class ListNode{
    constructor(data){
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList{
    constructor(head = null){
      this.head = head;
    }
  }

  let node1 = new ListNode(10);
  let node2 = new ListNode(20);
  node1.next = node2;

  let list = new LinkedList(node1);
  console.log(list);

});
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

  const input = document.getElementById("input");
  const form = document.getElementById("input-form");

  form.addEventListener("submit", event => {
    event.preventDefault();
    const submittedData = input.value;
    addNode(submittedData);
  });

  function addNode(data){
    const newNode = new ListNode(data);
    if (list.head === null) {
      list.head = newNode;
    } else {
      let currentNode = list.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    console.log(list);
  }


});
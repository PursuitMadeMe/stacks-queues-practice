const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

push(data){
  const newItem = new Node(data);
  newItem.next = this.top;
  this.top = newItem ;
}

// Not too sure
size(){
let count = 0; 
let node = this.top; 
while(node){
  count ++;
  node = node.next;
}
return count;
}

isEmpty() {
  return this.top === null;
}

pop(){
  if(!this.top){
    throw new Error("This stack is empty!")
  }
  let item = this.top;
  if(item){
    let newItem = item.next;
    this.top = newItem;
    return item
  }
}

peek(){
  if(this.isEmpty()) {
    throw new Error("This Stack is empty!")
  }
  return this.top
}

toArray() {
  let arr = [];
  let item = this.top;
  while (item) {
    arr.push(item.data);
    item = item.next;
  }
  return arr;
}

findMin(){
  let arr = this.toArray()
  return Math.min(...arr)
}

sort(){
  let arr = this.toArray()
  let sorted = arr.sort()
  this.top = null
  while(sorted.length > 0){
    let item = sorted.pop()
    this.push(item)
  }
}
}



class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  
  }

  count(){
    return this.size;
  }

  dequeue(){
    if(this.first === null){
      throw new Error ("This queue is empty");
    }
    let item = this.first
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next
    this.size --
    return item.data
  }

  enqueue(data){
    let newItem = new Node(data);
    if(!this.first){
      this.first = newItem;
      this.last = newItem;
    }else{
      this.last.next = newItem
    }
    return ++this.size
  }

  
  isEmpty(){
    return this.first === null
    // return !!this.first;
  }
  
  peek(){
    if(this.first === null){
      throw new Error("The queue is empty")
    }
    return this.first
  }

  getLast() {
    return this.last;
  }

  findMax() {
    let node = this.first;
    let max = 0;
    while(node){
      if(node.data  > max){
        max = node.data;
      }
      node = node.next
    }
    return max
  }

}







module.exports = {
  Node,
  Queue,
  Stack,
};

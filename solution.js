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

// pop(){
//   if(stack.isEmpty()) {
//     throw newError("We got no Stacks!!")
//   }
//   const item = this.top;
//   if(item){

//   }
// }

peek(){
  if(this.isEmpty()) {
    throw new Error("This Stack is empty!")
  }
  return this.topgit 
}



}









module.exports = {
  Node,
  Queue,
  Stack,
};

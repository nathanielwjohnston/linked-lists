import * as linkedList from "./linked-list.mjs";

const list = linkedList.createLinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("prepend");

console.log(list.size()); // 7

console.log(list.getHead()); // prepend node

console.log(list.tail()); // turtle node

console.log(list.at(2)); // cat node

list.pop();

console.log(list.contains("turtle")); // false

console.log(list.find("hamster")); // 4

console.log(list.toString());
// ( prepend ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

list.insertAt("test", 3);
console.log(list.toString());
// ( prepend ) -> ( dog ) -> ( cat ) -> ( test ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

list.removeAt(1);
console.log(list.toString());
// ( prepend ) -> ( cat ) -> ( test ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

import * as linkedList from "./linked-list.mjs";

const list = linkedList.createLinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.insertAt("test", 6));

console.log(list.toString());

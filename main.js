import * as linkedList from "./linked-list.mjs";

const list = linkedList.createLinkedList();

list.append("dog");

list.prepend("cat");

list.append("dog");

list.append("dog");

list.append("giraffe");

console.log(list.at(5).value);

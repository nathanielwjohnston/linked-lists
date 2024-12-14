function createNode({ value = null, nextNode = null } = {}) {
  return { value, nextNode };
}

function createLinkedList() {
  let head = null;

  function append(value) {
    const newNode = createNode({ value });
    if (!head) {
      head = newNode;
    } else {
      let node = head;
      while (true) {
        // If node is last node in list
        console.log(`${node.value}`);
        if (node.nextNode === null) {
          node.nextNode = newNode;
          break;
        }

        // To move to the next node in the list
        node = node.nextNode;
      }
      console.log("\n");
    }
  }

  function prepend(value) {
    const newNode = createNode({ value, nextNode: head });
    head = newNode;
  }

  return { append, prepend };
}

export { createLinkedList };

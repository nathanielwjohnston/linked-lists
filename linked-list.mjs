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
        if (node.nextNode === null) {
          node.nextNode = newNode;
          break;
        }

        // To move to the next node in the list
        node = node.nextNode;
      }
    }
  }

  return { append };
}

export { createLinkedList };

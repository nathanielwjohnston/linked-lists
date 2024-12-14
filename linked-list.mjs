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

  function prepend(value) {
    const newNode = createNode({ value, nextNode: head });
    head = newNode;
  }

  function size() {
    let node = head;
    let size = 0;
    while (node) {
      size++;
      node = node.nextNode;
    }

    return size;
  }

  function head() {
    return head;
  }

  return { append, prepend, size };
}

export { createLinkedList };

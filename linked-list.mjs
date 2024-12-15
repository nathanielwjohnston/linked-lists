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

  function getHead() {
    return head;
  }

  function tail() {
    let node = head;
    if (!head) {
      return null;
    }
    // If next node is null, we are on the last node
    while (node.nextNode !== null) {
      node = node.nextNode;
    }

    return node;
  }

  function at(index) {
    if (!Number.isInteger(index)) {
      return "Error: Invalid Index";
    }

    if (!head || index >= size()) {
      return null;
    }
    let node = head;

    let currentIndex = 0;

    while (currentIndex < index) {
      node = node.nextNode;
      currentIndex++;
    }

    return node;
  }

  function pop() {
    if (!head) {
      return;
    }

    let node = head;

    while (true) {
      // If the next node is the last node
      if (node.nextNode.nextNode === null) {
        // Break the link to the last node
        node.nextNode = null;
        return;
      }
      node = node.nextNode;
    }
  }

  function contains(value) {
    if (!head) {
      return false;
    }

    let node = head;

    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.nextNode;
    }

    return false;
  }

  return { append, prepend, size, getHead, tail, at, pop, contains };
}

export { createLinkedList };

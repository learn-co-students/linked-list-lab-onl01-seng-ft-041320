function getName(node){
    return node.name;
};

function headNode(head, collection){
    return collection[head];
};

function next(node, collection){
    let address = node.next;
    return collection[address];
};

function nodeAt(index, head, collection){
    let node = collection[head];
    for(let i = 0; i < index; i++){
        node = next(node, collection);
    }
    return node;
};

function addressAt(index, head, collection){
    if(index === 0){
      return head;
    } else {
      let node = nodeAt(index - 1, head, collection);
      return node.next;
    }
};

function indexAt(node, collection, head){
    let currentNode = collection[head];
    let index = 0;
    while(currentNode !== node){
      currentNode = next(currentNode, collection);
      index++;
    }
    return index;
};

function insertNodeAt(index, address, head, collection){
    let previousNode = nodeAt(index - 1, head, collection);
    let nextAddress = addressAt(index, head, collection);

    previousNode.next = address;
    collection[address].next = nextAddress;
};

function deleteNodeAt(index, head, collection){
    let previousNode = nodeAt(index - 1, head, collection);
    let nextAddress = addressAt(index + 1, head, collection);

    previousNode.next = nextAddress;
}
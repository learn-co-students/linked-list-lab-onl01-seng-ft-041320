function getName(node){
    // each node has a property called name
    return node.name
}

//? I understand how this works to get the first node, from looking at index-test.js
//? However, I don't understand how this works for a real linked list? Is it normal to have the name/key/whatever of the head node and not have the node itself?

function headNode(linkedList, collection){
    return collection[linkedList]
}

function next(node, collection){
    // each node has a property pointing to the address of the next node
    let nextAddress = node.next
    // we use that property to find that node in the collection
    return collection[`${nextAddress}`]
}

function nodeAt(index, linkedList, collection){
    // using the head node
    let node = headNode(linkedList, collection)

    for (let i = 0; i < index; i++){
        // we call next, finding each subsequent node until we have the right one
        node = next(node, collection)
    }
    return node
}

function addressAt(index, linkedList, collection){
    // if it's the first node, return the head(linkedList)
    if(index === 0){
        return linkedList
    } else {
        // find the node BEFORE the first node
        let node = nodeAt(index-1, linkedList, collection)
        // the next property is the address of the node we are looking for
        return node.next
    }
}

function indexAt(node, collection, linkedList){
    // start with the head node and the index at 0
    let currentNode = headNode(linkedList, collection), index = 0
    // while the current node isn't the node we're looking for the index of
    while(currentNode !== node){
        // increase the index
        index++
        // check the next node
        currentNode = next(currentNode, collection)
    }
    return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
    // find the node that will be before the node we are inserting( index - 1) and
    // the node after (the current node at that index)
    let nodeBefore = nodeAt(index - 1, linkedList, collection)
    let nodeAfter = nodeAt(index, linkedList, collection)
    // get the address of the node that will go after
    let nodeAfterAddress = addressAt(nodeAfter, linkedList, collection)
    // change the next poperty to point to the address of the node we are inserting
    nodeBefore.next = newNodeAddress
    // insert the new node into the collection
    let newNode = collection[newNodeAddress]
    // give the new node's next property the address of the node that used to be at that index
    newNode.next = nodeAfterAddress
  }

  function deleteNodeAt(index, linkedList, collection){
    let previousNode;
    let currentNode = headNode(linkedList, collection);
    // loop until we get to the node at the index we want to delete
    for(let i = 0; i < index; i++){
        previousNode = currentNode
        currentNode = next(currentNode, collection);
    }
    // once we have found that node change the next property of the node before it
    // to the node after it
    previousNode.next = currentNode.next
    
    // ie: We want to delete the 2nd node (index 1)
    // once we find the 2nd node
    // currentNode = node at index 1(2nd node)
    // previousNode = the node at index 0

    // change the next property of the node at index 0 to the next property at index 1
    // previousNode.next = the node after currentNode

    // what this does is cause node 1(index 0) to point to node 3(index 2) as the next node.

    // seeing as there is nothing pointing to our current node, it will be removed from memory during 'garbage collection'
}
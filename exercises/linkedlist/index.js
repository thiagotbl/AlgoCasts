// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let node = this.head
        let counter = 0

        while (node) {
            counter++
            node = node.next
        }

        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head

        while (node && node.next) {
            node = node.next
        }

        return node
    }

    clear() {
        this.head = null
    }
}

module.exports = { Node, LinkedList };

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

    removeFirst() {
        if (!this.head) {
            return
        }

        this.head = this.head.next
    }

    removeLast() {
        if (!this.head || !this.head.next) {
            this.head = null

            return
        }

        let previous = this.head
        let last = this.head.next

        while (last.next) {
            previous = last
            last = last.next
        }

        previous.next = null
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data)

            return
        }

        this.getLast().next = new Node(data)
    }

    getAt(index) {
        let counter = 0
        let node = this.head

        while (counter < index && node) {
            node = node.next
            counter++
        }

        return node
    }
}

module.exports = { Node, LinkedList };

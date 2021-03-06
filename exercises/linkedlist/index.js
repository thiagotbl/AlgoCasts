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
        // this.head = new Node(data, this.head)
        this.insertAt(data, 0)
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
        // let node = this.head

        // while (node && node.next) {
        //     node = node.next
        // }

        // return node
        return this.getAt(this.size() - 1)
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
        // if (!this.head || !this.head.next) {
        //     this.head = null

        //     return
        // }

        // let previous = this.head
        // let last = this.head.next

        // while (last.next) {
        //     previous = last
        //     last = last.next
        // }

        // previous.next = null
        this.removeAt(this.size() - 1)
    }

    insertLast(data) {
        // if (!this.head) {
        //     this.head = new Node(data)

        //     return
        // }

        // this.getLast().next = new Node(data)
        this.insertAt(data, this.size())
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

    removeAt(index) {
        if (index === 0) {
            this.head = this.head && this.head.next

            return
        }

        const previous = this.getAt(index - 1)
        const node = previous && previous.next

        if (!previous || !node) {
            return
        }

        previous.next = node.next
    }

    insertAt(data, index) {
        if (index === 0 || !this.head) {
            this.head = new Node(data, this.head)

            return
        }

        const previous = this.getAt(index - 1) || this.getLast()
        const node = new Node(data, previous.next)
        previous.next = node
    }

    forEach(fn) {
        let node = this.head
        let index = 0

        while (node) {
            fn(node, index)

            node = node.next
            index++
        }
    }
}

module.exports = { Node, LinkedList };

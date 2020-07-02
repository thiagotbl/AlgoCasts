// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter((node) => (
            node.data !== data
        ))
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    traverseBF(fn) {
        const queue = [this.root] // will be treated as FIFO

        while (queue.length) {
            // remove and handle the first node on the queue
            const node = queue.shift()
            fn(node)

            // add the node children to the end of the queue
            queue.push(...node.children)
        }
    }

    traverseDF(fn) {
        const stack = [this.root] // will be treated as LIFO

        while (stack.length) {
            // remove and handle the first node on the stack
            const node = stack.shift()
            fn(node)

            // add the node children to the start of the stack
            stack.unshift(...node.children)
        }
    }

    // traverseDF(fn, node = this.root) {
    //     fn(node)

    //     for (let child of node.children) {
    //         this.traverseDF(fn, child)
    //     }
    // }
}

module.exports = { Tree, Node };

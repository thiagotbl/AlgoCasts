// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.mainStack = new Stack()
        this.auxStack = new Stack()
    }

    add(element) {
        this.mainStack.push(element)
    }

    remove() {
        while (this.mainStack.peek()) {
            this.auxStack.push(this.mainStack.pop())
        }

        const element = this.auxStack.pop()

        while (this.auxStack.peek()) {
            this.mainStack.push(this.auxStack.pop())
        }

        return element
    }

    peek() {
        while (this.mainStack.peek()) {
            this.auxStack.push(this.mainStack.pop())
        }

        const element = this.auxStack.peek()

        while (this.auxStack.peek()) {
            this.mainStack.push(this.auxStack.pop())
        }

        return element
    }
}

module.exports = Queue;

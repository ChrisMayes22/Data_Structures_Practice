class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class Queue {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.bottom;
    }

    enqueue(value) {
        const node = new Node(value);
        if(this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
            node.next.previous = node;
        }
        this.length++;
        return node;
    }

    dequeue() {
        if(this.length === 0) throw new Error("Error: Cannot call queue.dequeue when the queue is empty.")
        const bottom = this.bottom;
        this.bottom = this.bottom.previous;
        this.length--
        return bottom;
    }

}

module.exports = Queue;
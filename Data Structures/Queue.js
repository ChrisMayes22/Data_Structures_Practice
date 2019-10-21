class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);
        if(this.length === 0) {
            this.last = node;
            this.first = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return node;
    }

    dequeue() {
        if(this.length === 0) return null;
        this.first = this.first.next;
        this.length--;
        return this;
    }

}

module.exports = Queue;
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value){
        const node = new Node(value);
        if(this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
        return node;
    }

    pop(){
        if(this.length === 0) throw new Error("Error: Cannot call queue.dequeue when the queue is empty.")
        const top = this.top;
        this.top = this.top.next;
        this.length--;
        return top;
    }

}

module.exports = Stack;
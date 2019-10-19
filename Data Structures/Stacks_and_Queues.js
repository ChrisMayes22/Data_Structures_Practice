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
        node.next = this.top;
        if(this.top === null) this.bottom = node;
        this.top = node;
        this.length++;
        return node;
    }

    pop(){
        const top = this.top;
        this.top = this.top.next;
        this.length--;
        return top;
    }

}

module.exports = {
    stack: Stack
};
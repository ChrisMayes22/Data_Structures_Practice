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
        this.length = 1;
    }

    peek() {
        return this.top;
    }

    push(value){
        const node = new Node(value);
        node.next = this.top;
        if(this.top === null) this.bottom = node;
        this.top = node;
        return node;
    }

}

module.exports = {
    stack: Stack
};
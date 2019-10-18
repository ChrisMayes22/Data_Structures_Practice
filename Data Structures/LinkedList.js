class LinkedList {
    constructor(value) {
        this.head = { value: value, next: null };
        this.tail = this.head;
        this.length = 1;
    }

    append(val) {
        this.tail.next = { value: val, next: null };
        this.tail = this.tail.next;
        this.length++;
        return this;
    }

    prepend(val) {
        const newNode = { value: val, next: this.head };
        this.head = newNode;
        this.length++;
        return this;
    }

    traverseToIndex(i) {
        if(typeof i !== 'number') throw new Error("Error: index of insertion value must be a number.");
        if(i >= this.length) throw new Error(`Error: Index must be less than list's length. List's length is ${list.length}, index is ${i}`);
        let currentNode = this.head;
        for(let j = 0; j < i; j++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    findIndexOfValue(val) {
        let currentNode = this.head;
        let counter = 0;
        while(currentNode !== null) {
            if(currentNode.value === val) return counter;
            currentNode = currentNode.next;
            counter++;
            if(currentNode === null) throw Error('Error: input value not found in list');
        }  
    }

    insertAtIndex(val, i) {
        if(typeof i !== "number") throw new Error("Error: index of insertion value must be a number.")
        if(i <= 0) return this.prepend(val);
        if(i+1 >= this.length) return this.append(val);
        const leader = this.traverseToIndex(i-1);
        const newNode = { value: val, next: leader.next };
        leader.next = newNode;
        this.length++;
        return this;
    }

    deleteHead() {
        this.head = this.head.next;
        this.length--;
        return this;
    }

    deleteTail() {
        let currentNode = this.head;
        while(currentNode.next.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.length--;
        return this;
    }

    deleteByValue(val){
        if(this.head.value === val) return this.deleteHead();
        if(this.tail.value === val) return this.deleteTail();
        const leader = this.traverseToIndex(this.findIndexOfValue(val)-1);
        leader.next = leader.next.next;
        this.length--;
        return this;
    }
};

module.exports = LinkedList;
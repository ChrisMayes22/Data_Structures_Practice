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

    insertAtIndex(val, i) {
        if(typeof i !== "number") throw new Error("Error: index of insertion value must be a number.")
        if(i === 0) return this.prepend(val);
        if(i+1 === this.length) return this.append(val);
        const newNode = { value: val, next: null };
        let currentNode = this.head;
        for(let j = 0; j < i-1; j++){
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
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

    deleteOneByValue(val){
        if(this.head.value === val) return this.deleteHead();
        if(this.tail.value === val) return this.deleteTail();
        let currentNode = this.head;
        do {
            if(currentNode.next.value === val){
                currentNode.next = currentNode.next.next;
                this.length--;
                return null;
            }
            currentNode = currentNode.next;
            if(currentNode === null) return new Error("ERR: Input value not found in list");
        } while (currentNode !== null);
        return null;
    }

    findByValue(val){
        var currentNode = this.head;
        do {
            if(currentNode.next === null) return new Error("ERR: Input not found in list");
            if(currentNode.next.value === val) return currentNode.next;
            currentNode = currentNode.next;
        } while (currentNode !== null);
    }
};
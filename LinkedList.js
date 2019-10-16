class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(val) {
        var currentNode = this.head;
        do {
            if(currentNode.next === null){
                currentNode.next = { value: val, next: null };
                this.tail = currentNode.next;
                this.length++;
                currentNode = currentNode.next;
            }
            currentNode = currentNode.next;
        } while (currentNode !== null);
        return this.tail;
    }

    deleteOneByValue(val){
        if(this.head.value === val) {
            this.head = this.head.next;
            return this.head;
        }
        var currentNode = this.head;
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
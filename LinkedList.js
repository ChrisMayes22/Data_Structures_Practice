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
        this.tail.next = { value: val, next: null };
        this.tail = this.tail.next;
        this.length++;
        return this;
    }

    insert(val, i) {
        if(typeof i !== "number") throw new Error("Error: index of insertion value must be a number.")
        let newNode = {
            value: val,
            next: null
        }
        if(i === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        }
        let currentNode = this.head;
        for(let j = 0; j <= i; j++){
            currentNode = currentNode.next;
            if(currentNode.next === null) {
                currentNode.next = newNode;
                return this;
            }
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
    }

    deleteOneByValue(val){
        if(this.head.value === val) {
            this.head = this.head.next;
            return this.head;
        }
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

const list = new LinkedList(1);

console.log(list.head);
list.insert(0, 0);
console.log(list.head);
list.insert(2, 10);
console.log(list.head);
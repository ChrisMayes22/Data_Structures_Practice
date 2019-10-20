const Queue = require('../Data Structures/Queue');
const expect = require('chai').expect;

describe('When Stack is initialized, it has expected properties', function(){
    it('Stack has a top object with a null value.', function(){
        const queue = new Queue();
        expect(queue.top).to.equal(null);
    })
    it('Stack has a bottom object with a null value.', function(){
        const queue = new Queue();
        expect(queue.bottom).to.equal(null);
    })
    it('Stack has length prop with a value of zero.', function(){
        const queue = new Queue();
        expect(queue.length).to.equal(0);
    })
})
describe('When Queue  methods are called, they behave as expected.', function(){
    function newQueue(){
        const queue = new Queue();
        queue.top = {
            value: 0,
            next: {
                value: 1,
                next: {
                    value: 2,
                    next: null,
                    previous: null
                },
                previous: null
            },
            previous: null
        }
        queue.top.next.previous = queue.top;
        queue.top.next.next.previous = queue.top.next;
        queue.bottom = {
            value: 2,
            next: null,
            previous: queue.top.next
        }
        queue.length = 3
        return queue;
    }
    it('Peek method returns the object at the bottom of the Queue.', function(){
        const queue = newQueue();
        expect(queue.peek().value).to.equal(2);
    })
    it('Enqueue method adds a new object to the top of the Queue.', function(){
        const queue = new Queue();
        queue.enqueue('test');
        expect(queue.top.value).to.equal('test');
        queue.enqueue('test 2');
        expect(queue.top.value).to.equal('test 2');
        expect(queue.bottom.value).to.equal('test');
        queue.enqueue('test 3');
        expect(queue.top.value).to.equal('test 3');
        expect(queue.bottom.value).to.equal('test');
    })
    it('Enqueue method increases the length of the stack by 1.', function(){
        const queue = new Queue();
        expect(queue.length).to.equal(0);
        queue.enqueue(0);
        expect(queue.length).to.equal(1);
    })
    it('Dequeue method removes the object at the bottom of the Queue.', function(){
        const queue = newQueue();;
        expect(queue.bottom.value).to.equal(2);
        queue.dequeue();
        expect(queue.bottom.value).to.equal(1);
        queue.dequeue();
        expect(queue.bottom.value).to.equal(0);
    })
})
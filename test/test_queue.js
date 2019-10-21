const Queue = require('../Data Structures/Queue');
const expect = require('chai').expect;

describe('When Queue is initialized, it has expected properties', function(){
    it('Queue has a top object with a null value.', function(){
        const queue = new Queue();
        expect(queue.first).to.equal(null);
    })
    it('Queue has a bottom object with a null value.', function(){
        const queue = new Queue();
        expect(queue.last).to.equal(null);
    })
    it('Queue has length prop with a value of zero.', function(){
        const queue = new Queue();
        expect(queue.length).to.equal(0);
    })
})
describe('When Queue  methods are called, they behave as expected.', function(){
    function newQueue(){
        const queue = new Queue();
        queue.first = {
            value: 0,
            next: {
                value: 1,
                next: {
                    value: 2,
                    next: null,
                },
            },
        }
        queue.last = {
            value: 2,
            next: null,
        }
        queue.length = 3
        return queue;
    }
    it('Peek method returns the first object in the Queue.', function(){
        const queue = newQueue();
        expect(queue.peek().value).to.equal(0);
    })
    it('Enqueue method adds a new object to the back of the Queue.', function(){
        const queue = new Queue();
        queue.enqueue('test');
        expect(queue.last.value).to.equal('test');
        queue.enqueue('test 2');
        expect(queue.last.value).to.equal('test 2');
        expect(queue.first.value).to.equal('test');
        queue.enqueue('test 3');
        expect(queue.last.value).to.equal('test 3');
        expect(queue.first.value).to.equal('test');
    })
    it('Enqueue method increases the length of the stack by 1.', function(){
        const queue = new Queue();
        expect(queue.length).to.equal(0);
        queue.enqueue(0);
        expect(queue.length).to.equal(1);
    })
    it('Dequeue method removes the object at the front of the Queue.', function(){
        const queue = newQueue();;
        expect(queue.first.value).to.equal(0);
        queue.dequeue();
        expect(queue.first.value).to.equal(1);
        queue.dequeue();
        expect(queue.first.value).to.equal(2);
        queue.dequeue();
        expect(queue.first).to.equal(null);
    })
})
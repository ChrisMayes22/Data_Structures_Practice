const Stack = require('../Data Structures/Stacks_and_Queues').stack;
const expect = require('chai').expect;

describe('When Stack is initialized, it has expected properties', function(){
    it('Stack has a top object with a null value.', function(){
        const stack = new Stack();
        expect(stack.top).to.equal(null);
    })
    it('Stack has a bottom object with a null value.', function(){
        const stack = new Stack();
        expect(stack.bottom).to.equal(null);
    })
    it('Stack has length prop with a value of zero.', function(){
        const stack = new Stack();
        expect(stack.length).to.equal(0);
    })
})
describe('When Stack methods are called, they behave as expected', function(){
    function makeStack() {
        const stack = new Stack();
        stack.top = {
            value: 0,
            next: {
                value: 1,
                next: {
                    value: 2,
                    next: null
                }
            }
        }
        stack.bottom = {
            value: 2,
            next: null
        }
        stack.length = 3
        return stack;
    }
    it('Peek method returns the tail of the stack.', function(){
        const stack = new Stack();
        expect(stack.peek()).to.equal(null);
        stack.top = { value: 'test', next: null };
        expect(stack.peek().value).to.equal('test');
    })
    it('Push method adds passed value to a node at the top of the stack.', function(){
        const stack = new Stack();
        stack.push('test');
        expect(stack.top.value).to.equal('test');
        stack.push('test 2');
        expect(stack.top.value).to.equal('test 2');
        expect(stack.bottom.value).to.equal('test');
        stack.push('test 3');
        expect(stack.top.value).to.equal('test 3');
        expect(stack.bottom.value).to.equal('test');
    })
    it('Push method increases the length of the stack by 1.', function(){
        const stack = new Stack();
        expect(stack.length).to.equal(0);
        stack.push(0);
        expect(stack.length).to.equal(1);
    })
    it('Pop method removes passed top node from stack.', function(){
        const stack = makeStack();
        expect(stack.top.value).to.equal(0);
        expect(stack.bottom.value).to.equal(2);
        stack.pop();
        expect(stack.top.value).to.equal(1);
        expect(stack.bottom.value).to.equal(2);
        stack.pop();
        expect(stack.top.value).to.equal(2);
        expect(stack.bottom.value).to.equal(2);
        stack.pop();
        expect(stack.top).to.equal(null);
    })
    it('Pop method reduces stack length by one.', function(){
        const stack = makeStack();
        expect(stack.length).to.equal(3);
        stack.pop();
        expect(stack.length).to.equal(2);
        stack.pop();
        expect(stack.length).to.equal(1);
        stack.pop();
    })
})
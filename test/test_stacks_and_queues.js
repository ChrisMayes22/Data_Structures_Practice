const Stack = require('../Data Structures/Stacks_and_Queues').stack;
const expect = require('chai').expect;

describe('When Stack is initialized, it has expected properties', function(){
    it('Stack has a top object with a null value.', function(){
        const stack = new Stack(0);
        expect(stack.top).to.equal(null);
    })
    it('Stack has a bottom object with a null value.', function(){
        const stack = new Stack(0);
        expect(stack.bottom).to.equal(null);
    })
    it('Stack has length prop with a value of one.', function(){
        const stack = new Stack(0);
        expect(stack.length).to.equal(1);
    })
})
describe('When Stack methods are called, they behave as expected', function(){
    it('Peek method returns the tail of the stack.', function(){
        const stack = new Stack(0);
        expect(stack.peek()).to.equal(null);
        stack.top = { value: 'test', next: null };
        expect(stack.peek().value).to.equal('test');
    })
    it('Push method adds passed value to a node at the top of the stack.', function(){
        const stack = new Stack(0);
        stack.push('test');
        expect(stack.top.value).to.equal('test');
        stack.push('test 2');
        expect(stack.top.value).to.equal('test 2');
        expect(stack.bottom.value).to.equal('test');
        stack.push('test 3');
        expect(stack.top.value).to.equal('test 3');
        expect(stack.bottom.value).to.equal('test');
    })
})
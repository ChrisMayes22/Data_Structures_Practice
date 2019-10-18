const LinkedList = require('../Data Structures/LinkedList');
const expect = require('chai').expect;

describe('When LinkedList is instantiated, it has expected properties', function(){
    it('LinkedList has a head object with next prop set to null.', function(){
        const list = new LinkedList(0);
        expect(list.head.next).to.equal(null);
    })
    it('LinkedList has a head object with value prop set to passed argument.', function(){
        const list = new LinkedList(0);
        const shortList = new LinkedList(1);
        expect(list.head.value).to.equal(0);
        expect(shortList.head.value).to.equal(1);
    })
    it('LinkedList has a length prop set to 1.', function(){
        const list = new LinkedList(0);
        expect(list.length).to.equal(1);
    })
})
describe('When LinkedList methods are called, they behave as expected', function(){
    it('Append method adds object to the tail of the list.', function(){
        const list = new LinkedList;
        list.append(1);
        expect(list.tail.value).to.equal(1);
        list.append(2);
        expect(list.tail.value).to.equal(2);
    })
    it('Prepend method adds object to the head of the list.', function(){
        const list = new LinkedList;
        list.prepend(1);
        expect(list.head.value).to.equal(1);
        list.prepend(2);
        expect(list.head.value).to.equal(2);
    })
})
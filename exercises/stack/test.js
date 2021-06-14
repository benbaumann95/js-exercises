const Stack = require('./index')

test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function')
})

test('stack can add and remove items', () => {
  const s = new Stack()
  s.push(1)
  expect(s.pop()).toEqual(1)
  s.push(2)
  expect(s.peek()).toEqual(2)
  expect(s.pop()).toEqual(2)
})

test('stack can add and remove items', () => {
  const s = new Stack()
  s.push('Harry Potter')
  expect(s.pop()).toEqual('Harry Potter')
  s.push('Lord of the Rings')
  expect(s.peek()).toEqual('Lord of the Rings')
  expect(s.pop()).toEqual('Lord of the Rings')
})

test('stack can follows first in, last out', () => {
  const s = new Stack()
  s.push(1)
  s.push(2)
  s.push(3)
  expect(s.pop()).toEqual(3)
  expect(s.pop()).toEqual(2)
  expect(s.pop()).toEqual(1)
})

test('peek returns the first element but doesnt pop it', () => {
  const s = new Stack()
  s.push(1)
  s.push(2)
  s.push(3)
  expect(s.peek()).toEqual(3)
  expect(s.pop()).toEqual(3)
  expect(s.peek()).toEqual(2)
  expect(s.pop()).toEqual(2)
  expect(s.peek()).toEqual(1)
  expect(s.pop()).toEqual(1)
})

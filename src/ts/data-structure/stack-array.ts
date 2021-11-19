export default class StackArray<T> {
  private items: T[];
  
  constructor() {
    this.items = [];
  }
  
  push(elem: T) {
    this.items.push(elem);
  }
  
  pop() {
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
  
  clear() {
    this.items = [];
  }
  
  toArray() {
    return this.items;
  }
  
  toString() {
    return this.items.toString();
  }
}
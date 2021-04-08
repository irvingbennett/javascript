//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  list = []
  push(e) {
    this.list.push(e)
  }

  pop() {
    return this.list.pop()
  }

  shift() {
    return this.list.shift()
  }

  unshift(e) {
    this.list.unshift(e)
  }

  delete(n) {
    for(let x = 0; x < this.list.length; x++) {
      if (this.list[x] == n) {
        this.list.splice(x, 1)
      }
    }
  }

  count() {
    return this.list.length
  }
}

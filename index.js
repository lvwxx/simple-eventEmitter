class EventEmitter {
  constructor() {
    this.eventObj = {}
  }
  isValidFn(fn) {
    if (typeof fn === 'function') {
      return true
    }
    return false
  }
  indexOf(eventName, fn) {
    const arr = this.eventObj[eventName]
    let index = -1
    if (!Array.isArray(arr)) {
      return index
    }
    for (let i = 0; i < arr.length; i++) {
      if (fn === arr[i]) {
        index = i
        break
      }
    }
    return index
  }
  on(eventName, fn) {
    if (!eventName || !fn) return
    if (!this.isValidFn(fn)) {
      throw new TypeError('listener must be a function')
    }
    if (this.indexOf(eventName, fn) === -1) {
      this.eventObj[eventName] = this.eventObj[eventName] ? this.eventObj[eventName].push(fn) : [fn] 
    }
    return this
  }
  emit(eventName, ...args) {
    const arr = this.eventObj[eventName]
    if(!arr) return
    for (let i = 0; i < arr.length; i++) {
      arr[i].apply(this, args) 
    }
    return this
  }
  off(eventName,fn) {
    const arr = this.eventObj[eventName]
    if (!arr) return
    let index
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === fn) {
        index = i 
        break
      }
    }
    if (typeof index !== 'undefined') {
      arr.splice(index, 1, null)
    }
    return this
  }
  offAll(eventName) {
    const arr = this.eventObj[eventName]
    if (!arr) return
    this.eventObj[eventName] = []
  }
}
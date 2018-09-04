module.exports = {
  init: () => [],
  addCounter: (counters, element) => counters.concat({element, count: 0}),
  removeCounter: (counters, element) => counters.filter(counter => counter.element !== element),
  incrementCounter: (counters, element) => counters.map(counter => counter.element === element ?
    Object.assign({}, counter, {count : counter.count + 1}) :
    counter),
  decrementCounter: (counters, element) => counters.map(counter => counter.element === element ?
    Object.assign({}, counter, {count : counter.count - 1}) :
    counter)
}

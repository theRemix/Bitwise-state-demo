/*
 * Usage:
 *
 * const initialState = {
 *   flag1: false,
 *   flag2: false,
 * }
 *
 * const store = createStore(initialState)
 *
 * store.flag1 = true
 *
 * store.bits // => 0b10 => 2
 *
 */
const createStore = (_initialState = {}) => {
  const stateToBits = state => Object.entries(state)
    .reduce((bin, [key, value]) =>
      !!value ?
        bin << 1 | 1 :
        bin << 1
    , 0)

  const handler = {
    get: (target, prop, receiver) => {
      switch(prop){
        case 'bits': return stateToBits(target)
        default: return target[prop]
      }
    }
  }

  return new Proxy(JSON.parse(JSON.stringify(_initialState)), handler)
}

module.exports = { createStore }

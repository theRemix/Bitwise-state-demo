/*
 * bitwise state example
 *
 * node .
 *
 * h, j, k, l, s, d  + <return>
 * # => updates state
 *
 * ? then press <return>
 * # => displays the size of state as json vs bit flags
 *
 */

const { createStore } = require('./store')

const initialState = {
  STERN_THRUSTERS: false,
  BOW_THRUSTERS: false,
  PORT_THRUSTERS: false,
  STARBOARD_THRUSTERS: false,
  ION_CANNON: false,
  PIRATE_FLAG: false,
}

const state = createStore(initialState)

const printSize = () => {
  console.log('\nPrinting current buffer sizes')
  console.log('JSON.stringify(state).length:', JSON.stringify(state).length)
  console.log('state.bits.toString(16).length:', state.bits.toString(16).length)
  console.log('size difference:', state.bits.toString(16).length / JSON.stringify(state).length)
  process.stdout.write('\nh, j, k, l, s, d, ?, then press <return>:')
}

const printPrompt = () => {
  console.log('object:', state, '\nstate.bits base2: [', state.bits.toString(2), '] => base10: [', state.bits, '] => base16: [', state.bits.toString(16), ']\n')
  process.stdout.write('h, j, k, l, s, d, ?, then press <return>:')
}


process.stdin.on('data', key => {
  const c = key.toString().toLowerCase()
  switch(true){
    case c.startsWith('h'):
      console.log('state.PORT_THRUSTERS = !state.PORT_THRUSTERS')
      state.PORT_THRUSTERS = !state.PORT_THRUSTERS
      break
    case c.startsWith('j'):
      console.log('state.STERN_THRUSTERS = !state.STERN_THRUSTERS')
      state.STERN_THRUSTERS = !state.STERN_THRUSTERS
      break
    case c.startsWith('k'):
      console.log('state.BOW_THRUSTERS = !state.BOW_THRUSTERS')
      state.BOW_THRUSTERS = !state.BOW_THRUSTERS
      break
    case c.startsWith('l'):
      console.log('state.STARBOARD_THRUSTERS = !state.STARBOARD_THRUSTERS')
      state.STARBOARD_THRUSTERS = !state.STARBOARD_THRUSTERS
      break
    case c.startsWith('s'):
      console.log('state.ION_CANNON = !state.ION_CANNON')
      state.ION_CANNON = !state.ION_CANNON
      break
    case c.startsWith('d'):
      console.log('state.PIRATE_FLAG = !state.PIRATE_FLAG')
      state.PIRATE_FLAG = !state.PIRATE_FLAG
      break
    case c.startsWith('?'):
      return printSize()
  }

  printPrompt()
})


printPrompt()

## Small bitwise state interactive demo

If you need to store multiple boolean flags and will share this state over the network or persist to disk, then consider storing them as bits.

See [./store.js](./store.js)

### Notes

Typescript can probably abstract this out better than vanilla js.

If you really cared about network performance, you should be using [grpc](https://grpc.io/)


## Quick start

```sh
node .
```

## Example

```sh
node .

object: {
  STERN_THRUSTERS: false,
  BOW_THRUSTERS: false,
  PORT_THRUSTERS: false,
  STARBOARD_THRUSTERS: false,
  ION_CANNON: false,
  PIRATE_FLAG: false
}
state.bits base2: [ 0 ] => base10: [ 0 ] => base16: [ 0 ]

h, j, k, l, s, d, ?, then press <return>:h  # <//====== pressed h <return>
state.PORT_THRUSTERS = !state.PORT_THRUSTERS
object: {
  STERN_THRUSTERS: false,
  BOW_THRUSTERS: false,
  PORT_THRUSTERS: true, # <//---- flipped
  STARBOARD_THRUSTERS: false,
  ION_CANNON: false,
  PIRATE_FLAG: false
}
state.bits base2: [ 1000 ] => base10: [ 8 ] => base16: [ 8 ]

h, j, k, l, s, d, ?, then press <return>:j  # <//====== pressed j <return>
state.STERN_THRUSTERS = !state.STERN_THRUSTERS
object: {
  STERN_THRUSTERS: true, # <//---- flipped
  BOW_THRUSTERS: false,
  PORT_THRUSTERS: true,
  STARBOARD_THRUSTERS: false,
  ION_CANNON: false,
  PIRATE_FLAG: false
}
state.bits base2: [ 101000 ] => base10: [ 40 ] => base16: [ 28 ]

h, j, k, l, s, d, ?, then press <return>:?  # <//====== pressed ? <return>

Printing current buffer sizes
JSON.stringify(state).length: 135
state.bits.toString(16).length: 2
size difference: 0.014814814814814815

```

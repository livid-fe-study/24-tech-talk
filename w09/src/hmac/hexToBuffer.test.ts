import { hexToBuffer } from "./hexToBuffer";

describe('hexToBuffer', () => {
  it('should convert a hex string to a buffer', () => {
    const hex = 'ef501f7d15b0f518fc1a705bd8cdaa2d44f92c59';
    
    expect(hexToBuffer(hex)).toEqual(new Uint8Array([
      239,  80,  31, 125,  21, 176,
      245,  24, 252,  26, 112,  91,
      216, 205, 170,  45,  68, 249,
      44,  89
    ]));
  })
})
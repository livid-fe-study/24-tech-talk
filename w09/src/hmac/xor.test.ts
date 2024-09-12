import { xor } from "./xor";

describe('xor', () => {
  it('should XOR two buffers', () => {
    const bufferA = new Uint8Array([0x61, 0x12]); // 0110 0001 0001 0010
    const bufferB = new Uint8Array([0x62]);       // 0110 0010 0000 0000
    
    const result = xor(bufferA, bufferB);
    
    expect(result).toEqual(new Uint8Array([0x03, 0x12])); // 0000 0011 0001 0010
  })
})
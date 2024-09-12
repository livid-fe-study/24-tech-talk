import { appendBuffer } from "./appendBuffer";

describe('appendBuffer', () => {
  it('should append two buffers', () => {
    const bufferA = new Uint8Array([0x61]); // 0110 0001
    const bufferB = new Uint8Array([0x62]); // 0110 0010
    
    const result = appendBuffer(bufferA, bufferB);
    
    expect(result).toEqual(new Uint8Array([0x61, 0x62])); // 0110 0001 0110 0010
  })
})
import { hash } from "./hash"

describe('hash', () => {
  it('should hash the data', async () => {
    const buffer = new Uint8Array([0x61]) //[0x61] is 'a'

    const result = await hash(buffer)
    
    expect(result).toBe("86f7e437faa5a7fce15d1ddcb9eaeaea377667b8")
  })
})
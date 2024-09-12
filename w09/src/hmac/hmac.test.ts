import { hmac } from "./hmac"

describe('hmac', () => {
  it('should return the HMAC of the message', async () => {
    const key = new TextEncoder().encode('key')
    const message = new TextEncoder().encode('data')

    const result = await hmac({ key, message })
    expect(result).toBe('104152c5bfdca07bc633eebd46199f0255c9f49d')
  })
})
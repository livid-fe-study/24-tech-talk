import * as base32 from 'hi-base32';

const CHARACTER_SET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';

export function makeSecretKey() {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);

  let output = '';
  for (let i = 0, l = bytes.length; i < l; i++) {
    output += CHARACTER_SET[Math.floor((bytes[i] / 255.0) * (CHARACTER_SET.length - 1))];
  }

  return base32.encode(output).replace(/=/g, '');
}
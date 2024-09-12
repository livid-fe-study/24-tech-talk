import { appendBuffer } from "./appendBuffer";
import { hash } from "./hash";
import { hexToBuffer } from "./hexToBuffer";
import { xor } from "./xor";

const BYTE_LENGTH_OF_BLOCKS = 64;
const BYTE_LENGTH_OF_HASH = 20;

const INNER_PADDING_BYTE = 0x36;
const OUTER_PADDING_BYTE = 0x5c;

const INNER_PADDING = new Uint8Array(BYTE_LENGTH_OF_BLOCKS).map(() => INNER_PADDING_BYTE);
const OUTER_PADDING = new Uint8Array(BYTE_LENGTH_OF_BLOCKS).map(() => OUTER_PADDING_BYTE);

export async function hmac({ key, message }: { key: Uint8Array; message: Uint8Array }) {
  if (key.length > BYTE_LENGTH_OF_HASH) {
    throw Error('key is too long');
  }

  const innerPaddedKey = xor(key, INNER_PADDING);
  const outerPaddedKey = xor(key, OUTER_PADDING);

  const innerHash = await hash(appendBuffer(innerPaddedKey, message));
  const outerHash = await hash(appendBuffer(outerPaddedKey, hexToBuffer(innerHash)));

  return outerHash;
}
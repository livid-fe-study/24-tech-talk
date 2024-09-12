import { appendBuffer } from "./appendBuffer";
import { hash } from "./hash";
import { hexToBuffer } from "./hexToBuffer";
import { xor } from "./xor";

export async function hmac({ key, message }: { key: Uint8Array; message: Uint8Array }) {
}
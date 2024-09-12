/**
 * XOR two buffers
 */
export function xor(bufferA: ArrayBuffer, bufferB: ArrayBuffer) {
    const a = new Uint8Array(bufferA);
    const b = new Uint8Array(bufferB);
    const maxLength = Math.max(a.length, b.length);

    return new Uint8Array(maxLength).map((_, i) => a[i] ^ b[i]);
}
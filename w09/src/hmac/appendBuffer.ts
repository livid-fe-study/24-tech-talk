export function appendBuffer(bufferA: ArrayBuffer, bufferB: ArrayBuffer) {
  const a = new Uint8Array(bufferA);
  const b = new Uint8Array(bufferB);
  const result = new Uint8Array(a.length + b.length);
  result.set(a, 0);
  result.set(b, a.length);
  return result;
}
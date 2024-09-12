/** 
 * 바이너리 데이터를 전달받아서 sha-1으로 해시해서 반환합니다.
 * 반환값은 16진수입니다.
 */
export async function hash(data: ArrayBuffer) {
  const arrayBuffer = await crypto.subtle.digest({ name: "sha-1" }, data)

  return [...new Uint8Array(arrayBuffer)].map(b => b.toString(16).padStart(2, '0')).join('')
}
import * as base32 from 'hi-base32';
import { hmac } from "../hmac/hmac";
import { getTimeStep } from "./getTimeStep";

export async function makeOTP(key: string) {
  const keyBuffer = new TextEncoder().encode(base32.decode(key));
  const timeBuffer = new Uint8Array(8);
  
  let timeStep = getTimeStep();

  for (let i = 0; i < 8; i++) {
    timeBuffer[7 - i] = timeStep & 0xff;
    timeStep = timeStep >> 8;
  }

  const mac = await hmac({ key: keyBuffer, message: timeBuffer });

  const offset = parseInt(mac.charAt(mac.length - 1), 16); // mac의 마지막 4비트를 offset으로 사용

  let dynamicBinaryCode = parseInt(mac.slice(offset * 2, offset * 2 + 8), 16); // offset부터 4바이트를 DBC로 사용
  dynamicBinaryCode &= 0x7fffffff; // 부호비트를 제거하기 위해 31번째 비트까지만 사용

  return (dynamicBinaryCode % 1_000_000).toString(10).padStart(6, '0'); // 6자리까지 자르고, 앞이 비어있으면 0으로 패딩
}
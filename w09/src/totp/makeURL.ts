export function makeURL({ secret, issuer, name }: { secret: string; issuer: string; name: string }) {
  return `otpauth://totp/${issuer}:${name}?secret=${secret}&issuer=${issuer}`;
}
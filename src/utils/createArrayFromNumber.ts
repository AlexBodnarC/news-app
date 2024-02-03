export function createArrayFromNumber(number: number): number[] {
  return Array.from({ length: number }, (_, index) => index)
}

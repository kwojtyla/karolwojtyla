export function parseStack(stack: string) {
  return stack
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

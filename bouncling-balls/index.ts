export const bouncingBall = (
  h: number,
  bounce: number,
  window: number
): number => {
  if (h < 0 || bounce < 0 || bounce > 1 || window >= h) {
    return -1;
  }
  let counter = 1;
  let i = h * bounce;

  while (i > window) {
    counter += 2;
    i = i * bounce;
  }

  return counter;
};

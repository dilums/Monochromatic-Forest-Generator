export const { random, floor } = Math;

export const range = (n: number) =>
  Array(n)
    .fill(0)
    .map((i, j) => i + j);

export const rand = (max: number, min = 0) => min + random() * (max - min);
export const randInt = (max: number, min = 0) =>
  floor(min + random() * (max - min));
export const randChoise = (arr: any[]) => arr[randInt(arr.length)];
export const cut = (d: number, n: number) => range(n).map((i) => (d / n) * i);

export const add = (...values: Array<number>) => {
  return values.reduce((result, next) => result + next, 0);
};

export const complexFunction = (value: number) => {
  if (value > 0) {
    if (value > 1) {
      if (value > 2) {
        return value;
      }
    }
  }

  return null;
};

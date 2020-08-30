export const compose = (...wrappers) => component =>
  wrappers.reduceRight((acc, curr) => curr(acc), component);

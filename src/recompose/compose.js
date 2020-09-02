export const compose = (...hocs) => component =>
  hocs.reduceRight((acc, curr) => curr(acc), component);

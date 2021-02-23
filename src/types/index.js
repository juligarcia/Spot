import { string, objectOf, oneOfType, arrayOf, number } from 'prop-types';

export const styleType = oneOfType([
  arrayOf(objectOf(oneOfType([string, number]))),
  objectOf(oneOfType([string, number])),
]);

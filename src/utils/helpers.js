export const capitalize = (str = '') =>
  typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)

export const trim = (str, maxLength = 16) =>
  str.length > maxLength
    ? `${str.slice(0, maxLength)}...`
    : str
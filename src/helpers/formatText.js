export const capitalizeFirstLetterAndRemoveHyphen = (str) => {
  return str?.replace(/(-|^)([^-]?)/g, (_, prep, letter) => (prep && ' ') + letter.toUpperCase());
}

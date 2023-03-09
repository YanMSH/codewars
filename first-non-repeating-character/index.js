function firstNonRepeatingLetter(string) {
  if (string.length <= 1) {
    return string;
  }
  for (let i = 1; i < string.length; i++) {
    const stringBeforeCharacter = string.slice(0, i);
    const stringBeforeIncludesChar =
      stringBeforeCharacter.includes(string[i].toLowerCase()) ||
      stringBeforeCharacter.includes(string[i].toUpperCase());
    const stringAfterCharacter = string.slice(i + 1, string.length);
    const stringAfterIncludesChar =
      stringAfterCharacter.includes(string[i].toLowerCase()) ||
      stringAfterCharacter.includes(string[i].toUpperCase());
    if (!stringBeforeIncludesChar && !stringAfterIncludesChar) {
      return string[i];
    }
  }
  return '';
}

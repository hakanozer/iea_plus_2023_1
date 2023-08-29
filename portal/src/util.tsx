export const firstUpper = (word:string) => {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    var capitalizedWord = firstLetterCap + remainingLetters
    capitalizedWord = capitalizedWord.replaceAll("-", " ");
    return capitalizedWord;
  }
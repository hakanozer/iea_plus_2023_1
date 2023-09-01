import { UserModel } from "./models/UserModel"

export const firstUpper = (word:string) => {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    var capitalizedWord = firstLetterCap + remainingLetters
    capitalizedWord = capitalizedWord.replaceAll("-", " ")
    return capitalizedWord;
  }

  export const getCustomer = () => {
    const st = localStorage.getItem('customer')
    if ( st === null ) {
        return null
    }else {
      try {
        // customer not null
        const user: UserModel = JSON.parse(st)
        return user
      } catch (error) {
        localStorage.removeItem('customer')
      }
    }
    return null
  }
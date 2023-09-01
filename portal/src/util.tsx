import CryptoJS from 'crypto-js'
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
        const plainText = decrypt(st)
        const user: UserModel = JSON.parse(plainText)
        return user
      } catch (error) {
        localStorage.removeItem('customer')
      }
    }
    return null
  }


  export const encrypt = (plainText:string) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, 'key123')
    return cipherText.toString()
  }


  export const decrypt = (cipherText:string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, 'key123')
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
  }

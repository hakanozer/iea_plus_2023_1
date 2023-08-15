import CryptoJS from 'crypto-js'

export const encrypt = (plainText:string) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, 'key123')
    return cipherText.toString()
}

export const decrypt = (cipherText:string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, 'key123')
    const plainText = bytes.toString(CryptoJS.enc.Utf8);
    return plainText
}
import CryptoJS from 'crypto-js/crypto-js'

export function encryption (data) {
  let strs = []
  for (let i in data) {
    strs.push(i + '=' + data[i])
  }
  strs.sort()
  strs = strs.join('&')
  let endData = strs + '&sign=' + CryptoJS.MD5(strs + 'KEY')
    .toString() // MD5加密
  let key = CryptoJS.enc.Utf8.parse('abcdefgabcdefg12')
  let iv = CryptoJS.enc.Utf8.parse('CB3EC842D7C69578')
  let encryptResult = CryptoJS.AES.encrypt(endData, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encodeURIComponent(CryptoJS.enc.Base64.stringify(encryptResult.ciphertext))
}

// export function decryption(data) {
//   let key = CryptoJS.enc.Utf8.parse("0880076B18D7EE81");  // 加密秘钥
//   let iv = CryptoJS.enc.Utf8.parse("CB3EC842D7C69578");   //  矢量
//   let baseResult = CryptoJS.enc.Base64.parse(data);   // Base64解密
//   let ciphertext = CryptoJS.enc.Base64.stringify(baseResult);     // Base64解密
//   let decryptResult = CryptoJS.AES.decrypt(ciphertext, key, {    //  AES解密
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   });
//   let resData = decryptResult.toString(CryptoJS.enc.Utf8).toString();
//
//   return JSON.parse(resData);
//
// }
//
// export function decryption(data) {
//   let key = CryptoJS.enc.Utf8.parse("0880076B18D7EE81");  // 加密秘钥
//   let iv = CryptoJS.enc.Utf8.parse("CB3EC842D7C69578");   //  矢量
//   let baseResult = CryptoJS.enc.Base64.parse(data);   // Base64解密
//   let ciphertext = CryptoJS.enc.Base64.stringify(baseResult);     // Base64解密
//   let decryptResult = CryptoJS.AES.decrypt(ciphertext, key, {    //  AES解密
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   });
//   return CryptoJS.enc.Utf8.stringify(decryptResult)
//
// }

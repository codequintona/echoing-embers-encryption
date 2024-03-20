const CryptoJS = require('crypto-js');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

class EchoingEmbersEncryption {
  constructor(secretKey) {
    if (!secretKey) {
      throw new Error('Secret key is required for encryption and decryption.');
    }
    this.secretKey = secretKey;
  }

  encrypt(text) {
    if (_.isEmpty(text)) {
      throw new Error('Text to encrypt cannot be empty.');
    }
    return CryptoJS.AES.encrypt(text, this.secretKey).toString();
  }

  decrypt(ciphertext) {
    if (_.isEmpty(ciphertext)) {
      throw new Error('Ciphertext to decrypt cannot be empty.');
    }
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  generateKey() {
    return uuidv4();
  }
}

module.exports = EchoingEmbersEncryption;

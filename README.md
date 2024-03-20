# Echoing Embers Encryption

A simple, yet powerful library for encrypting and decrypting strings in JavaScript. Utilizes `crypto-js`, `lodash`, and `uuid` for a variety of cryptographic operations.

## Installation

Run the following command to install:

```bash
npm install echoing-embers-encryption
```

## Usage

To use the library, first import it and then create an instance with your secret key:

```javascript
const EchoingEmbersEncryption = require('echoing-embers-encryption');
const encryption = new EchoingEmbersEncryption('your_secret_key_here');

// To encrypt a message
const encryptedMessage = encryption.encrypt('Hello, world!');
console.log(encryptedMessage);

// To decrypt a message
const decryptedMessage = encryption.decrypt(encryptedMessage);
console.log(decryptedMessage);

// Generate a new secret key
const newSecretKey = encryption.generateKey();
console.log(newSecretKey);
```

## Dependencies

- `crypto-js`: Used for the core encryption and decryption.
- `lodash`: Utilized for utility functions.
- `uuid`: Generates a unique secret key.

## Author

Mikhail Petrov

## License

This project is licensed under the MIT License.

# Securityand Crypto

```ts
const securityandCryptoController = new SecurityandCryptoController(client);
```

## Class Name

`SecurityandCryptoController`

## Methods

* [Generate RSA Keypair](../../doc/controllers/securityand-crypto.md#generate-rsa-keypair)
* [AE Ssymmetric Encryption](../../doc/controllers/securityand-crypto.md#ae-ssymmetric-encryption)
* [AES Symmetric Decryption](../../doc/controllers/securityand-crypto.md#aes-symmetric-decryption)
* [RSA Encryption](../../doc/controllers/securityand-crypto.md#rsa-encryption)
* [RSA Decryption](../../doc/controllers/securityand-crypto.md#rsa-decryption)
* [Create Context](../../doc/controllers/securityand-crypto.md#create-context)
* [Fetch Context](../../doc/controllers/securityand-crypto.md#fetch-context)
* [Hash SHA256](../../doc/controllers/securityand-crypto.md#hash-sha256)
* [Hash SHA512](../../doc/controllers/securityand-crypto.md#hash-sha512)


# Generate RSA Keypair

**Generate RSA Keypair**

This endpoint generate a new RSA keypair for RSA asymmetric encryption. The public and private keys are returned in **PEM** format.

```ts
async generateRSAKeypair(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example12>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example12`](../../doc/models/example-12.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await securityAndCryptoController.generateRSAKeypair();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "privateKeyPem": "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAu9pfnJxRrkZlf07/lbC1vVRgvOt+uhIRprLM6qsnDJw1v7Jk\nifTg1sS9VI+H/FEAfG27ikoQG+C2aURboNImUoD5qcG/895nh+0Iq0094829pRaS\nqMQDPz6+KNaN1XLUlJM/3R+hqsqI/BbTDZbPqyhliHjDQLp07HlMjz0G3m2GJeES\nJHDrXh0uTzN3S+9MOnpDQDFjGvtra/XBYmqDI6AaSH/Oasq92cHNU9KRsEU/O2Ve\nrucdW0kUyyJGJxz9IiU6g3njTKlLEf+Nxa8FiHU9oRbFOyVyq/cE/DSAwHFexldX\nOBSBpiFN6W6cnTVhmDEsL9CRUbzN+OUxeyHNuwIDAQABAoIBACFuMFu/me2oy4FH\nfsaV5xHlhT25rxjQBGIlKcCNauqclhgiWDAQ6z5tTsBQtsOZaru6D4kBuzIq4GuF\nZcUOARHnsAac21s79jLDZSqPGXeD8r8BcGImV+mWceL0o9Mbl2dFeTUR3wR0/MHY\nEgE2GIj+LGuICj9nr00yHQTUuHc2unutoGGdGRcW6PAC9ZoylMu8RWjXTZaPFnJy\n0gaNHMLg7kjuWZpRpUd4QEZxEjg2mqlTspi4facPIuLGSZttOOp7rdxrxKsXPlMP\nj3sRJE+eofOWO3DILKkveGI/MIX7FbPNrvFA4UdfWaBnRAxnKHt9ADd2H8rLN5bL\nZ/9b6/ECgYEA3uE2i+gDQIVnpgfr4ommKqKsHX8N1zXgYM5eOoouJGScYFgMq5jy\nmWIsKp8OO0yRRhJXS7q6HS7uWOJX1ElqnXpWaKSpvGeOE8BRM5AC9u+I+Zt3avQm\nR5yZoYEmUOSqQsbxFAxSepqy69Fn5kyiR0bC61V8y7xou2YurHSdzAkCgYEA18Ss\nt9C13dqH648UW9yZcg3IoolOE18ygXCWyr/CQbqQxZj87MPE4R9sMzVGcOukSC5W\nRLoHahzXMLpXYDPlr0YTE3Q7tCqqwiUEDeYGU/xbRmjgD1cuosQeP6SX/hg8anLT\nI4VRGzX/+daCMQsIg7qD99Z6ge+biFVR0ZdixKMCgYAyFlqzxkg0z8YjQdR47IYz\nPqt/VXY+zxTFrJrwfO0xsIqT/DWcupqKbc2PJn+ERAjBvo1vr170AAAAaZ1jT7xt\n93hDu/2JIZyEQ8v70nlYFSyrK40CtCuGHGNKMEP0Ge9JYnv7DWnbs7hR1pWK4930\nNqrHSEbrYkQHGUeT6gEsQQKBgQCR5hiQVt2TPYCpBN/UWe+cUru3RDb6HGYPZq1g\nPZhCT8AzDQcBpkMLou7MFZsjIgO9FzAYWt5Gn2fXODl7ALyv7ydZAUCZzDwY+WSr\nbT4cLkkd7C6N0Prk7s4xZL+t/n9jz2771tsIFlSXgLgaJ4bDZCx2Op4uHHJEFsUz\nfzU3FwKBgAhEMCBK+vLbWdkU2rjJFoZBIh8O39iBP1fiyE3Zi9QC/Daq5QzBsBhE\nvVMHE1rtiuIxxnyxtAuESTqoDqaidI8931Tl2WBVAIDHe2Hk7Lrhi7s3BFA3Lacc\nlMDoETj1p6ma7PJ98yiI3QH2v99FSEm+GYOQH7MlgcrsPUBqjF3j\n-----END RSA PRIVATE KEY-----\n",
  "publicKeyPem": "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEAu9pfnJxRrkZlf07/lbC1vVRgvOt+uhIRprLM6qsnDJw1v7JkifTg\n1sS9VI+H/FEAfG27ikoQG+C2aURboNImUoD5qcG/895nh+0Iq0094829pRaSqMQD\nPz6+KNaN1XLUlJM/3R+hqsqI/BbTDZbPqyhliHjDQLp07HlMjz0G3m2GJeESJHDr\nXh0uTzN3S+9MOnpDQDFjGvtra/XBYmqDI6AaSH/Oasq92cHNU9KRsEU/O2Verucd\nW0kUyyJGJxz9IiU6g3njTKlLEf+Nxa8FiHU9oRbFOyVyq/cE/DSAwHFexldXOBSB\npiFN6W6cnTVhmDEsL9CRUbzN+OUxeyHNuwIDAQAB\n-----END RSA PUBLIC KEY-----\n"
}
```


# AE Ssymmetric Encryption

**AES Symmetric Encryption**

Encrypt a message using AES-256 in CBC mode encryption. Pass the **message** and **key** and you the **encrypted** text and **initialization vector (iv)**.

```ts
async aESsymmetricEncryption(
  body: AESsymmetricEncryptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example13>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AESsymmetricEncryptionRequest`](../../doc/models/ae-ssymmetric-encryption-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example13`](../../doc/models/example-13.md)

## Example Usage

```ts
const contentType = null;
const body: AESsymmetricEncryptionRequest = {
  message: 'I-am-the-message',
  key: 'i-am-the-secret-key',
};

try {
  const { result, ...httpResponse } = await securityAndCryptoController.aESsymmetricEncryption(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "encrypted": "dad58f76f56c86d8a686c7b3063d994f8089293b5ad552ed0c2e0b205df71580",
  "iv": "808849d507bdd2075756656e618c9aa7"
}
```


# AES Symmetric Decryption

**AES Symmetric Decryption**

Decrypt an encrypted message using AES-256 in CBC mode encryption. Pass the ciphertext, **encrypted**, the initialization vector, **iv** and **key** to get the original message.

```ts
async aESSymmetricDecryption(
  body: AESSymmetricDecryptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example14>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AESSymmetricDecryptionRequest`](../../doc/models/aes-symmetric-decryption-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example14`](../../doc/models/example-14.md)

## Example Usage

```ts
const contentType = null;
const body: AESSymmetricDecryptionRequest = {
  encrypted: 'dad58f76f56c86d8a686c7b3063d994f8089293b5ad552ed0c2e0b205df71580',
  iv: '808849d507bdd2075756656e618c9aa7',
  key: 'i-am-the-secret-key',
};

try {
  const { result, ...httpResponse } = await securityAndCryptoController.aESSymmetricDecryption(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "decrypted": "I-am-the-message"
}
```


# RSA Encryption

**Encrypt a message using a RSA public key. The public key must be in PEM format.**

\*   Padding of PKCS1
\*   Output of encryption is in hex format.
\*   Input is expected to be a UTF-8 string

```ts
async rSAEncryption(
  body: RSAEncryptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example15>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RSAEncryptionRequest`](../../doc/models/rsa-encryption-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example15`](../../doc/models/example-15.md)

## Example Usage

```ts
const contentType = null;
const body: RSAEncryptionRequest = {
  message: '436554f62f4862d15ffa977b28df9d4109c22985f622d15b3e217b7e328b6f8a',
  publicKeyPem: '-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEAwkDXBZ5SdFJfJJJIXvNu1FQY/wiw4n4X6JOS2Z5xqsxRmLaQfRwh\n71GuLJttTvqX0D6tjami6HUI4ULvgta9JtwW1BqzGgpup2WGtlfeLxD55jPzPZrX\nxn7i8E2640ucVCR38skid79Jhe38RZQYYnGsn4RfYyy2T5OI79gJt3Bsi3ibAUhj\nP3o5E25SpRReUMNcvaq+5LLDPC+mY5Oyt/izX3+rEFt4UzItT92yHWAmL3rbnQWP\nG7L7D1QxpfmfnbQQY8iSBu+1UqW0a8R1hFAKYMfQSZ1ahdVyqghc0n/kt7tv+8Hd\nw8gVbSk0f/OrhjqQVkmIjcJacnAUendsawIDAQAB\n-----END RSA PUBLIC KEY-----\n',
};

try {
  const { result, ...httpResponse } = await securityAndCryptoController.rSAEncryption(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "ciphertext": "238fbe5f8a48129d15e9486f386f6ab79f23e5c266dc71418df79ccde3e30580ec902702aea3b85c8bd66804b886d9469e4d099a81bed021813fb345f8ce8f6ffe60c0b257c6207c09dde6803fcf7b1b942d0d5f170d806af51a16cfe36acc7d80773995ba487781b7f161d58735ba807eca53c0e03992dbaea17ae9108189ee35fd8f1e61050a8c95378c068351ed2af968027f94e366cd0d343c2f999d30e023e2f8496443cc85edce51a1256dd221291f1ce3d2b74bfc2606f81fcc7c305eabe27141f77eb889bc4885045d7c87f9533ba24f83594e3765dd43fabad487d22dcf82f953f07cfae2a4e3e2df75c2eabc123312cc911112134c122f42e800b6"
}
```


# RSA Decryption

**Decrypt a ciphertext using a RSA private key. The private key must be in PEM format.**

\*   Padding of PKCS1
\*   Output of decryption is in UTF-8 string.
\*   Input is expected to be in hex format.

```ts
async rSADecryption(
  body: RSADecryptionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example16>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RSADecryptionRequest`](../../doc/models/rsa-decryption-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example16`](../../doc/models/example-16.md)

## Example Usage

```ts
const contentType = null;
const body: RSADecryptionRequest = {
  ciphertext: '7e93c7ae10e84e234e2b1643ab9f9f428bcc544161280129dca4c19d7c474621f73bb78c67456d42342a4974387b8a9d6cdb5b3ef8ec4f23fc562074181f95cb077e540fb213fb33867198a9cecb6a7e2486310b9681b411de1840397ac251b7b9763a7beb9378ec8badf817af71fd00a3c74a7b69de4bb79e5188de780293d221014a2cf795772dfd3a413f7aa5c377b12f60f0c745a2b2c715b821366be4daed8bea5da7112f0437f1f1088007eba31c7058d8f1736b73cd3bfb14967bdb62e2307ee06b20f4ba5f2c60b7b14bddcf0164114d832e126a5fd09b3d950219d1400cf3edc177decb3972bca11b54a72b4eb46b908c238aa43005e6bd51c25ec0',
  privateKeyPem: '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAy19jneBzBki+z5oidAPwxb2wDjlnB4i3KNL7HlKSQTHnT8UX\ntrd/PX3bwDcwQI2nSlsLNOEPuNrFCnqf6ZXMcPmLfk1t0/eCZ7wayAlJpR/hpNRL\n+YXvi57F3vXpPr9dVNUlDVuSNc5vIdsw8trDYfetEm/d39FGnEm0dkkL96p0jBnu\nuNAifnAyp73QCaZ6G5U1EDqyeIA6Mjcjq3nL50+aYWA4bgkfmyZHJgLy0s8Zkj19\nJCJXU3GlwDv9BKvR0oxPHj5akaVJZq8kKCo1Qi37mrhIx6wNez7CKrBdNwLcQgXD\nMyMAyuomsm6atPVPvJbU532zA3aAafhBmxfGOQIDAQABAoIBAAQVckalTyn9I/e/\nPJnfymHuIS7n8C2yjRsAwZImTlGI0wBDEOrWXHO7p0IA2bMyJP3VPjBdpJctrW88\nbyGdpHFQUYDDxUTQX4n9uPvzU8tBDKLmsG/eRKUlFwwXHAvqg9FERm4yPIlgD9M6\nN41o3yuEcbFBFc98wFI7GKiXZuoeNPb7LiougDaiQWjF+9Ovk1rDIOfDvrjGkSoa\ns4KmDCPAk2noLc7naXYgPmlGO+Oi3O2CdjhUqKuqLCJcnfaU4rMPaDQHqy1eNPW/\n7kgVHBhc5yJUeWysDeboqURxywKVB0CG9T4SLMTQcAYmYYbTB0FFjs6EaRw2Otsb\nLk0/K0ECgYEA5TJzuMbkcoFY0qmbw3fHe9THwq5BkAPvD9SPpQRVBkbFMi/RlT2M\nBVRigvKlx9dP2ELYL4LIEp3MFjD+7+7EVcIB/BnFA7pjdLpBBPbt+0M0MtemWD0I\nmwZg8n8nEsPjBGUrWdIosYjW5jHJlpK3TSAXPlgfSa17xaupeGGY3j0CgYEA4yfS\nVyOXL2D86SFEK16htXUBpSzvUENLiSpTJOgzyrlNGR72LqaGXnOQTmjtq8kpjX4z\njnLiPmvzaVP0n4b0dqDcK3FvYMEzXy/CJviNHbKGuJIf/lMaxrHWxh4aIFvGAMzc\nZtgkjbQ5N3CdTEOX3ftFNtZUXlI3mpSr4tG4Y60CgYEAxGdXgx/s47KzytJNCFO8\nPgE4rTtmM2MrmQUtktsDgT1j/n27u4fiVS7avBvytC1t3oRpfU005b8TBHE4BaM1\n28dErCPpECjI0V5KGVcA2C/eqzLg+PxUQ4RTz3nmoc362+lWHMJa3MfGX7yKYt2W\n9iBpyqL5LMndJqbTsrTvqoECgYEAv9YaklLRVEbxcCUTABl8MdWt3QP023Dpst5W\nt12Ol88kKGn4eG9UHSI1pbKBvck2WXNSMSQeo57hQ3uOpMcBX8n8BohXCnw/WUzp\nB6Zy7ridg/SMJmmivFjmTAyR/e/jaTuZixVQ0Yd5prNpdEXFVMfmrSgWuk1u/hI+\nk2CP+0UCgYA0p949WJ70cqgKeUnrZJQx2a8nX2IFVJ6YeVYhGgE0H4WqBDKb4OZw\n7D0f5wtzUyuSkQ56IginiaH1MlFhpsgphy6C5N2H6tw9kPAMt2abnWMjcrJ+G6eu\nQyaRGXmBz9pIRB9O5oV5/6cUG7B7+lRv3wsxTWZxbpQTsSDdC22Cag==\n-----END RSA PRIVATE KEY-----\n',
};

try {
  const { result, ...httpResponse } = await securityAndCryptoController.rSADecryption(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "message": "I am a boy that loves to engage in all kind sof adjksbhv dugus gdugd usguis bugd ugud udgd ugdud ugud sd"
}
```


# Create Context

**RSA Context**

This endpoint instructs the server to create a new RSA encryption/decryption context for future encryption/decryption operations between the client and server. The client supplies its own **publicKey**, the server then generates and saves a new context, and returns the context **publicKey** and **contextId** to the client. The client can then encrypt messages for the server simply by using the returned **publicKey** and attaching the **contextId** into a header field so the server can determine which context to use to decrypt the message.

You can create as many contexts as you want and switch between them for encryption/decryption, however, A single context per instance of the client is recommended.

When you change your context, all login tokens issued with the previous context become invalid for that context, as such, you must request for a new access token.

**How to state the context used**

Stating the context to use in a request cycle requires that the ID of the context be attached to the request. It must be attached in a request header, with a key of **beepo-core-context-id** and the value is the ID.

**An error 400** with a reason is returned if the server cannot validate the context. It could be due to a context that does not exist or an invalidated context.

```ts
async createContext(
  body: CreateContextRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example17>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateContextRequest`](../../doc/models/create-context-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example17`](../../doc/models/example-17.md)

## Example Usage

```ts
const contentType = null;
const body: CreateContextRequest = {
  publicKey: '-----BEGIN RSA PUBLIC KEY-----\nMIICCgKCAgEAscVa9rhwN9YpRZMQphE5zSHHSlhh/aMEXdjc6n/duSJszvExbOjL\nLBPEKzmShB3MNRwTfLIEry5oWmVJqFxt1fF471Y2+H2ol/AB0GmduYqhBocnZ8vS\n7jbtqi1esJ0vWHEKhpr2M0gmm/luwBU8X5EiGp7+VVdUsfMFo8mtrsdKcDaFRHQ5\nFXiiuJIKuY9gZvLDjE9gehy4QxGnhaIjsLnegs1+ll8lUewQ+czVNFL4lqJp0VqW\nPRDXfp1RGWUoG+JC9WdQ4nHdSDlW18j5rdZbCIjZ3VYUST3oMNz89KAk6I2uLfDK\nEig2FphIQadXUpDi0mWgcwYkOVBf750qpknVO0oBvdfcyLcOn9u+XvHxoAS2UzNq\nrs9FmKtwY1yFZABNA4C5BhaQWrqxCVNZnfDe/xHhwfHdk7qOvdRsXlEiFqsB/Ewv\n35BpvqQm43ObuRwnZLCVl3l6jvp06oQC0WLreEjkASJLVNxvcAMISa5zUC1zq9hX\n4HiZQAbBugS9PrLQEmQ3p7mYRDzdoeRHyr+2t6wWZ8Ul+fOU6Jd43kp1PHJ54pSB\nQt+fzdqDlmFzbr3BAhbum4bF3ykOdW2ulA1M/F12V4LJwB2cgG5Unle/rE6ZNuL+\ndyREnpobD6xF8udMDNl+cch7x6rjrocrc4+YI5hT8WHeuoXJTowOeUcCAwEAAQ==\n-----END RSA PUBLIC KEY-----\n',
};

try {
  const { result, ...httpResponse } = await securityAndCryptoController.createContext(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "contextId": "63232126f0cd6bf72d0c67f9",
  "publicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEAu9pfnJxRrkZlf07/lbC1vVRgvOt+uhIRprLM6qsnDJw1v7JkifTg\n1sS9VI+H/FEAfG27ikoQG+C2aURboNImUoD5qcG/895nh+0Iq0094829pRaSqMQD\nPz6+KNaN1XLUlJM/3R+hqsqI/BbTDZbPqyhliHjDQLp07HlMjz0G3m2GJeESJHDr\nXh0uTzN3S+9MOnpDQDFjGvtra/XBYmqDI6AaSH/Oasq92cHNU9KRsEU/O2Verucd\nW0kUyyJGJxz9IiU6g3njTKlLEf+Nxa8FiHU9oRbFOyVyq/cE/DSAwHFexldXOBSB\npiFN6W6cnTVhmDEsL9CRUbzN+OUxeyHNuwIDAQAB\n-----END RSA PUBLIC KEY-----\n"
}
```


# Fetch Context

**Fetch Context**

Fetch a context that was previously created from the database. The public key, **publicKey**, of the client must be supplied in order to locate the corresponding context.

```ts
async fetchContext(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example18>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example18`](../../doc/models/example-18.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await securityAndCryptoController.fetchContext();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "contextId": "63245ffd02097b827e08937b"
}
```


# Hash SHA256

**Calculate the SHA256 hash of the message.**

```ts
async hashSHA256(
  body: Example16,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example19>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Example16`](../../doc/models/example-16.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example19`](../../doc/models/example-19.md)

## Example Usage

```ts
const contentType = null;
const body: Example16 = {
  message: 'I am the whoke of djhjdbdugdu wwbsiet ys6vy usg dihwis',
};

try {
  const { result, ...httpResponse } = await securityAndCryptoController.hashSHA256(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "hash": "8de981047f6cae2aea75cba21380a3fbe03c6b7a72faf90b916d378d18bb0d3f"
}
```


# Hash SHA512

**Calculate the SHA512 hash of the message.**

```ts
async hashSHA512(
  body: Example16,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example19>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Example16`](../../doc/models/example-16.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example19`](../../doc/models/example-19.md)

## Example Usage

```ts
const contentType = null;
const body: Example16 = {
  message: 'hello',
};

try {
  const { result, ...httpResponse } = await securityAndCryptoController.hashSHA512(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "hash": "9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043"
}
```


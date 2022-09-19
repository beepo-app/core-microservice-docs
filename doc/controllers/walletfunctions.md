# Walletfunctions

```ts
const walletfunctionsController = new WalletfunctionsController(client);
```

## Class Name

`WalletfunctionsController`

## Methods

* [Recover Seedphrase](../../doc/controllers/walletfunctions.md#recover-seedphrase)
* [Fetch All Coin Wallets](../../doc/controllers/walletfunctions.md#fetch-all-coin-wallets)


# Recover Seedphrase

**Recover Seed Phrase**

Recover your account seed phrase, if for some reason the client needs to get the seed phrase again after user creation, this endpoint is to be used. It requires authentication, therefore, the access token must be attached accordingly.

```ts
async recoverSeedphrase(
  beepoCoreContextId: string,
  beepoCoreBearer: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example111>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beepoCoreContextId` | `string` | Header, Required | The id of the crypto context to use for RSA encryption/decryption between the server and client. |
| `beepoCoreBearer` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example111`](../../doc/models/example-111.md)

## Example Usage

```ts
const beepoCoreContextId = '63247c02d8de2e5ae55420b8';
const beepoCoreBearer = '{{JWT_HEADER}}';
try {
  const { result, ...httpResponse } = await walletFunctionsController.recoverSeedphrase(beepoCoreContextId, beepoCoreBearer);
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
  "seedPhrase": "6567cd0b228a73bb80276973a3fc9bde7ac3c49995bd62916f8c320a1d04a36138ca53687a7850e46b1fa5ef85ee2eec1687aefe4b610ba8e785924f20bfdb8a965e02b48c7b34f516a52a538d6d4f7f4c5459e14a5465470bef9ee1a8f166dcb753ffc2df039c1e92b6c8d44521ef5b35b0a9d6e6a6539a725aed2f207da30a257409d675bb69934707129d64f7c125e19f1c2bc9c175a55af79630ea303053842e344cc910afeee08ee25ff59514b71dbc323142267770cd8c1f79ac7acada9450ebde2b68da540fb7d4ba616bcfb977ee29d07a295dba00351aba103f3ca431efbe8f3ce68ccdaa5b8fac3d0d61d22fbd5a84036109014a2d6917df5749eca583b674bb6688774925545d601e17549e2f937403090d0ee768ad3185746bfa56d1fe90b21997a4c940bcaa562e868f6936f6d1d6203f04f177995f2b681ddcda4dd3f1d47cd12b158bd7316dcf266bdb2c657c3a098448e7a90d8d8bcccd78f438fa4db9a344d7b8265df363cb8210718a56b331ad173f66ad30ee18b25c48958da546322de2f870f146654c87daeb84e82bd207f9cd5c4cff5b90a2c6905cd7305cce4131109707cbaacc9e8cc02ef93225b7303209e82692fcb4caae65de861202b22c89480f848f4899bed32cd10d5f8ac675a966238935941cb3dfca3ac65fc2f71deba03a13462214a9bc9ac6ca1cdc878b9baea57bbf459d58ef53c1"
}
```


# Fetch All Coin Wallets

Fetch All Coin Wallets

```ts
async fetchAllCoinWallets(
  beepoCoreBearer: string,
  beepoCoreContextId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beepoCoreBearer` | `string` | Header, Required | Acess token for authentication |
| `beepoCoreContextId` | `string` | Header, Required | The ID of the context to use for encryption/decryption purposes. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const beepoCoreBearer = '{{JWT_HEADER}}';
const beepoCoreContextId = '63247c02d8de2e5ae55420b8';
try {
  const { result, ...httpResponse } = await walletFunctionsController.fetchAllCoinWallets(beepoCoreBearer, beepoCoreContextId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


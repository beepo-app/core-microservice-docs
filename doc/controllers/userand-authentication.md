# Userand Authentication

```ts
const userandAuthenticationController = new UserandAuthenticationController(client);
```

## Class Name

`UserandAuthenticationController`

## Methods

* [Create USER](../../doc/controllers/userand-authentication.md#create-user)
* [Log Infor Access Token](../../doc/controllers/userand-authentication.md#log-infor-access-token)


# Create USER

**Create USER**

This endpoint creates a new user. It requires that a crypto context exists already, that is, It requires the ID of the already created context.

See the **create context** section in **security and encryption** for more details.

The return data is the user object together with account seed phrase encrypted with the crypto context used. The client decrypts it to get the 12-word seed phrase.

```ts
async createUSER(
  body: CreateUSERRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateUSERRequest`](../../doc/models/create-user-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example1`](../../doc/models/example-1.md)

## Example Usage

```ts
const contentType = null;
const body: CreateUSERRequest = {
  displayName: 'Sushi',
  profilePictureUrl: 'https://cdn.aws.com/media/beepo/wuuw78e.jpg',
};

try {
  const { result, ...httpResponse } = await userAndAuthenticationController.createUSER(body);
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
  "username": "James Sushi_38260257",
  "displayName": "James Sushi",
  "profilePictureUrl": "https://cdn.aws.com/media/beepo/wuuw78e.jpg",
  "disabled": false,
  "sourceIpAddress": "::1",
  "_id": "632323a2ce7740a2fd9e3ee5",
  "uid": "5b423c99-a6c6-435b-bdbe-40e605e711d4",
  "__v": 0
}
```


# Log Infor Access Token

**Log In for Access Token**

This endpoint allows the client to request for an access token. It takes two required data fields.

\*   The SHA256 hash of the client's seed phrase
\*   The SHA512 hash of the client's seed phrase

These two fields must be encrypted with the current context before sending the message to the server. The server decrypts the message and determines if the credential is valid and then returns an access token.

The access token return is also encrypted by server using the current context, the client has to decrypt it and then encrypt it again before it is attached to subsequent request for the purpose of authentication.

```ts
async logInforAccessToken(
  beepoCoreContextId: string,
  body: LogInforAccessTokenRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Example11>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beepoCoreContextId` | `string` | Header, Required | The id of the crypto context to use for RSA encryption/decryption between the server and client. |
| `body` | [`LogInforAccessTokenRequest`](../../doc/models/log-infor-access-token-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Example11`](../../doc/models/example-11.md)

## Example Usage

```ts
const beepoCoreContextId = '63247c02d8de2e5ae55420b8';
const contentType = null;
const body: LogInforAccessTokenRequest = {
  encryptedSeedPhraseHash256: 'cba33d335b8b44ec6ae9a31f59961a06ae24eedf1a312e1dace0a94ca852fb7d01637a7f59da36bfcddf58cd2cabe4c427dc4b05048ae4089002f12110d42f762257df7611cd9015d734a497e74e900befb0f9ce9c6b6a4957357307653abc44e78b58084360831c976be03ebd69db747f9e5d95d361fc1ac2748f3316a8c904850ba141c91dca43863513111b00c0333faa338b935763033a9a7c2dc641ad0f1c66e7681475a48036554233fa0345bd78f20983abcdc792185c29860adae8485af8107bf7cc2601b8b88b8e2b3a690ec0ea60ca52b69872643b4d8a0c033c666558317e8815a785336b7fb48d047e319770cc74bec4a2743c0184eabb1a9018328e666e95338ac073fb02e7e105c8a7cf90b5bfa6b6bd10d5de6862d3229f0cc2d2e56705fd6ea16425294aa59d12ca270915f29c896d2df95f06bac627d025ad6a8f6bddc5eebe82c369ee594e4b9e729c2f57603f8260bfb92367f3920f127649426447cd4fb8016ff014c61a5c9f8383b316ffae8a012d440908c5353813a85fa7a5c6cd7af1e412535101526900c095dea190a6bd3a777698d7584225c2980a4c45944b0bc86ef5111a15098a4b820e1f08fc9cb3e8a016c34cec1f9e7f7c1eff48e2e8714a0b2e08cfa96b90b971c8ec69d736e15a4086017cf0d9a9fce4c413e98cbe0c31c02c231f1764d80158d61d5e948793feed9fb863dbe30451',
  encryptedSeedPhraseHash512: '3aa515b480b80a446ea13f64a12c8439244e0a800fa31549eac60197df28aded79c0574855ec1ab346a1f9e00e2fc5fdf4c0d2d7b1d5d7bca6f1b2b17d39e37a5e005c0b31924e5e44da1ac6e7277a0f0cbd21f26016895092917c952989af8e3fbe41a3ed511552058536d2f89f7fb1b6306791e739b88c332a8fb3e26e6ae22d113ff7ed019f8dd448fa2a747ae1e6ccff50f2dc9ac218d7a9db983ea8ecef9f150e277b6c788e194765f2d61869ebba08cf2f047e15b441ed81c819a88a9249a967fbe84a532e2e6137e37e77b243b4515f0a47a9a9ac7bb3e63d1c87795f11210e0cee879973e8b76cc68616313a73f5564d8fb20ecc41c63870a76177ce4712d5f384ac1cf38c50d1d30e786a416b1567da8f56742361979f62e5c38d47770360366cf819378550b4ccfd76c5932454aabc53b4fb9f88ee558cd863a10261e8ff77aaad5f7023d0f68fbab5599a6c873191e55dadd0b8540e81a0aa09ebae83199be97c2b8869c3dbacc48e182dbad0353079b0db2d31907bb862bc0f501c6ac655bd80251e4ea937ca1985f73d84e3ff6b651e5d6c85a4a54991a0fcb38ef80d10930916f0c7f4486196d1d7b2b7d6be53acf561c2fd96cb8e8e2e1317b03c573756146bb6f292d25f7d6da97c0c7cc9b964f11f547681e6d3b192fd1b7286eae7de1ca13ee9b9bdfca7b804bbbeef3e48343a6af8ad4451b23997abbd',
};

try {
  const { result, ...httpResponse } = await userAndAuthenticationController.logInforAccessToken(beepoCoreContextId, body);
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
  "accessToken": "67941998f244b6b0a2d1aea5a1783c73adb14de5cb6049f04faa8c492ff2e6c9bfac5d218304bb43dfac439650a08e4eccc440e15cf7b34960b14aa8d3490c6ebbcb733f0887e036bfd168742abe7453e53476f1b2aa7ec244060aaccf7e705ef195cd81c24f4a0f0a1969f7402673e90b7dc22f9a6ac7d90aaa79b0fc8474a1c1419cd004cf6ef7e950b5fb906efe47c15c4252cc763912b94f9ac9aaf8e93e275f5ceeff41da29825b8f52cadf435c9b0364ab3fc18ea53c2cf5287757e4204ed9ba99f46fcd143145f2955db3cfcc956b1bee3b8a94d72bf9798e4221621db424ab27534b379a22b5be578c167f5630f91cb14a637af0c854a9f479d3ccc1ca7db272ac4d7e65966f06ee131d8cb2ec2da3bb72baac3785dab318406b77084647547a6ca81043cf9e67b0893b22908f5c579fb5572e79312d410ec50ca270a20a6a82bf868ba1f3a2341b677231d8fe6da6f97f897275e82457b680ca731a390c643bf887b4c0c7194bd34c30e155717e93c443c3301961eea42b46b03d32e98a0d648d29cce977f412897a04274a93317e30e6c32f8313819d0274750957e1478a20b30c6167bf5f2d4470e504dbfe356f7886e78ba70c0a11f99a308d425c1311eca161265866cdea0d6aa234d8407c73dc5a018e5605c0aba7fea92bb5f5c1dbeeea3ebe9d981e9f3b9406217eb72c4880739aaa553c7f903804a99db7",
  "tokenType": "bearer"
}
```


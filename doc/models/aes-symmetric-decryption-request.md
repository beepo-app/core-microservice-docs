
# AES Symmetric Decryption Request

## Structure

`AESSymmetricDecryptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encrypted` | `string` | Required | - |
| `iv` | `string` | Required | - |
| `key` | `string` | Required | - |

## Example (as JSON)

```json
{
  "encrypted": "dad58f76f56c86d8a686c7b3063d994f8089293b5ad552ed0c2e0b205df71580",
  "iv": "808849d507bdd2075756656e618c9aa7",
  "key": "i-am-the-secret-key"
}
```


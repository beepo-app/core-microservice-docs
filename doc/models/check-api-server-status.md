
# Check API Server Status

## Structure

`CheckAPIServerStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beepo` | `string` | Required | - |
| `now` | `string` | Required | - |
| `environment` | `string` | Required | - |
| `timestamp` | `bigint` | Required | - |
| `info` | `string` | Required | - |

## Example (as JSON)

```json
{
  "beepo": "To the moon!",
  "now": "Sun Sep 18 2022 10:33:09 GMT+0100 (West Africa Standard Time)",
  "environment": "dev",
  "timestamp": 1663493589632,
  "info": "All systems operational."
}
```


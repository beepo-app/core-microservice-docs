# Server Status

```ts
const serverStatusController = new ServerStatusController(client);
```

## Class Name

`ServerStatusController`


# Check API Server Status

**Check the status of the API server by sending a PING request.**

```ts
async checkAPIServerStatus(
  requestOptions?: RequestOptions
): Promise<ApiResponse<CheckAPIServerStatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CheckAPIServerStatus`](../../doc/models/check-api-server-status.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await serverStatusController.checkAPIServerStatus();
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
  "beepo": "To the moon!",
  "now": "Sun Sep 18 2022 10:33:09 GMT+0100 (West Africa Standard Time)",
  "environment": "dev",
  "timestamp": 1663493589632,
  "info": "All systems operational."
}
```


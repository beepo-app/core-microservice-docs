/**
 * Beepo Core MicroserviceLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface AESSymmetricDecryptionRequest {
  encrypted: string;
  iv: string;
  key: string;
}

export const aESSymmetricDecryptionRequestSchema: Schema<AESSymmetricDecryptionRequest> = object(
  {
    encrypted: ['encrypted', string()],
    iv: ['iv', string()],
    key: ['key', string()],
  }
);

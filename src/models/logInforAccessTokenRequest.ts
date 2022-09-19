/**
 * Beepo Core MicroserviceLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface LogInforAccessTokenRequest {
  encryptedSeedPhraseHash256: string;
  encryptedSeedPhraseHash512: string;
}

export const logInforAccessTokenRequestSchema: Schema<LogInforAccessTokenRequest> = object(
  {
    encryptedSeedPhraseHash256: ['encryptedSeedPhraseHash256', string()],
    encryptedSeedPhraseHash512: ['encryptedSeedPhraseHash512', string()],
  }
);

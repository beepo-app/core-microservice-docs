/**
 * Beepo Core MicroserviceLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Example12 {
  privateKeyPem: string;
  publicKeyPem: string;
}

export const example12Schema: Schema<Example12> = object({
  privateKeyPem: ['privateKeyPem', string()],
  publicKeyPem: ['publicKeyPem', string()],
});

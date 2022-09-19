/**
 * Beepo Core MicroserviceLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Example17 {
  contextId: string;
  publicKey: string;
}

export const example17Schema: Schema<Example17> = object({
  contextId: ['contextId', string()],
  publicKey: ['publicKey', string()],
});
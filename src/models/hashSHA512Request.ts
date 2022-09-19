/**
 * Beepo Core MicroserviceLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface HashSHA512Request {
  message: string;
}

export const hashSHA512RequestSchema: Schema<HashSHA512Request> = object({
  message: ['message', string()],
});

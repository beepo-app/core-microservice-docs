/**
 * Beepo Core MicroserviceLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Example16 {
  message: string;
}

export const example16Schema: Schema<Example16> = object({
  message: ['message', string()],
});
/**
 * Beepo Core MicroserviceLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Example111 {
  seedPhrase: string;
}

export const example111Schema: Schema<Example111> = object({
  seedPhrase: ['seedPhrase', string()],
});

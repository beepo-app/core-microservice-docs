/**
 * Beepo Core MicroserviceLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Example18 {
  contextId: string;
}

export const example18Schema: Schema<Example18> = object({
  contextId: ['contextId', string()],
});

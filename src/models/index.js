// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SpreadSheet, Cell } = initSchema(schema);

export {
  SpreadSheet,
  Cell
};
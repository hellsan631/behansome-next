import {Collection} from 'firestorter';
import FirestoreDb from './FirestoreDb';

FirestoreDb.init();

const Fields = new Collection('fields');

export {Fields};

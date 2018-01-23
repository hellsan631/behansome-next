import firebase from './firebase';
import {initFirestorter} from 'firestorter';
import {observer} from 'mobx-react';

export default class FirestoreDb {
  static init() {
    try {
      // Initialize `firestorter`
      initFirestorter({ firebase: firebase });
    } catch (error) {
      // caused by hot loading
      console.log(error);
    }
  }
}
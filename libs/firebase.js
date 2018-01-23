import firebase from 'firebase';
import 'firebase/firestore';

const config = require('../config').firebase;

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
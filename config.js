const secrets = require('./now.json');

module.exports = {
  firebase: {
    apiKey: secrets.env.FIREBASE,
    authDomain: "behansome-94a16.firebaseapp.com",
    databaseURL: "https://behansome-94a16.firebaseio.com",
    projectId: "behansome-94a16",
    storageBucket: "",
    messagingSenderId: "1025668064350"
  },
  behance: secrets.env.BEHANCE
}

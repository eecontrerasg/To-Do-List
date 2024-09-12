const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const config = require('./config.js');

const firebase = initializeApp(config.firebaseConfig);
const db = getFirestore(firebase);

// const fs = require('firebase-admin');

// fs.initializeApp({
//   credential: fs.credential.cert(config.firebaseConfig),
// });
// const db = fs.firestore();

module.exports = { db };

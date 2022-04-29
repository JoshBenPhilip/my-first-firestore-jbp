
import admin from "firebase-admin";// imports firebase library of tools

import serviceAccount from './credentials.js'; // import our credentials to connect to firebase

admin.initializeApp({//connects to our firebase project
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials
});

//Now we are connected to OUR Firebase project & related services

const db = admin.firestore(); // creates a shortcut to access the Firestore database

const restaurantsCol = db.collection('restaurants') // shortcut to point to our collection

// delete 
restaurantsCol.doc('LYadSZsJCjjQURbQK7wl').delete()
.then(console.log('Success!'))
.catch(err=> console.error('Error deleting:LYadSZsJCjjQURbQK7wl', err))
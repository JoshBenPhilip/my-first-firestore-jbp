import admin from "firebase-admin";// imports firebase library of tools

import serviceAccount from './credentials.js'; // import our credentials to connect to firebase

admin.initializeApp({//connects to our firebase project
  credential: admin.credential.cert(serviceAccount) // creating a certificate from our credentials
});

// //Now we are connected to OUR Firebase project & related services

const db = admin.firestore(); // creates a shortcut to access the Firestore database

const restaurantsCol = db.collection('restaurants') // shortcut to point to our collection

// restaurantsCol.get()
// .then()
// .catch(err=> console.error(err))
// //same as .catch(console.error) if parameters getting from catch are same as parameters using you are good.


//restaurantsCol.get() // get ALL restauraunts
//restaurantsCol.where('name','==','Bolay')
.where('rating', '!=', 4.75)
.get()
.then(snapshot => {
    //loop through all results
    snapshot.docs.forEach(doc => console.log(doc.data()))
})
.catch(console.error)



//thisisafunction() is calling the function thisisafunction just references the function and doesn't call it
//catch expects a function 



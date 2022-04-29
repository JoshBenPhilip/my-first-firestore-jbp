import { restaurantsCol } from './connectdb.js'
// restaurantsCol.get()
// .then()
// .catch(err=> console.error(err))
// //same as .catch(console.error) if parameters getting from catch are same as parameters using you are good.


restaurantsCol.get() // get ALL restauraunts
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




const restaurant = {// creating an object -- in this case a specific restaurant 
                    // we want to add to our database

    name: 'Mister 01',
    address: '555 N Federal Hwy Suite #5, Boca Raton, Fl 33432',
    cuisine: 'Pizza',
    rating: '4.9',
    phone: '(786) 677-2903',
}////below is the way to add stuff to mongo or firebase
// db.collection('restaurants').add(restaurant)
// .then(doc => console.log('Created restaurant', doc.id))
// .catch(err => console.error(err))
////this is todd style automatically add the try catch

////below is the way to add stuff to mongo or firebase
// db.collection('restaurants')
//.add(restaurant)
// .then(doc => console.log('Created restaurant', doc.id))
// .catch(err => console.error(err))
////this is todd style automatically add the 
restaurantsCol.add(restaurant) // adding the restaurant to our restaurants collection
.then(doc => console.log ('Created restaurant',doc.id))
.catch(err => console.error('err'))






const restaurant2 = {
    name: 'Bolay',
    address: '7060 W Palmeto Park rd, Boca Raton, FL 33433',
    cuisine:'American',
    rating: 4.6,
}

async function addRestaurant(data) {
    try{
    const doc = await db.collection('restaurants').add(restaurant2)
    console.log('Created restaurant', doc.id)
    } catch(err){
        console.error('err')
    }
}
addRestaurant(restaurant2)

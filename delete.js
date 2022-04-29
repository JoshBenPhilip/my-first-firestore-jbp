
import { restaurantsCol } from "./connectdb.js"
// delete 
restaurantsCol.doc('316UlPxZdFHhblmxRiql').delete()
.then(console.log('Success!'))
.catch(err=> console.error('Error deleting:316UlPxZdFHhblmxRiql', err))

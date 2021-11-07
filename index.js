// file user can run & provide breed name to
// require the breedfetcher file & call its exported function
const { fetchBreedDescription } = require('./breedFetcher');

const breedFetcher = process.argv.slice(2);
const breedName = breedFetcher[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch destails:', error);
  } else {
    console.log(desc);
  }
});
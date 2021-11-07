const request = require('request');
const breedFetcher = process.argv.slice(2);
let breed = breedFetcher[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => { // body is string type, so need to convert it into obj
  if (error) {
    console.log('Failure to fetch details: ', error);
  } else {
    console.log('Error: ', error);
  }

  console.log('statusCode: ', response && response.statusCode);

  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log(`Error: Request breed cannot be found.`);
  }
});
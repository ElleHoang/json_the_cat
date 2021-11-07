const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => { // body is string type, so need to convert it into obj
    if (error) {
      console.log('Failure to fetch details: ', error);
      callback(error, null);
    }
  
    console.log('statusCode: ', response && response.statusCode);
  
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      console.log(`Error: Request breed cannot be found.`);
    }

  });
};

module.exports = { fetchBreedDescription };
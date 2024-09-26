const needle = require("needle");
const baseUrl = "https://api.thecatapi.com/v1/breeds/search?q=";
const breed = process.argv[2];
const completeUrl = baseUrl + breed;

const fetchBreedDescription = function (breed, callback) {
  needle.get(completeUrl, (error, response, body) => {
    if (error) {
      console.error(`Failed to fetch breed details: ${error}`);
      return;
    }
    if (body.length > 0) {
      console.log(`Breed Description: ${body[0].description}`);
    } else {
      console.log("Breed not found.");
    }
  });
};

module.exports = { fetchBreedDescription };
const axios = require('axios');

const getPeople = async (name) => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/people/?search=${name}&format=json`);
    return data.results;
  } catch (error) {
    throw Error('Api Swapi issue - Error:', error);
  }
}

module.exports = {
  getPeople,
};
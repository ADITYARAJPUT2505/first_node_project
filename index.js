const axios = require('axios').default;

// axios.get('https://www.omdbapi.com/?t=harry&apikey=951f7aab').then((response) => {
//   console.log(response.data);
//   })

async function fetch()
{
    const response =  await axios.get('https://www.omdbapi.com/?t=harry&apikey=951f7aab')

console.log(response.data)
}
fetch();

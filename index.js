//require('dotenv').config();
import "dotenv/config.js";

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=the+rock&limit=25&offset=0&rating=g&lang=en`

async function getImage(query){
    const response = await fetch(query);
    const data = await response.json();
    console.log(data);
    return data;
}

await getImage(endpoint);


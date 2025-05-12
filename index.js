require('dotenv').config();
//import "dotenv/config.js";

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

async function getImage(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
    const response = await fetch(endpoint);
    const data = await response.json();
    let images = [];
    for (let i of data["data"]){
        images.push(i.url);
    }
    //return data["data"][0].url;
    return images[Math.floor(Math.random() * images.length)]; //returns a random url from the data json
}


async function helperFunction(query){ //so we can call getImage with await
    const url = await getImage(query);
    console.log(url);
}

helperFunction("dogs");


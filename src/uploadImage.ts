const axios = require("axios");
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const key = process.env.NFT_STORAGE_KEY;

async function main() {
   //const imageFile = fs.readFileSync(path.resolve(__dirname, '../assets/100MB.png'))
   const imageFile = fs.readFileSync(path.resolve(__dirname, '../assets/75.png'))
   console.log(imageFile.length);  
  
    let config = {
        method: 'post',
        url: 'https://api.nft.storage/upload',
        headers: { 
          'Authorization': key, 
        },
        data : imageFile,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,  
    };
    console.log(config.data)
      
    const res = await axios(config);

    console.log(res.data);
    console.log('image uri:', `https://nftstorage.link/ipfs/${res.data.value.cid}`)
}

main();

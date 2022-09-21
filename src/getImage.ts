const axios = require("axios");

async function main() {
    let config = {
        method: 'get',
        url: 'https://nftstorage.link/ipfs/bafkreiedlwcqdlhtjlv25qhzbtttblxwprkcte32a4akoybgrah6r7325i',
       // url: 'https://nftstorage.link/ipfs/bafybeihzok6cxxwftfxikht5s23vnqdygjrut25a7faopbjcb4bpgsv6wy'
    };
      
    const res = await axios(config);
    console.log(res);
    console.log(res.data.length);
}

main();
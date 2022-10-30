const axios = require('axios');

const getPostData = async () => {
    const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
    let result = await axios.get(POST_URL);
    console.log(result.data);
}

getPostData();


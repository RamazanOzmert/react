// const { default: axios } = require("axios");
import axios from 'axios';

 async function getData(user_id){
    let linkUsers = "https://jsonplaceholder.typicode.com/users/"+user_id;
    let linkPosts= "https://jsonplaceholder.typicode.com/posts?userId="+user_id;

    const {data:users} = await axios(linkUsers.toString());
    const {data:posts} = await axios(linkPosts.toString());
    
    return (users,posts);
};
 export default getData;


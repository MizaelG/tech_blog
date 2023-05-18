const { Post } = require('../models');

const postData = 
[
    {
        "postTitle": "Amazing Day we having",
        "postContent": "This is a beautiful day",
        "userId": 1
    },
    {
        "postTitle": "Fields",
        "postContent": "This field is the feels so nice",
        "userId": 2
    },
    {
        "postTitle": "Do you hear it?",
        "postContent": "I can hear it!",
        "userId": 3
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
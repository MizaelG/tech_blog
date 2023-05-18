const { User } = require('../models');

const userdata = [
    {
        "username": "Mouse",
        "password": "password"
    },
    {
        "username": "Gundam",
        "password": "password"
    },
    {
        "username": "Shanks",
        "password": "password"
    }
];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;
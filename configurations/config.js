//app configurations and global variables
require('dotenv').config()
module.exports = {
    MONGO_URL: process.env.DB_URL || 'mongodb://localhost/graphQL',
    PORT: process.env.PORT || 4000,
}
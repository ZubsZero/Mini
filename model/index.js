const Users = require('./users')
const Products =  require('/Products')
// Export all objects
module.exports = {
    users: new Users(),
    products:new Products()
}
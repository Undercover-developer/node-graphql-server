const UserModel = require('../../models/User')

module.exports = {
    users: async () => {
        return UserModel.find({})
    },
    user: async args => {
        return UserModel.findOne({
            _id: args._id
        })
    },
    createUser: async args => {
        let newUser = new UserModel(args)
        newUser.save()
        return newUser
    }
}
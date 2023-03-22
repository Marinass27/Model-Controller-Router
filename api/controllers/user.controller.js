const User= require('../models/user.model')


const listUsers = (req, res) => {
    res.status(200).send('Users OK')
}

const createUser = async(req, res) => {
    try {
        const user = await User.create(req.body)
            res.status(200).json(user)
    }catch(error){
        console.log(error)
        res.status(500).json({
            msg:'ERROR CREATING USERS',
            err: error
        })
    }
    
}

module.exports= {
     listUsers,
     createUser
}
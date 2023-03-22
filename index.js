require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const sequelize = require('./api/db')
const api = express()


const router = require('./api/routes')
api.use(morgan('dev'))
api.use(express.json());
api.use('/api',router)



api.listen(process.env.PORT, async (err) => {
    if (err) throw new Error(`Error : Cannot star Express on port ${process.env.PORT}`,err)
    console.log(`Express listening on port ${process.env.PORT}!`)
    try {
        await sequelize.authenticate()
        await sequelize.sync({alter:true})
    } catch(error){
        console.error('ERROR:Unable to connect to the database', error);
    }
       

})  






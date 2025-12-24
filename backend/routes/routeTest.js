//crating routes for user authentication

const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User.js')



router.post('/register', async (req, res) => {
    const {username, email, phone, address, password} = req.body

    try{
        //check if email is already taken
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json('email already exists')
        }
        //encrypt the password
        const hashPassword = await bcrypt.hash(password, 10)

        //collect new entry
        const newUser = new User({
            username,
            email,
            phone,
            address,
            password:hashPassword
        })
        const saveUser = newUser.save()
        res.status(200).json({saveUser, message:'user registered'})

    }
    catch (error) {
        res.status(400).json('user not registered')
    }
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body

    try{
        //check for presence of the email/user
        const user = await User.findOne({email})
        if (!user){
            return res.status(400).json('email/user does not exist')
        }
        //validate password
        const validatePassword = await bcrypt.compare(password, user.password)
        if(!validatePassword){
            return res.status(400).json('wrong password')
        }
        //create token/session
        const token = jwt.sign( {id:user._id}, process.env.KEY, {expiresIn:'7d'})
        res.cookie('token', token, {
            httpOnly:true,
            secure:true,
            sameSite:'None',
            maxAge:360000
        })
        res.status(200).json({message:'login successful'})

    }
    catch(error){
        res.status(400).json('login failed')
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly:true,
        secure:true,
        sameSite:'None',
        path:'/'
    })
    res.status(200).json({status:true})
})



module.exports = router
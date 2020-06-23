const usersRepository = require('../repositories/usersRepository');
const bcrypt = require('bcrypt');

module.exports = {
    logInForm (req, res) {
        return res.render('sessions/logInForm.ejs');
    },
    async create (req, res) {
        try{
            const user = await usersRepository.find(req.body.username); //find input username in db
            if(bcrypt.compareSync(req.body.password, user.password)) {   //if user's input pw same as user's pw in db 
                req.session.currentUser = user;  //create session property 'current user' and assign value of 'user'. 
                return res.redirect('/recipes'); 
            }else {
                throw new Error(); //in case, cannot find the username in our db - send this error msg 
            }
        }catch(err) {   //if pw incorrect 
            return res.send("<a href='/'> Username and password are wrong! </a>");
        }
    },
    destroy (req, res) {   //user to log out 
        req.session.destroy(() => {
        return res.redirect('/');
        });
    }

};

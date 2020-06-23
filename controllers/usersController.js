const usersRepository = require('../repositories/usersRepository');
const {validate} = require('../validator/usersValidator');

module.exports = { 
    async create (req, res) {
        try{
            // console.log(req.body)
            validate(req.body);  // validate req.body(user's input)
            await usersRepository.create(req.body);  //if pass validation, create data in db 
            res.redirect('/');  //upon successfully sign up, redirect to "/" to log in 
        }catch(err) {
            res.render('errors/error', {err});

        }
    },
    signUpForm (req, res) {
        res.render('users/signUpForm');
    }
};
module.exports = {
    home (req, res) {
        res.render('home', { currentUser: req.session.currentUser });
    }
    

    
};
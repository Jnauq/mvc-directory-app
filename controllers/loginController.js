let artistModel = require('../models/artistModel')

const postLogin = ( req, res, next) => {
    let user = req.body.username
    let pw = req.body.password
    if (user == "a01044627" && pw =="password") {
        let artists = artistModel.getAll()
        artists.then( ([entries, metaData]) => {
            res.render('home', { pageTitle: 'Artist Directory', username: `Welcome, ${user}`, artist: entries, artistsCSS : true })
        })
        // artists.then( (entries) => {
        //     res.render('home', { pageTitle: 'Artist Directory', username: `Welcome, ${user}`, artist: entries.rows, artistsCSS : true })
        // })
    } else {
        res.redirect(301, '/')
    }
}

const postLogout = ( req, res, next) => {
    res.redirect(301, '/')
}

module.exports = {
    login : postLogin,
    logout : postLogout
}
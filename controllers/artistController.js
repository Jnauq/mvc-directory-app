let artistModel = require('../models/artistModel')

const postAddArtist = ( req, res, next) => {
    let a_name = req.body.name
    let a_about = req.body.about
    let a_url = req.body.url

    let artist = {
        name: a_name,
        about: a_about,
        url: a_url
    }

    let response = artistModel.add(artist)
    response.then( (metaData) => {
        res.redirect(301, '/artists')
    })
}

const getAllArtists = ( req, res, next) => {
    let artists = artistModel.getAll()
    // artists.then( ([entries, metaData]) => {
    //     res.render('home', { pageTitle: 'Artist Directory', username: `Welcome, a01044627`, artist: entries, artistsCSS: true })
    // })
    artists.then( (entries) => {
        res.render('home', { pageTitle: 'Artist Directory', username: `Welcome, a01044627`, artist: entries.rows, artistsCSS: true })
    })
}

const getSearchArtists = ( req, res, next) => {
    let query = req.query.search
    let artists = artistModel.search(query)
    // artists.then( ([entries, metaData]) => {
    //     res.render('home', { pageTitle: 'Artist Directory', artist: entries, username: `Welcome, a01044627`, artistsCSS: true})
    // })
    artists.then( (entries) => {
        res.render('home', { pageTitle: 'Artist Directory', artist: entries.rows, username: `Welcome, a01044627`, artistsCSS: true})
    })
}

const postDeleteArtist = ( req, res, next) => {
    let artistId = req.body.id
    let response = artistModel.remove(artistId)
    response.then( (metaData) => {
        res.redirect(301, '/artists')
    })
}

module.exports = {
    getAll : getAllArtists,
    search : getSearchArtists,
    add : postAddArtist,
    remove : postDeleteArtist
}
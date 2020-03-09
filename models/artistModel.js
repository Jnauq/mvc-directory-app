let db = require('../util/db')

let addArtist = (data) => {
    let sql = `INSERT INTO artists (name, about, url) VALUES ('${data.name}', '${data.about}', '${data.url}')`
    return db.query(sql)
}

let getAllArtists = () => {
    let sql = `SELECT * FROM artists`
    return db.query(sql)
}

let searchArtists = (keyword) => {
    let sql = `SELECT * FROM artists WHERE name LIKE '%${keyword}%' OR about LIKE '%${keyword}%'`
    return db.query(sql)
}

let removeArtist = (id) => {
    let sql = `DELETE FROM artists WHERE id=${id}`
    return db.query(sql)
}

module.exports = {
    add : addArtist,
    getAll : getAllArtists,
    search : searchArtists,
    remove : removeArtist 
}
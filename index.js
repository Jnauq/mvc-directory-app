let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let path = require('path')
let db = require('./util/db')

app.use(express.static(path.join(__dirname, 'public')));

const expressHbs = require('express-handlebars')
app.engine(
    'hbs',
    expressHbs({
        layoutsDir: 'views/layouts/',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', ( req, res ) => {
    res.render('login', { pageTitle: 'Artist Directory', loginCSS : true})
})

let artistRoutes = require('./routes/artistRouter');
app.use(artistRoutes);

let port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Ready on ${port}`))
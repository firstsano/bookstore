global.__SERVER__ = true;

const express = require('express');

const path = require('path');

const app = express();

const manifest = require('./../../public/assets/manifest.json');

const renderApp = require('./../../serverApp/renderApp').default;

const webpackAsset = (bundle) => manifest[bundle];

app.use(express.static(path.resolve(process.cwd(), 'public')));

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    renderApp(req, res)
        .then((renderParams) => {
            res.render('index', Object.assign({ webpackAsset }, renderParams))
        })
    ;
});

app.listen(8080, () => console.log('Server is listening on 8080'));
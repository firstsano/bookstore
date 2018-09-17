const express = require('express');

const path = require('path');

const app = express();

const manifest = require('./../../public/assets/manifest.json').default;

const webpackAsset = (bundle) => manifest[bundle];

app.use(express.static(path.resolve(process.cwd(), 'public')));

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    res.render('index', { webpackAsset });
});

app.listen(8080, () => console.log('Server is listening on 8080'));
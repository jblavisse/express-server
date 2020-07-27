const express = require("express");
const path = require("path");

const app = express();
const host = "localhost";
const port = 3000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');


app.get('/', (req, res) => {
    res.render('index.twig', {title: "Mon site qui tue"});
})

app.get('/blog', (req, res) => {
    res.render('posts.twig');
})

app.get('/blog/:id', (req, res) => {
    
    let post = {
        title: "ofdkofdjijfijf",
        description: "'jifjijfdijfdjifij"
    }
    res.render('post.twig', post);
})

app.get('/services/:id', (req, res) => {
    res.send('<html><body>Mes services</body></html>');
})

app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
})
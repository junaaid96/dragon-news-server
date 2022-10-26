const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('News API running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/news', (req, res) => {
    res.send(news);
});

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(singleNews => singleNews._id === id);

    res.send(selectedNews);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    
    if (id === '08') {
        res.send(news);
    } else {
        const selectedCategory = news.filter(singleCategory => singleCategory.category_id === id);
        res.send(selectedCategory);
    }

});

app.listen(port, () => {
    console.log(`server running at ${port}`);
});
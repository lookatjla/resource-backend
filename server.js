require('dotenv').config();
const {PORT = 4000, DATABASE_URL } = process.env;

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection
    .on('open', () => console.log('You are connected to Mongoose.'))
    .on('close', () => console.log('You are disconnected from Mongoose.'))
    .on('error', (error) => console.log(error))

const PostsSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String
});

const Posts = mongoose.model('Posts', PostsSchema);

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes

// index
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// index
app.get('/posts', async (req, res) => {
    try {
        res.json(await Posts.find({}));
    } catch(error) {
        res.status(400).json(error);
    }
});

// create
app.post('/posts', async (req, res) => {
    try {
        res.json(await Posts.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
})

// read/show
app.get('/posts/:id', async (req, res) => {
    try {
        res.json(await Posts.findById(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})

// update
app.put('/posts/:id', async (req, res) => {
    try {
        res.json(await Posts.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch(error) {
        res.status(400).json(error)
    }
})

// delete
app.delete('/posts/:id', async (req, res) => {
    try {
        res.json(await Posts.findByIdAndRemove(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})



app.listen(PORT, () => console.log(`Listening on PORT ${PORT}.`))

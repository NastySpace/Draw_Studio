const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const router = require('./routes/index');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(cors());
app.use('/api', router);

const start = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://Stacy:boZY1XlF6Kt7rURF@draw-studio.gqedw.mongodb.net/?retryWrites=true&w=majority'
        );
        app.listen(PORT, () => {
            console.log(`App is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();

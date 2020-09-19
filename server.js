const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());



app.listen(3000, () => console.log('I am working'));
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/router');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000 || process.env.PORT;


mongoose.connect('mongodb://localhost/veterinary', { 
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//     origin: (origin, callback) => {
//         const exist = whitelist.some(domain => domain === origin);
//         if (exist) {
//             callback(null, true);
//         } else {
//             callback(new Error('CORS ERROR'));
//         }
//     }
// }

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes());

app.listen(port, () => console.log(`Server running on port: ${ port }`));
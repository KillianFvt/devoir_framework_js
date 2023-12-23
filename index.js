const cors = require('cors');

const express = require('express');

const nunjucks = require('nunjucks');
const {getQcmId, getQcmsJson, postQcm} = require("./controllers/qcm_controller");

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors({origin: "*", successStatus: 200}));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');

const port = 3000;

const welcomeMessage = (request, response) => {
  response.send('<h1>Bienvenue</h1>');
};

app.get('/welcome', welcomeMessage);

app.get('/qcms', getQcmsJson);

app.post('/qcms/post', postQcm);

app.get('/qcms/get/:id', getQcmId);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

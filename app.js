const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', routes.home);
app.get('/:area', routes.area);

app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT,() => {
    console.log(`app is running at port : ${PORT}`);
    
});
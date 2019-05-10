const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('home', {
        headline : 'We are always on a Clean Bengaluru mission'
    });
});

app.use(express.static(__dirname+ '/public'));

app.listen(PORT,() => {
    console.log(`app is running at port : ${PORT}`);
    
});
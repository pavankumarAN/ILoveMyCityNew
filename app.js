const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('home', {
        headline : 'We are always on a Clean Bengaluru mission'
    });
});

app.get('/:area', (req,res) => {
    const areaName = req.params.area;
    var title, heading;
    var imageCount = 4;
    if(areaName=== "koramangala") {
        title : "Koramangala"; 
        heading : "Famous for pubs";
    } else if(areaName === "jpnagar") {
        title : "JP Nagar";
        heading : "Celebrities area";   
    }else if(areaName === "btm") {
        title : "BTM";
        heading : "Famous for PGs";
    } else if(areaName === "jayanagar") {
        title : "Jayanagara";
        heading : "Most famous cool area";
     }
   // else if(areaName === "rajajinagar") {
    //     title : "Rajajinagar";
    //     heading : "Famous for citizen friendly MLA";
    //     //imageCount : 6;
    // }

    res.render('area', {
        title : title,
        headline : heading,
        area : areaName,
        numberOfImages : imageCount
    });
});

app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT,() => {
    console.log(`app is running at port : ${PORT}`);
    
});
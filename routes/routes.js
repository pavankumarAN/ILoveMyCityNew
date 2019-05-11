exports.home = (req,res) => {
    res.render('home', {
        title : "Bengaluru",
        headline : 'We are always on a Clean Bengaluru mission'
    });
}


exports.area = (req,res) => {
    var areaName = req.params.area;
    var title, heading;
    var imageCount = 4;
    if(areaName=== "koramangala") {
        title = "Koramangala";
        heading = "Famous for pubs";
    } else if(areaName === "jpnagar") {
        title = "JP Nagar";
        heading = "Celebrities area";   
    }else if(areaName === "btm") {
        title = "BTM";
        heading = "Famous for PGs";
    } else if(areaName === "jayanagar") {
        title = "Jayanagara";
        heading = "Most famous cool area";
     }
   

    res.render('area', {
        title : title,
        headline : heading,
        area : areaName,
        numberOfImages : imageCount
    });
}

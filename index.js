var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var urlEncodedParser = bodyParser.urlencoded({ extended: false});

var app = express();
var message = "Please fill out the form below to determine your postage rate:";

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware that goes with bodyparser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//middleware for static files -- set static path
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('pages/index');
});

app.post('/postage-rate', function(req,res){
    //console.log('done'); 
    var pt =  req.body.type;
    var pw = req.body.weight;
    console.log(pt);
    console.log(pw);
    
    if(pt==1 && pw>0 && pw<=1){
        result = "$0.50";
    }else if(pt==1 && pw>1 && pw<=2){
        result = "$0.71";
    }else if(pt==1 && pw>2 && pw<=3){
        result = "$0.92";
    }else if(pt==1 && pw>3 && pw<=3.5){
        result = "$1.13";
    }else if(pt==1 && pw>3.5){
        result = "NOT AVAILABLE - your letter must be delivered as 'large envelope'";
    }else if(pt==2 && pw<=1){
        result = "$0.47";
    }else if(pt==2 && pw>1 && pw<=2){
        result = "$0.68";
    }else if(pt==2 && pw>2 && pw<=3){
        result = "$0.89";
    }else if(pt==2 && pw>3 && pw<=3.5){
        result = "$1.10";
    }else if(pt==2 && pw>3.5){
        result = "NOT AVAILABLE - your letter must be delivered as 'large envelope'";
    }else if(pt==3 && pw<=1){
        result = "$1.00";
    }else if(pt==3 && pw>1 && pw<=2){
        result = "$1.21";
    }else if(pt==3 && pw>2 && pw<=3){
        result = "$1.42";
    }else if(pt==3 && pw>3 && pw<=4){
        result = "$1.63";
    }else if(pt==3 && pw>4 && pw<=5){
        result = "1.84";
    }else if(pt==3 && pw>5 && pw<=6){
        result = "$2.05";
    }else if(pt==3 && pw>6 && pw<=7){
        result = "$2.26";
    }else if(pt==3 && pw>7 && pw<=8){
        result = "$2.47";
    }else if(pt==3 && pw>8 && pw<=9){
        result = "$2.68";
    }else if(pt==3 && pw>9 && pw<=10){
        result = "$2.89";
    }else if(pt==3 && pw>10 && pw<=11){
        result = "$3.10";
    }else if(pt==3 && pw>11 && pw<=12){
        result = "$3.31";
    }else if(pt==3 && pw>12 && pw<=13){
        result = "$3.52";
    }else if(pt==3 && pw>13){
        result = "NOT AVAILABLE - Rate cannot be calculated because weight is too great.";
    }else if(pt==4 && pw>0 && pw<=4){
        result = "$3.50";
    }else if(pt==4 && pw>4 && pw<=8){
        result = "$3.75";
    }else if(pt==4 && pw>8 && pw<=9){
        result = "$4.10";
    }else if(pt==4 && pw>9 && pw<=10){
        result = "4.45";
    }else if(pt==4 && pw>10 && pw<=11){
        result = "$4.80";
    }else if(pt==4 && pw>11 && pw<=12){
        result = "$5.15";
    }else if(pt==4 && pw>12 && pw<=13){
        result = "$5.50";
    }else if(pt==4 && pw>13){
        result = "NOT AVAILABLE - Rate cannot be calculated because weight is too great.";
    }else {
        result = "Please fill in both fields.";
    }
    res.render('pages/rate');                       
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
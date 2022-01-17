var express = require('express');
var app = express();

app.set('view engine','ejs');

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

app.use('/', (req, res) => {
    //var toyid=req.query.id;
    var method = req.method;
    var url=req.url;
    var agent = req.headers['user-agent'];
    // if(toyid==null||typeof(toyid)=='undefined'){
    //     res.json({});
    // } else {
    //     res.json({ id:toyid,});
    // }
    //res.json({ msg : 'It work!',url1: url,method:method,agent:agent,});
    res.status(200);
    });

    app.use('/Toy', (req,res)=>{
        var toyid=req.query.id;
        if(toyid==null||typeof(toyid)=='undefined'){
            res.json({});
        } else {
            res.json({ id:toyid,});
        }
        //res.json({ msg : 'It work!',url1: url,method:method,agent:agent,});
        res.status(200);
        });

app.listen(3000, () => {
	console.log('Listening on port 3000');
    });



// Please do not delete the following line; we need it for testing!
module.exports = app;
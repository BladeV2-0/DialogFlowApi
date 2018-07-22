'use strict';

var listeningport = process.env.PORT || 3000;

const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.listen(listeningport, function () {
    console.log('Get space details, Bot running at ....' + listeningport);

})

app.post('/events', (req,res) => {
    console.log('Spacebooking being called by DialogFlow');
    //var string = JSON.stringify(req);
    //var objectValue = JSON.parse(string);

    console.log(req.body.queryresult);
    switch (req.body.result){
        case 'BookSpace' :
            console.log('Booking space...');
            return res.json({
                displayText: 'Sure, what is your Q-Number?',
                source: 'From Api'
            })
            break;
        case 'UserID' :
            break;

    }
});
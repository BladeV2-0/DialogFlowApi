'use strict';

var listeningport = process.env.PORT || 3000;

const express = require('express');
const bodyparser = require('body-parser');
//const { WebhookClient } = require('dialogflow-fulfillment');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.listen(listeningport, function () {
    console.log('Get space details, Bot running at ....' + listeningport);

})

app.post('/events', function (req,res)  {
    console.log('Spacebooking being called by DialogFlow');

    console.log(req.body);
    switch (req.body.queryResult.action){
        case 'BookSpace' :
            console.log('Booking space ' + req.body.queryResult.outputContexts[0].parameters.spacename);
            return res.json({
                fulfillmentText: 'Done, '+ req.body.queryResult.outputContexts[0].parameters.spacename +' is booked',
                source: 'From Api'
            })
            break;

    }
});

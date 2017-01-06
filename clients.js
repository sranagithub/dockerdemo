var _ = require('lodash');
var client=require('./model/client_schema.js');
module.exports = function (app) {
    client = [{
            id: "1",
            Name: "Linux-FROM CONTAINER",
            PhoneNo: "953518xxxx",
            role: "development"
        }, {
            id: "2",
            Name: "Mac",
            PhoneNo: "953518xxxx",
            role: "development"
        }, {
            id: "3",
            Name: "Windows",
            PhoneNo: "953518xxxx",
            role: "development"
        }

    ];
/*
*swagger: "2.0"
*info:
*  version: "0.0.0"
*  title: "Simple API"
*paths:
*  /:
*    get:
*      operationId: "rootGET"
*      parameters: []
*      responses:
*        200:
*          description: "OK"
*      x-swagger-router-controller: "Default"
*definitions: {}
*/
    app.get('/client', function (req, res) {
        res.send(client);
    });

    app.get('/clientById/:id', function (req, res) {
        var result = _.find(client, {
            id: req.params.id
        });
        res.send(result);
    });

    app.get('/clientsByName/:name', function (req, res) {
        var result = _.filter(client, {
            Name: req.params.name
        });
        var resultCaseInsensitive = _.filter(client, function (c) {
            return c.Name.toLowerCase() === req.params.name.toLowerCase();
        });

        res.send(resultCaseInsensitive);
    });
    //To be implemented
    app.get('/clientsByProperty/:propName/:propValue', function (req, res) {
        res.send(client);
    });

    app.put('/client', function (req, res) {
        _.filter(client, function (c) {
            return c.id.toLowerCase() === req.body.id.toLowerCase();
        }).map(function (c) {
            c.Name = req.body.Name,
                c.PhoneNo = req.body.PhoneNo,
                c.role = req.body.role
        })
        res.send("Updated");
    });

    app.delete('/client', function (req, res) {
        _.remove(client, function (c) {
            return c.id.toLowerCase() === req.body.id.toLowerCase();
        })
        res.send({
            "info": "Client Removed."
        });
    });

    app.post('/client', function (req, res) {
        var newClient=new client(req.body);
        newClient.save(function(err){
            res.json("error during save")
        }) 
        //client.push(req.body);
        res.send({
            "info": "Client added."
        });
    });

}

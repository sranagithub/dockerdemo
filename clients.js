(function () {
    var _ = require('lodash');
    var cSchema = require('./model/client_schema.js');
    module.exports = function (app) {
        client = [{
                Name: "Linux",
                PhoneNo: "953518xxxx",
                role: "development"
            }, {
                Name: "Mac",
                PhoneNo: "953518xxxx",
                role: "development"
            }, {
                Name: "Windows",
                PhoneNo: "953518xxxx",
                role: "development"
            }

        ];

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
            var newClient = new cSchema(req.body);
            newClient.save(function (err) {
                if (err != null) {
                    console.log("some error occoured  {0}", err)
                } else {
                    res.send({
                        "info": "Client Saved."
                    });
                }
            });

        });
    }
})();

var data = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(data)
    });

    app.post("/api/friends", function(req, res) {
        data.push(req.body);
        res.json(true);
    });
};
var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(data) {
        var burgerObject = {
            burgers:data
        };
        res.render("index", burgerObject);
    });
  });
  
  app.post("/", function(req, res) {
    db.burgers.create({
        burger_name: req.body.name
    }).then(function() {
        res.redirect("/");
    });
  });
 
  app.put("/:id", function(req, res) {
    db.burgers.update({
        devoured: true
    },
    {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/");
    });
  });

  app.delete("/:id", function(req, res) {
    db.burgers.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.redirect("/");
    });
  });

};
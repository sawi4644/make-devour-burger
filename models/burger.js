const orm = require("../config/orm")

const burger = {
    all: function (burg) {
        orm.all("burgers", function (result) {
            burg(result);
        });
    },
    
    insert: function (cols, vals, burg) {
        orm.create("burgers", cols, vals, function (result) {
            burg(result);
        });
    },
    update: function (objColVals, condition, burg) {
        orm.update("burgers", objColVals, condition, function (result) {
            burg(result);
        });
    }
};

module.exports = burger;
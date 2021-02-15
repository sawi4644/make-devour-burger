const connection= require("../config/connection")
const orm= require("../config/orm")

const burger={
    all: function(burg) {
        orm.selectAll("burgers", function(data) {
          burg(data);
        });
      },
    //insert
    //update
}

module.exports=burger;
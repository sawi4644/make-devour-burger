const connection = require("./connection.js");

// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

 // Helper function to convert object key/value pairs to SQL syntax 
  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }

//creating mysql statements
var orm = {
    selectAll: function(callback) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        console.log('NICE! You have selected all data')
        console.log(result)
        callback(result);
      });
    },
    insertOne: function (burgerName, callback) {
      var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + burgerName + "', false)";
      connection.query(queryString, function (error, result) {
          if (error) {
              console.log("MYSQL INSERT QUERY ERROR: " + error);
          }
          console.log("New burger created: " + burgerName + "!");
          callback(result);
      });
    },
    
    updateOne: function(table, objColVals, condition, burg) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objColVals;
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        burg(result);
      });
    },
    
  };
  

module.exports = orm;
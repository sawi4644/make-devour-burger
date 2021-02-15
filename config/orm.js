const connection= require("./connection.js");

const orm ={
selectAll: function(tableName){
    connection.query('SELECT * FROM ??' , tableName, function(err, data){
        if(err) throw errconsole.log(data)
    })
// },insertOne: function(tableName, whatBurger, devoured){
//     connection.query('INSERT INTO ?? VALUES WHERE ?? = ?', tableName, function(err, data){
//         if(err) throw errconsole.log(data)
//     })
// },updateOne: function(tableName){
//     connection.query('SELECT * FROM ?? WHERE ?? = ?', tableName, function(err, data){
//         if(err) throw errconsole.log(data)
//     })

},
}


module.exports=orm;
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

module.exports = async () => {
    
    return await con.connect(function(err) {
        if (err){
            throw err;
        } else{
            console.log("Connected!");
            return true;
        }
      });
    
};
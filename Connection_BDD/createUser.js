var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "web_service"
});

module.exports = async (pseudo,pwd) => {
await con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO USER (pseudo, password) VALUES (?, ?)";
  con.query(sql,pseudo,pwd, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

};

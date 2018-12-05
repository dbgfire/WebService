var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'web_service'
})

module.exports = async ID => {
  await con.connect(function (err) {
    if (err) throw err
    console.log('Connected!')
    var sql = 'SELECT * FROM BOOK WHERE ID=?'
    con.query(sql, ID, function (err, result) {
      if (err) throw err
      console.log('UPDATE success')
      return 'UPDATE success'
    })
  })
}

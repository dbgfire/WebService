var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'web_service'
})

module.exports = async (title, descrip, urlImage, ID) => {
  await con.connect(function (err) {
    if (err) throw err
    console.log('Connected!')
    var sql = 'UPDATE BOOK set title=?, description=?,urlImage=? WHERE ID=?'
    con.query(sql, title, descrip, urlImage, ID, function (err, result) {
      if (err) throw err
      console.log('UPDATE success')
      return 'UPDATE success'
    })
  })
}

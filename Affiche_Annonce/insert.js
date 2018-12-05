var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'web_service'
})

module.exports = async (title, descrip, urlImage) => {
  await con.connect(function (err) {
    if (err) throw err
    console.log('Connected!')
    var sql = 'INSERT INTO BOOK (title, description,urlImage) VALUES (?, ?, ?)'
    con.query(sql, title, descrip, urlImage, function (err, result) {
      if (err) throw err
      console.log('Add success')
      return 'Add success'
    })
  })
}

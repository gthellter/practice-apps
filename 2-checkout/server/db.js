const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => {
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS address (\
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
        line1 CHAR(200),\
        line2 CHAR(200),\
        city CHAR(200),\
        state CHAR(200),\
        zip INT(5),\
        phone CHAR(200)\
        )")
      }
        ).then(()=> db.queryAsync(
      "CREATE TABLE IF NOT EXISTS payment (\
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        cc_number INT(200),\
        expiration_date INT(4),\
        billing_zip INT(5),\
        ccv INT(4))\
    "))
  .then(() => {

    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS login (\
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        name CHAR(200),\
        email CHAR(200),\
        password CHAR(200),\
        address_id INT,\
        payment_id INT,\
        FOREIGN KEY (address_id)\
            REFERENCES address(id),\
        FOREIGN KEY (payment_id)\
            REFERENCES payment(id)\
        )")}).then(() => {
          //authentication
          db.queryAsync(
            "CREATE TABLE IF NOT EXISTS authentication (\
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
            name CHAR(20), \
            auth_key CHAR(200))"
          )
        })
  .catch((err) => console.log(err));

module.exports = db;

var db = require('./db.js');

//gets user information for a particular username
const getUserData = (username) => {

};

//saves all user data
const saveUserData = (userDataObject) => {
//start with the cc info and go until you finish the login info
var payment = userDataObject.userPage3;
var shipping = userDataObject.userPage2;
var login = userDataObject.userPage1;
 return new Promise((resolve, reject) => {

  db.queryAsync(
  `INSERT INTO payment(cc_number, expiration_date, billing_zip, ccv) values('${payment.ccNumber}', '${payment.expDate}', '${payment.billingZip}', '${payment.ccvNumber}')`
).then(()=> {
  db.queryAsync(
  `INSERT INTO address(line1, line2, city, state, zip, phone) values('${shipping.address1}', '${shipping.address2}', '${shipping.city}', '${shipping.state}', '${shipping.zip}', '${shipping.phone}')`);
  }).then(() => {
    db.queryAsync(
      `INSERT INTO login(name, email, password, payment_id, address_id) values('${login.name}', '${login.email}', '${login.password}', (SELECT id FROM payment WHERE cc_number = ${payment.ccNumber} LIMIT 1), (SELECT id FROM address WHERE phone = ${shipping.phone} LIMIT 1))`
    )
  }).then(res => resolve(res))
  .catch(err => reject(err));
})
}


//authenticates that user hasn't submitted a form already, returns true if user has submitted
const authenticateUser = (name, session_id) => {

  return new Promise((resolve, reject) => {
    db.queryAsync(
    `SELECT name FROM authentication WHERE auth_Key = '${session_id}'`
  ).then(results => {
    result = results[0][0].name;
    resolve(result);
  }).catch(err => reject(err));
});
}

exports.authenticateUser = authenticateUser;
exports.saveUserData = saveUserData;
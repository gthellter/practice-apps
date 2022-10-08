import react from 'react';

const Page4 = ({userPage1, userPage2, userPage3, setPage, setReturnToConfirmation, handlePost}) => {

  const handleEditPage1 = (e) => {
    e.preventDefault();
    setPage(1);
    setReturnToConfirmation(true);
  }

  const handleEditPage2 = (e) => {
    e.preventDefault();
    setPage(2);
    setReturnToConfirmation(true);
  }

  const handleEditPage3 = (e) => {
    e.preventDefault();
    setPage(3);
    setReturnToConfirmation(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePost();
    setPage(0);
  }
  return (
    <>
      <div className="loginInformationConfirmation">
        <h1>Please confirm the below information</h1>
        <h2>Login Information</h2>
        <p>Name: {userPage1.name}</p>
        <p>Email: {userPage1.email}</p>
        <p>password: {new Array(userPage1.password.length).join('✹')}</p>
        <button onClick={handleEditPage1}>Click here to edit login information</button>
      </div>
      <div className="shippingInformationConfirmation">
        <h2>Shipping Information</h2>
        <p>Address 1: {userPage2.address1}</p>
        <p>Address 2: {userPage2.address2}</p>
        <p>City: {userPage2.city}</p>
        <p>State: {userPage2.state}</p>
        <p>ZipCode: {userPage2.ZipCode}</p>
        <p>Phone Number: {userPage2.phone}</p>
        <button onClick={handleEditPage2}>Click here to edit Shipping information</button>
      </div>
      <div className ="paymentInformationConfirmation">
        <h2>Payment Information</h2>
        <p>Credit Card Number: {userPage3.ccNumber}</p>
        <p>Expiration Date: {userPage3.expDate}</p>
        <p>ccv Number: {userPage3.ccvNumber}</p>
        <p>Billing ZipCode: {userPage3.billingZip}</p>
        <button onClick={handleEditPage3}>Click here to edit Payment information</button>
      </div>
      <button className="submitOrder" onClick={handleSubmit}>Submit Order</button>
      </>
  )
}

export default Page4;
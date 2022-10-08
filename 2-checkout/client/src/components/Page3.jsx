import react, {useState} from 'react';

const Page3 = ({setUserPage3, setPage}) => {

  const [ccNumber, setccNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [ccvNumber, setccvNumber] = useState('');
  const [billingZip, setBillingZip] = useState('');


  const handleccNumber = (e) => {
    e.preventDefault();
    setccNumber(e.target.value);
  }

  const handleExpDate = e => {
    e.preventDefault();
    setExpDate(e.target.value);
  }

  const handleccvNumber = e => {
    e.preventDefault();
    setccvNumber(e.target.value);
  }

  const handleBillingZip = e => {
    e.preventDefault();
    setBillingZip(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    var newData = {
    ccNumber,
    expDate,
    ccvNumber,
    billingZip
    };
    setUserPage3(newData);
    setPage(4);
  }

  const handlePrevious = e => {
    e.preventDefault();
    setPage(2);
  }

  return (
    <div className="loginPage" >
      <h1>👇🏽Please enter Shipping Information👇🏽</h1>
      <form className="loginForm">
        <input value={ccNumber} onChange={handleccNumber} placeholder="Credit Card Number"/>
        <input value={expDate} onChange={handleExpDate} placeholder="Expiration Date"/>
        <input value={ccvNumber} onChange={handleccvNumber} placeholder="ccv Number"/>
        <input value={billingZip} onChange={handleBillingZip} placeholder="Billing ZipCode"/>

        <button onClick={handlePrevious}>Previous Page</button>
        <button onClick={handleSubmit}>Next Page</button>
      </form>
    </div>
  )
}

export default Page3;
import react, {useState} from 'react';

const Page2 = ({setUserPage2, setPage, handleReturn}) => {

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddress1 = (e) => {
    setAddress1(e.target.value);
  }

  const handleAddress2 = (e) => {
    setAddress2(e.target.value);
  }

  const handleCity = (e) => {
    setCity(e.target.value);
  }

  const handleState = e => {
    setState(e.target.value);
  }

  const handleZip = e => {
    setZip(e.target.value);
  }

  const handlePhone = e => {
    setPhone(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    var page2Data = {
      address1,
      address2,
      city,
      state,
      zip,
      phone
    }
    setUserPage2(page2Data);
    setPage(3);
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    setPage(1);
  }

  return (
    <div className="loginPage" >
      <h1>👇🏽Please enter Shipping Information👇🏽</h1>
      <form className="loginForm">
        <input value={address1} onChange={handleAddress1} placeholder="Address Line 1"/>
        <input value={address2} onChange={handleAddress2} placeholder="Address Line 2"/>
        <input value={city} onChange={handleCity} placeholder="City"/>
        <input value={state} onChange={handleState} placeholder="State"/>
        <input value={zip} onChange={handleZip} placeholder="zip-code"/>
        <input value={phone} onChange={handlePhone} placeholder="Phone"/>
        <button onClick={handlePrevious}>Previous Page</button>
        <button onClick={handleSubmit}>Next Page</button>
      </form>
    </div>
  )
}

export default Page2;
import react, {useState} from 'react';

const Page1 = ({setUserPage1, userPage1, setPage, returnToConfirmation, handleReturn}) => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePassword = (e) => {
    console.log('password', e.target.value);
    setPassword(e.target.value);
  }
  const hidePassword = (pass) => {
    return new Array(pass.length).join( '✹');
  }

  const handleName = (e) => {
    console.log('name', e.target.value);
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    console.log('E-mail', e.target.value)
    setEmail(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserPage1({
      'name': name,
      'email': email,
      'password': password
    });
    setPage(2);
  }

  return (
    <div className="loginPage" >
      <h1>👇🏽Please Create Account Below👇🏽</h1>
      <form className="loginForm">
        <input value={name} onChange={handleName} placeholder="Name"/>
        <input value={email} onChange={handleEmail} placeholder="E-mail"/>
        <input value={password} type="password" onChange={handlePassword} placeholder="Password"/>
        {returnToConfirmation ? <button onClick={handleReturn}>Return</button> : <button onClick={handleSubmit}>Next Page</button>}
      </form>
    </div>
  )
}

export default Page1;
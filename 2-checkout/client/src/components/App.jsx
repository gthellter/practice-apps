import react, {useState} from 'react';
import HomePage  from './HomePage.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
import Page4 from './Page4.jsx';
import $ from 'jquery';

const App = () => {
  const [page, setPage] = useState(0);
  const [userPage1, setUserPage1] = useState({});
  const [userPage2, setUserPage2] = useState({});
  const [userPage3, setUserPage3] = useState({});
  const [returnToConfirmation, setReturnToConfirmation] = useState(false);

  const handlePost = () => {
    var data = {userPage1, userPage2, userPage3};
    var dataString = JSON.stringify(data);
    $.ajax('/userData', {
      'method': 'POST',
      'contentType': 'application/json',
      'data': dataString,
      'success': (results) => {
        console.log(results);
      } ,
      'error': (err) => {
        console.log('error sending POST', err);
      }
    })
  }

  const handleReturn = (e) => {
    e.preventDefault();
    setPage(4);
  }

  return (
    <div>

    {!page ? <HomePage setPage={setPage} /> : null }
    {page === 1 ? <Page1 setPage={setPage} userPage1={userPage1} setUserPage1={setUserPage1} returnToConfirmation={returnToConfirmation} handleReturn={handleReturn} /> : null}
    {page === 2 ? <Page2 setPage={setPage} userPage2={userPage2} setUserPage2={setUserPage2} returnToConfirmation={returnToConfirmation} handleReturn={handleReturn}/> : null}
    {page === 3 ? <Page3 setPage={setPage} userPage3={userPage3} setUserPage3={setUserPage3} returnToConfirmation={returnToConfirmation} handleReturn={handleReturn}/> : null}
    {page === 4 ? <Page4 setPage={setPage} userPage1={userPage1} userPage2={userPage2} userPage3={userPage3}  setPage={setPage} setReturnToConfirmation={setReturnToConfirmation} handlePost={handlePost}/> : null}
    </div>

  )
}

export default App;
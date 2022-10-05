import react, {useState, useEffect} from 'react';
import Popup from './Popup.jsx';
import axios from 'axios';

//new Axios instance
const inst = axios.create({
  baseURL: 'http://localhost:3000/'
})

const App = () => {

  const [isOpen, setOpenState] = useState(false);

  const togglePopup = () => {
    setOpenState(!isOpen);
  }

  return (
    <div>
      <div>
        <h1 className='title' > The ULTIMATE 🤘🏼 Glossary App</h1>
        <button onClick={togglePopup}>New</button>
      </div>
      <div>
        {isOpen ? <Popup toggle={togglePopup} inst={inst} /> : null }
      </div>

    </div>
  )
}

export default App;
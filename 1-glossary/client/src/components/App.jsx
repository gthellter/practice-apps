import react, {useState, useEffect} from 'react';
import Popup from './Popup.jsx';
import GlossaryList from './GlossaryList.jsx';
import axios from 'axios';

//new Axios instance
const inst = axios.create({
  baseURL: 'http://localhost:3000/'
})

const App = () => {

  const [isOpen, setOpenState] = useState(false);
  const [definitions, setDefinitions] = useState([]);

  const termBeingEdited = '';

  useEffect(() => {
    inst.get('/glossary').then(results => {
      setDefinitions(results.data);
    })
  }, []);

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
        {isOpen ? <Popup setDefinitions={ setDefinitions } toggle={togglePopup} inst={inst} /> : null }
      </div>
      <div className='list'>
        <GlossaryList setDefinitions={setDefinitions} definitions={definitions} inst={inst}  />
      </div>
    </div>
  )
}

export default App;
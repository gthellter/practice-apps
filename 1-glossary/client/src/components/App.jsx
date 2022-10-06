import react, {useState, useEffect} from 'react';
import Popup from './Popup.jsx';
import GlossaryList from './GlossaryList.jsx';
import Search from './Search.jsx';
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
    <div className="mainApp" >
      <h1 className='title' > The ULTIMATE 🤘🏼 Glossary App</h1>
      <div className="body">
        <div className="search_new">
          <Search setDefinitions={setDefinitions} definitions={definitions} inst={inst}/>
          <button onClick={togglePopup}>New Definition</button>
          {isOpen ? <Popup setDefinitions={ setDefinitions } toggle={togglePopup} inst={inst} /> : null }
        </div>
        <div>
        </div>
        <div className='list'>
          <GlossaryList setDefinitions={setDefinitions} definitions={definitions} inst={inst}  />
        </div>
      </div>
    </div>
  )
}

export default App;
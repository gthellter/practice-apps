import react, {useState, useEffect} from 'react';


const Popup = ({ toggle, inst, setDefinitions }) => {

  //Show Term and Definition as user is typing
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleDefinitionChange = (e) => {
    setDefinition(e.target.value)
  };

  //Handle pressing the submit button
  const handleSubmitDefinition = (e) => {
    e.preventDefault();
    inst.post('/glossary', {
      'term': term,
      'definition': definition
    }).then(res => {
      setDefinitions(res.data);
    })
  };

  const handleClose = (e) => {
    e.preventDefault();
    toggle();
  }

  return (
    <div className='newDefinition' >
      <form className="newForm" onSubmit={handleSubmitDefinition}>
        <label>
          Term:
        <input value={term} onChange={handleTermChange} />
        </label>
        <label>
          Definition:
        <textarea value={definition} onChange={handleDefinitionChange} />
        </label>
        <button className='submitDefinition'onClick={handleSubmitDefinition}>Submit</button>
        <button className='closePopup' onClick={handleClose}> Close</button>
      </form>
    </div>
  )
}

export default Popup;
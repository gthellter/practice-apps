import react, {useState, useEffect} from 'react';


const Popup = ({ toggle, inst }) => {

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
      'id': null,
      'term': term,
      'definition': definition
    })
    console.log(definition);
    console.log(term);

  };

  const handleClose = (e) => {
    e.preventDefault();
    toggle();
  }

  return (
    <div className='newDefinition' >
      <h2>Please enter new definition</h2>
      <form onSubmit={handleSubmitDefinition}>
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
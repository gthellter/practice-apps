import react, {useState} from 'react';

const DefinitionEdit = ({changeEditable, definition, setDefinitions, inst}) => {

  const [defValue, setDefValue] = useState(definition.definition);

  const onClickHandler = (e) => {
    e.preventDefault();
    if (definition.definition == defValue) {
      changeEditable();
    } else {
      inst.post('/glossary', {
        'term': definition.term,
        'definition': defValue
      }).then(results => {
        setDefinitions(results.data);
        changeEditable();
      }).catch(err => console.log('Error posting edit: ',err));
    }
  }

  const onChangeHandler = (e) => {
    e.preventDefault();
    setDefValue(e.target.value);
  }
  const cancelHandler = (e) => {
    e.preventDefault();
    changeEditable();
  }

  const deleteHandler = (e) => {
    e.preventDefault();
    inst.delete('/glossary').then(results => {
      setDefinitions(results.data);
      changeEditable();
    }).catch(err => console.log('Error deleting: ', err))
  }

  return (
    <div>
      <form>
        <button className="deleteButton" onClick={deleteHandler}>Delete {definition.term} ?</button>
        <textarea value={defValue} className="editDefinition" onChange={onChangeHandler} ></textarea>
        <div className="editButtons">
          <button className="cancelButton" onClick={cancelHandler}>Cancel</button>
          <button className="editButton" onClick={onClickHandler}>Confirm Edit</button>
        </div>
      </form>
    </div>
  )
}
export default DefinitionEdit;
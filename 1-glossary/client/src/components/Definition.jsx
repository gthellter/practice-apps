import react, {useState} from 'react';
import DefinitionEdit from './DefinitionEdit.jsx';

const Definition = ({definition, inst, setDefinitions}) => {

  const [editable, changeEditable] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();
    changeEditable(!editable);
  }

  return (
      <div className='term'>
        { !editable ? <h3>{definition.term}</h3> : null }
        { !editable ? <p onClick={onClickHandler} >{definition.definition}</p> : null }
      { editable ? <DefinitionEdit setDefinitions={setDefinitions} definition={definition} changeEditable={changeEditable} inst={inst}/> : null}
      </div>
  )
}

export default Definition;
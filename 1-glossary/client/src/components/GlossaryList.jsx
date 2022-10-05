import react, {useState} from 'react';
import Definition from './Definition.jsx';

const GlossaryList = ({definitions, togglePopup, setDefinitions, inst}) => (
    <div>
      {definitions.map((definition, index) => {
       return ( <Definition  setDefinitions={setDefinitions} definition={definition} inst={inst} key={index} />)
      })}
    </div>
  )

export default GlossaryList;
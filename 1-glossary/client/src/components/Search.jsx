import react, {useState, useEffect} from 'react';

const Search = ({setDefinitions, definitions, inst}) => {

  const [searchText, setSearchText] = useState('');



  const searchHandler = (e) =>  {
    if(e.target.value === '') {
      inst.get('/glossary').then(results => {
        setDefinitions(results.data);
      }).catch(err => console.log('Error geting all results from search: ', err))
    }
    e.preventDefault();
    setSearchText(e.target.value);
    inst.post('/search', {
      'term': searchText
    }).then(results => {
      setDefinitions(results.data);
    }).catch(err => { console.log('Error on recieving search', err)})

  }

  return (
    <input onChange={searchHandler} value={searchText} placeholder="Search Here"></input>
  )
}

export default Search;
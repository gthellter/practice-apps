import react, {useState} from 'react';

const Pages = ({page, setPage}) => {

  return (
    <div className="pages">
     { page ? <button className="previous" onClick={setPage(page - 1)}>Previous Page</button> : null }
      <button className="next" onClick={setPage(page + 1)}>Next Page</button>

    </div>

  )
}
export default Pages;
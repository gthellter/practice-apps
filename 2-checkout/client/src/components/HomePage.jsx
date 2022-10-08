import react, {useState} from 'react';

const HomePage = ({setPage}) => {

  const page1Handler = (e) => {
    setPage(1);
  }

  return (
  <div>
    <h1>Welcome to theCheckout!!!!</h1>
    <button onClick={page1Handler}>Checkout</button>
    <p>Just gotta Checkout, dont worry about the products😉</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
</div>

  )
}

export default HomePage;
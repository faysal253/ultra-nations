import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      })
      .catch(err => console.log(err))
  }, [])

  const handleAddCountry = (country) => {
    console.log('add country', cart)
    const newCart = [...cart, country]
    setCart(newCart)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Country loaded:{countries.length}</h1>
        <h4>Country added:{cart.length}</h4>
        <Cart cart={cart}></Cart>
        <ul>
          {
            countries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country>)
          }
        </ul>
      </header>
    </div>
  );
}


export default App;

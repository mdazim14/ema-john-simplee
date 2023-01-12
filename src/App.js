import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {

  const [favourite, setFevourite] = useState([]);

  const [show, setShow] = useState(false);
  const handleCartClick = () => {
    setShow(true)
  }

  // const addToFevourite = (prevState, product) => {
  //   return [...prevState, product]
  // }

  const handleAddToFavourite = (product) => {

    // setFevourite((prevState) => addToFevourite(prevState, product))
     setFevourite((prevState) => ([...prevState, product]))
  }

  console.log("added fev", favourite)

  // const handleClick = (event) => {
  //   console.log(event)
  // }


  return (
    <div>
      {/* <Button onClick={(event) => console.log(event)} >Clicked me</Button>
      <Button onClick={(event) => handleClick(event)} >Clicked one</Button>
      <Button onClick={handleClick} >Clicked two</Button> */}


      <Header handleCartClick={handleCartClick} ></Header>
      <Shop show={show} setShow={setShow} handleAddToFavourite={handleAddToFavourite}></Shop>
    </div>
  );
}

export default App;

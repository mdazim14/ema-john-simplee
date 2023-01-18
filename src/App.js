import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [favourite, setFevourite] = useState([]);

  const [show, setShow] = useState(false);

  const handleCartClick = () => {
    setShow(true)
  }

  // const handleAddToFavourite = (product) => {

  //   const exists = favourite.find(item => item.id === product.id);

  //   if (!exists) {
  //     const newItem = [...favourite, product];
  //    setFevourite(newItem);
  //   }
  //   else{
  //     const rest = favourite.filter(item => item.id !== product.id);
  //     setFevourite(rest);
  //   }

  // }


  // console.log("clicked", favourite)

  // const handleAddToFavourite = (product) => {
  //   // console.log("clicked", product)

  //   setFevourite((prevState) => addToFevourite(prevState, product))
  //   //  setFevourite((prevState) => ([...prevState, product]))
  // }



  const handleSearch = (event) => {

    console.log("click search", event)

  }


  return (
    <div>
      {/* <Button onClick={(event) => console.log(event)} >Clicked me</Button>
      <Button onClick={(event) => handleClick(event)} >Clicked one</Button>
      <Button onClick={handleClick} >Clicked two</Button> */}


      <Header handleSearch={handleSearch} handleCartClick={handleCartClick} ></Header>
      <Shop favourite={favourite} show={show} setShow={setShow}></Shop>
    </div>
  );
}

export default App;

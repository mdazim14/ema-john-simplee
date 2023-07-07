import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BrandCollection from './components/BrandCollection';

function App() {

  const [favourite, setFevourite] = useState([]);
  const [show, setShow] = useState(false);
  const handleCartClick = () => {
    setShow(true)
  }

  return (
    <div>
      {/* 
      <Button onClick={(event) => console.log(event)} >Clicked me</Button>
      <Button onClick={(event) => handleClick(event)} >Clicked one</Button>
      <Button onClick={handleClick} >Clicked two</Button> */}

      <Routes>
        <Route path="/" element={<>
          <Header handleCartClick={handleCartClick} ></Header>
          <Shop favourite={favourite} show={show} setShow={setShow}></Shop>
        </>} />

        <Route path="/:brandName" element={<>
          <Header handleCartClick={handleCartClick} ></Header>
          <BrandCollection> </BrandCollection>
        </>} />

      </Routes>



    </div>
  );
}

export default App;

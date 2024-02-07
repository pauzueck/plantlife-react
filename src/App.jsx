import './App.css'
import NavBar from './Components/navbar/navbar';
import ItemListContainer from './Components/itemListContainer/itemlistcontainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <NavBar/>
    </div>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
    <>
      
      
    </>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

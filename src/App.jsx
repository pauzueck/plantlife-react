import './App.css'
import NavBar from './Components/navbar/navbar';
import ItemListContainer from './Components/itemListContainer/itemlistcontainer';
import ItemDetailContainer from './Components/itemDetailContainer/itemDetailcontainer';
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
        <Route path="/plant/:id" element={<ItemDetailContainer />} />
    <>
      
      
    </>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css'
import NavBar from './Components/navbar/navbar';
import ItemListContainer from './Components/itemListContainer/itemlistcontainer';

function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting='The place to find your perfect plant companion'/>
      </div>
      
    </>
  );
}

export default App;

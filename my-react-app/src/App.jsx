import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <route path="/" element={<ItemListContainer />} />
        <route path="/category/:cateoryId" element={<ItemListContainer />} />
        <route path="/item/:itemId" element={<ItemDetailContainer />} />
        <route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import { useContext } from 'react';
import { Context } from './context/Context';


function App() {
  const {setCount} = useContext(Context)
  return (
    <Layout>
      <Routes>
        <Route path='/products' element={<Products />} />
      </Routes>

    </Layout>
  );
}

export default App;

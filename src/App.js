import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom'
// import Products from './pages/Products';
// import BasketPage from './pages/BasketPage';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
import { routes } from './routes/Routes';



function App() {

  return (
    <Layout>
      <Routes>
        {
          routes && routes.map((item, key) => {
            return <Route key={key} path={item.path} element={item.element} />
          })
        }
      </Routes>
    </Layout>
  );
}

export default App;

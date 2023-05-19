import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
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
    </Layout >
  );
}

export default App;

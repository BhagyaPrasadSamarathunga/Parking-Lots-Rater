import Layout from './components/layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './utils/constants';
import Home from './pages/home/Home';

function App() {

  return (
    <Layout>
       <Routes>
          <Route path="/" element={<Navigate to={routes.HOME} />} />
          <Route
          path={routes.HOME}
          element={
              <Home />
          }
        />
       </Routes>
    </Layout>
  )
}

export default App

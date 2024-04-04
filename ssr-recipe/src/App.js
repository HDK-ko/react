import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <hr/>
      <Routes>
        <Route path="/red" element={<RedPage/>} />
        <Route path="/blue" element={<BluePage/>} />
      </Routes>
    </div>
  )
}

export default App;

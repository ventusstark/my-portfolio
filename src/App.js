import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import PrimarySchool from './pages/PrimarySchool';
import UniversityLife from './pages/UniversityLife';
import website from './styles/website.css'

function App() {
  return (

    <Router>
        <div>
          <Navbar/>

          <div className='webpage-container'>
            {/* Rest of your app content goes here */}
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/prisch" element={<PrimarySchool />} />
              <Route path="/university-life" element={<UniversityLife />} />
            </Routes>
          </div>
        </div>
        
      
    </Router>


  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import PrimarySchool from './pages/PrimarySchool';
import UniversityLife from './pages/UniversityLife';
import website from './styles/website.css'
import EducationPage from './pages/EducationPage';

function App() {
  return (

    <Router>
        <div>
          <Navbar/>

          <div className='webpage-container'>
            {/* Rest of your app content goes here */}
            <Routes>
              <Route path="/" element={<MainPage />} />
              
              
              
              <Route path="/education" element={<EducationPage />} />
              <Route path="/education/primary-school" element={<PrimarySchool />} />


              <Route path="/university-life" element={<UniversityLife />} />
              
            </Routes>
          </div>
        </div>
        
      
    </Router>


  );
}

export default App;

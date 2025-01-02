import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import MainPage from './pages/MainPage';
import PrimarySchool from './pages/PrimarySchool';
import UniversityLife from './pages/UniversityLife';

import website from './styles/website.css';

import Achievements from "./pages/Achievements";
import EducationPage from './pages/EducationPage';

import Circle from './components/cursor-trackers/Circle';
import Moogle from './components/cursor-trackers/Moogle';
import cursorObjects from './styles/cursorObjects.css'

function App() {

  
  return (

    <Router>
        <div>

          {/* Item(circle) that follows the Cursor  */}
          {/* <Circle/> */}
          {/* <Moogle/> */}

          <Navbar/>

          

          <div className='webpage-container'>
            {/* Rest of your app content goes here */}
            <Routes>
              <Route path="/" element={<MainPage />} />
              
              <Route path="/about-me/achievements" element={<Achievements />} />
              
              <Route path="/education" element={<EducationPage />} />
              
              <Route path="/education/primary-school" element={<PrimarySchool />} />
              <Route path="/education/secondary-school" element={<PrimarySchool />} />
              <Route path="/education/post-secondary" element={<PrimarySchool />} />


              <Route path="/university-life" element={<UniversityLife />} />
              
            </Routes>
          </div>


        </div>
        
      
    </Router>


  );
}

export default App;

import './App.css';
import { Main } from './pages/Main/Main';
import { Route, NavLink, Routes } from 'react-router-dom';
import { AllCourses } from './pages/AllCourses/AllCourses';
import { MyCourses } from './pages/MyCourses/MyCourses';
import { Courses } from './pages/Courses/Courses';

function App() {
  return (
    <div className="App">
       <div className="header-box">
        <div className="container">
          <header className="header">
            <div>
              <h3>e-courses {/* img then */}</h3>
            </div>
            <nav>
            <NavLink className="header__nav-link" to="/">
              Home 
            </NavLink>
            <NavLink className="header__nav-link" to="/allcourses">
              All Courses
            </NavLink>
            <NavLink className="header__nav-link" to="/mycourses">
              My Courses
            </NavLink>
           
            </nav>
            <div>
              <NavLink className={'login'} to="/">Login</NavLink>
              <NavLink className={'signup'} to="/">Sign up for free</NavLink>
            </div>
           
          </header>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/allcourses" element={<AllCourses />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/" element={""} />
        </Routes>
      </div>
      <div className="footer-box">
        <div className="container">
          <div className="footer">
            <h3>Made with love by MrPresident, Shohhen & AVI</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import { FaLinkedin, FaGithub, FaGitlab, FaEnvelope, FaBars } from 'react-icons/fa'; 
import AboutMe from './AboutMe';
// import MealKitPlatform from './MealKitPlatform';
// import CoronavirusClassifier from './CoronavirusClassifier';
// import OfficeResourceManagement from './OfficeResourceManagement';
// import HrApplication from './HrApplication';
// import Cambio from './C++ambio';
// import WorldCup2022Simulator from './WorldCup2022Simulator';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="py-2 w-full bg-slate-300">
          <div className="flex flex-row w-fit gap-x-4 justify-start">
            <FaBars size={30} title="Menu" className="text-white mt-2 ml-2"/>
            <Link to="/"><img src="/logoDimitrije2.png" alt="Dimitrije logo" className="w-24"/></Link>
          </div>
        </header>
        <Routes>
          <Route>
            <Route index exact path="/" element={<Home/>} />
            <Route path="/about-me" element={<AboutMe/>}/>
            {/* <Route path="/meal-kit-platform" element={<MealKitPlatform/>}/>
            <Route path="/coronavirus-classifier" element={<CoronavirusClassifier/>}/>
            <Route path="/office-resource-management" element={<OfficeResourceManagement/>}/>
            <Route path="/hr-application" element={<HrApplication/>}/>
            <Route path="/c++ambio" element={<Cambio/>}/>
            <Route path="/world-cup-2022-simulator" element={<WorldCup2022Simulator/>}/> */}
          </Route>
        </Routes>
        <footer className="py-4 w-full bg-slate-300 text-center">
            <div className="w-full flex flex-row justify-center gap-4 mx-auto">
                    <a href="https://www.linkedin.com/in/dimitrije-petrovic-90827524b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://gitlab.com/DimePetrovic" target="_blank" rel="noopener noreferrer">
                        <FaGitlab size={30} />
                    </a>
                    <a href="https://github.com/DimePetrovic" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                    <a href="mailto:d7petrovic@gmail.com">
                        <FaEnvelope size={30} />
                    </a>
            </div>

            <p>© 2024 Dimitrije Petrović. All Rights Reserved.</p>

            {/* <div className="footer-links">
              <a href="/about">About Me</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/contact">Contact</a>
            </div> */}
        </footer>  
      </div>
    </Router>
  );
}

export default App;

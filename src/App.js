import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import { FaLinkedin, FaGithub, FaGitlab, FaEnvelope } from 'react-icons/fa'; 
import AboutMe from './AboutMe';
// import MealKitPlatform from './MealKitPlatform';
// import CoronavirusClassifier from './CoronavirusClassifier';
// import OfficeResourceManagement from './OfficeResourceManagement';
// import HrApplication from './HrApplication';
// import Cambio from './C++ambio';
// import WorldCup2022Simulator from './WorldCup2022Simulator';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import MealKitPlatform from './MealKitPlatform';
import Playground from './Playground';
import NotFound from './NotFound';
import AVLTreesComponent from './avl-components/AVLTreesComponent';
import AVLTreesBasics from './avl-components/AVLTreesBasics';
import { LanguageContext } from './LanguageContext';
import { useContext } from 'react';

function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const footerParagraphSerbian = "Dimitrije Petrović - Softver inženjer";
  const footerParagraphEnglish = "Dimitrije Petrović - Software Engineer";

  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <header className="py-2 w-full bg-slate-300">
          <div className="flex flex-row w-full justify-between">
            {/* <FaBars size={30} title="Menu" className="text-white mt-2 ml-2"/> */}
            <Link to="/"><img src={`${process.env.PUBLIC_URL}/logoDimitrije2.png`} alt="Dimitrije logo" className="w-24 ml-4"/></Link>
            <div className="flex flex-row mr-4"><button onClick={() => toggleLanguage('EN')} className={`text-white px-2 text-3xl font-bold ${language === 'EN' ? 'shadow-xl' : ''}`}>EN</button><span className="self-center mx-1 text-white text-3xl font-bold">/</span><button onClick={() => toggleLanguage('SR')} className={`text-white px-2 text-3xl font-bold ${language === 'SR' ? 'shadow-xl' : ''}`}>SR</button></div>
          </div>
        </header>
        <Routes>
          <Route>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about-me" element={<AboutMe/>}/>
            <Route path="/meal-kit-delivery-platform" element={<MealKitPlatform/>}/>
            <Route path="/playground" element={<Playground/>}/>
            <Route path="/playground/avl-trees" element={<AVLTreesComponent/>}/>
            <Route path="/playground/avl-trees/basics" element={<AVLTreesBasics/>}/>
            {/* <Route path="/playground/avl-trees/exercises"/>
            <Route path="/playground/avl-trees/test"/> */}
            {/* <Route path="/personal-website/coronavirus-classifier" element={<CoronavirusClassifier/>}/>
            <Route path="/personal-website/office-resource-management" element={<OfficeResourceManagement/>}/>
            <Route path="/personal-website/hr-application" element={<HrApplication/>}/>
            <Route path="/personal-website/c++ambio" element={<Cambio/>}/>
            <Route path="/personal-website/world-cup-2022-simulator" element={<WorldCup2022Simulator/>}/> */}
            <Route path="*" element={<NotFound />} />
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

            <p>{language === 'EN' ? footerParagraphEnglish : footerParagraphSerbian}</p>

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

import { FaLinkedin, FaGithub, FaGitlab, FaEnvelope } from 'react-icons/fa'; 
import { DiPython, DiAngularSimple, DiDotnet, DiReact, DiNodejsSmall, DiJavascript1 } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import { useContext } from 'react';

const Home = () => {
    const { language } = useContext(LanguageContext);

    const experience = [
        {hasArtical: true, date: language === 'EN' ? "April 2023 - October 2024" : "April 2023 - Oktobar 2024", icons: [<DiAngularSimple size={30} title="Angular" />, <DiDotnet size={30} title=".NET" />], link: "meal-kit-delivery-platform", roleName: 'JUNIOR FULL STACK DEVELOPER', title: language === 'EN' ? 'Meal Kit Delivery Platform - Coolivery' : "Coolivery", shortDescription: language === 'EN' ? "I was part of the team that developed a web application for the meal kit delivery platform, Coolivery." : "Bio sam deo tima koji razvija platformu za poručivanje i dostavu kompleta za kuvanje, Coolivery"},
        {hasArtical: false, date: language === 'EN' ? "March 2024 - June 2024" : "Mart 2024 - Jun 2024", icons: [<DiPython size={30} title="Python" />], link: "coronavirus-classifier", roleName: language === 'EN' ? "STUDENT IN DATA SCIENCE COURSE" : "STUDENT KURSA ISTRAŽIVANJE PODATAKA", title: language === 'EN' ? 'Coronavirus Classifier' : "Klasifikator korona virusa", shortDescription: language === 'EN' ? "I collaborated on a Data Science project for Coronavirus classification, utilizing Machine Learning algorithms such as KNN, CART, LightGBM, and RandomForest to handle imbalanced datasets." : "Učestvovao sam u timskom projektu u okviru kursa Istraživanje podataka, na kojem smo istrenirali model za klasifikaciju korona virusa koristeći različite algoritme mašinskog učenja poput KNN, CART, LightGBM i RandomForest."},
        {hasArtical: false, date: language === 'EN' ? "September 2023 - December 2023" : "Septembar 2023 - Decembar 2023", icons: [<SiCplusplus size={30} title="C++" />], link: "c++ambio", roleName: language === 'EN' ? "STUDENT IN SOFTWARE DEVELOPMENT COURSE" : "STUDENT KURSA RAZVOJ SOFTVERA", title: 'C++AMBIO', shortDescription: language === 'EN' ? "I actively participated in a six-member team to design and implement the client-server architecture for a game project, using C++ and the QT framework." : "Učestvovao u timskom projektu 6 studenata na kursu Razvoj softvera, na kojem smo razvili našu igricu u klijent-server arhitekturi, koristeći C++ i QT razvojno okruženje"},
        {hasArtical: false, date: language === 'EN' ? "February 2023 - April 2023" : "Februar 2023 - April 2023", icons: [<DiAngularSimple size={30} title="Angular" />, <DiDotnet size={30} title=".NET" />], link: "office-resource-management", roleName: language === 'EN' ? 'FULL STACK DEVELOPER INTERN' : "FULL STACK DEVELOPER PRAKTIKANT", title: language === 'EN' ? 'Office Resource Management App' : "Aplikacija za upravljanje kancelarijskim resursima", shortDescription: language === 'EN' ? "Spearheaded the end-to-end development of a custom web application on for office desk reservations using Angular, .NET, ASP.NET Core Identity, Entity Framework, MSSQL, SignalR, Tailwind CSS, and TypeScript." : "Koristeći Angular, .NET, ASP.NET Core Identity, Entity Framework, MSSQL, SignalR, Tailwind CSS, i TypeScript razvio veb aplikaciju za upravljanje kancelarijskim resursima."},
        {hasArtical: false, date: language === 'EN' ? "October 2022 - February 2023" : "Octobar 2022 - Februar 2023", icons: [<DiReact size={30} title="React" />,<DiNodejsSmall size={30} title="Node.js" />], link: "hr-application", roleName: language === 'EN' ? 'FULL STACK DEVELOPER INTERN' : "FULL STACK DEVELOPER PRAKTIKANT", title: language === 'EN' ? 'HR Application' : "HR aplikacija", shortDescription: language === 'EN' ? "I contributed to the development of a dynamic HR application using React.js, Redux.js, Node.js, TypeScript, Tailwind CSS, and Material Design." : "Doprineo razvoju HR veb aplikacije za zakazivanje i upravljanje slobodnim danima u firmi, na timskom projektu koristeći tehnologije React.js, Redux.js, Node.js, TypeScript, Tailwind CSS, i Material Design." },
        {hasArtical: false, date: language === 'EN' ? "April 2022 - May 2022" : "April 2022 - Maj 2022", icons: [<DiJavascript1 size={30} title="Javascript1" />], link: "world-cup-2022-simulator", roleName: language === 'EN' ? "JUST A REGULAR FOOTBALL FAN" : "LJUBITELJ FUDBALA", title: 'WORLD CUP 2022 SIMULATOR', shortDescription: language === 'EN' ? "I developed an algorithm to predict World Cup match outcomes using statistical data. This project merged my passion for sports and coding, highlighting my problem-solving skills and focus on delivering an accurate, engaging solution." : "Napisao algoritam koji na osnovu više različitih faktora simulira rezultate utakmica svetskog prvenstva. Ovaj projekat je spojio moju strast za programiranjem i fudbalom i predstavlja moj prvi samostalni projekat i ulaz u svet programiranja."}
    ];

    return ( 
        <div className="w-full text-center h-fit">
            <div className="w-full pt-4 h-80 md:h-[26rem] bg-slate-300 relative">
                <img src={`${process.env.PUBLIC_URL}/dimitrijeMidzor.jpg`} alt="Dimitrije Midzor" className="ml-1 w-48 absolute md:w-64 md:left-1/4"/>
                <p className="w-[58%] md:w-[35%] absolute top-8 md:top-20 right-0 md:right-[20%] text-5xl md:text-6xl font-extrabold">{language === 'EN' ? "Hi! I'm Dimitrije Petrović, nice to see you up here!" : "Zdravo! Ja sam Dimitrije Petrović, dobro došli!"}</p>
            </div>
            <div class="h-fit w-full gap-4 mt-8">
                <div className="w-full flex flex-row justify-center gap-4 mx-auto my-4">
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
                <div className="mx-2 mt-6 shadow-lg md:shadow md:hover:shadow-xl py-2 mb-4">
                    <p className='text-xl font-bold'>{language === 'EN' ? "Let me introduce myself" : "Ukratko o meni"}</p>
                    <p className="my-2 md:w-2/5 mx-auto">{language === 'EN' ? "Hey there! I'm Dimitrije Petrović, a 24-year-old software engineering enthusiast with two years of hands-on experience building web applications. I recently graduated from the Faculty of Mathematics in Belgrade in 2024 and decided to keep the brain juices flowing by jumping into master’s studies. I’m all about positive vibes and high energy, so whether I’m tackling code or a challenge, I do it with a smile!" : "Zdravo! Ja sam Dimitrije Petrović, 24-godišnji softver inženjer sa dve godine praktičnog iskustva u izradi veb aplikacija. Nedavno sam diplomirao na Matematičkom fakultetu u Beogradu 2024. godine, a odlučio sam i da nastavim sa master studijama. Uvek idem sa pozitivnim stavom i dobrom energijom, tako da bilo da rešavam kod ili izazov, radim to sa osmehom!"}</p>
                    <Link to="about-me"><button className='mx-auto my-4 rounded-lg p-2 bg-amber-200 text-xl w-fit'>{language === 'EN' ? "View more" : "Pogledaj više"}</button></Link>
                </div>
                <div className="mx-2 mt-6 shadow-lg md:shadow md:hover:shadow-xl py-2 mb-4">
                    <p className='text-xl font-bold'>{language === 'EN' ? "Where learning meets fun!" : "Mesto za učenje i zabavu!"}</p>
                    <p className="my-2 md:w-2/5 mx-auto">{language === 'EN' ? "Here, you’ll dive into data structures and algorithms through interactive learning, picking up a thing or two along the way, and test your knowledge with a series of engaging challenges - designed to keep both your mind sharp and the experience fun!" : "Ovde ćeš kroz interaktivno učenje zaroniti u strukture podataka i algoritme, usput pokupiti poneki trik, i testirati svoje znanje kroz seriju zanimljivih izazova i iskustvo učine zabavnim!"}</p>
                    <Link to="playground"><button className='mx-auto my-4 rounded-lg p-2 bg-amber-200 text-xl w-fit'>{language === 'EN' ? "View more" : "Pogledaj više"}</button></Link>
                </div>
                <div className='gap-4 mx-2 mb-8 md:grid md:grid-cols-3'>
                    {
                        experience.map((exp) => (
                            <div key={exp.title} className='h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl'>
                                {exp.date && <div className='mt-6 text-xs'>{exp.date}</div>}
                                {exp.roleName && <h2 className='mt-4 font-semibold'>{exp.roleName}</h2>}
                                {exp.title && <h2 className='mt-4 text-xl font-bold'>{exp.title}</h2>}
                                {exp.shortDescription && <div className='text-sm font-thin mt-4 md:h-12'>{exp.shortDescription}</div>}
                                {exp.icons.length > 0 && <div className="mt-2 w-full flex flex-row justify-center gap-4 mx-auto mb-4">
                                    {exp.icons}
                                </div>}
                                {exp.hasArtical && <Link to={exp.link} className="mb-2 w-fit h-fit mx-auto"><button className='rounded-lg p-2 bg-amber-200 text-xl w-fit'>{language === 'EN' ? "View more" : "Pogledaj više"}</button></Link>}
                                {!exp.hasArtical && <button className='mx-auto mb-2 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-fit' disabled>{language === 'EN' ? "View more" : "Pogledaj više"}</button>}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Home;
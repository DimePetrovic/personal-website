import { FaLinkedin, FaGithub, FaGitlab, FaEnvelope } from 'react-icons/fa'; 
import { DiPython, DiAngularSimple, DiDotnet, DiReact, DiNodejsSmall, DiJavascript1 } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';
import { Link } from 'react-router-dom';


const Home = () => {
    const experience = [
        {date: "April 2023 - October 2024", icons: [<DiAngularSimple size={30} title="Angular" />, <DiDotnet size={30} title=".NET" />], link: "meal-kit-platform", roleName: 'JUNIOR FULL STACK DEVELOPER', title: 'Meal Kit Delivery Platform - Coolivery', shortDescription: "I was part of the team that developed a web application for the meal kit delivery platform, Coolivery."},
        {date: "March 2024 - June 2024", icons: [<DiPython size={30} title="Python" />], link: "coronavirus-classifier", roleName: "STUDENT IN DATA SCIENCE COURSE", title: 'Coronavirus Classifier', shortDescription: "I collaborated on a Data Science project for Coronavirus classification, utilizing Machine Learning algorithms such as KNN, CART, LightGBM, and RandomForest to handle imbalanced datasets."},
        {date: "September 2023 - December 2023", icons: [<SiCplusplus size={30} title="C++" />], link: "c++ambio", roleName: "STUDENT IN SOFTWARE DEVELOPMENT COURSE", title: 'C++AMBIO', shortDescription: "I actively participated in a six-member team to design and implement the client-server architecture for a game project, using C++ and the QT framework."},
        {date: "Februar 2023 - April 2023", icons: [<DiAngularSimple size={30} title="Angular" />, <DiDotnet size={30} title=".NET" />], link: "office-resource-management", roleName: 'FULL STACK DEVELOPER INTERN', title: 'Office Resource Management', shortDescription: "Spearheaded the end-to-end development of a custom web application on for office desk reservations using Angular, .NET, ASP.NET Core Identity, Entity Framework, MSSQL, SignalR, Tailwind CSS, and TypeScript."},
        {date: "October 2022 - Februar 2023", icons: [<DiReact size={30} title="React" />,<DiNodejsSmall size={30} title="Node.js" />], link: "hr-application", roleName: 'FULL STACK DEVELOPER INTERN', title: 'HR Application', shortDescription: "I contributed to the development of a dynamic HR application using React.js, Redux.js, Node.js, TypeScript, Tailwind CSS, and Material Design." },
        {date: "April 2022 - May 2022", icons: [<DiJavascript1 size={30} title="Javascript1" />], link: "world-cup-2022-simulator", roleName: "JUST A REGULAR FOOTBALL FAN", title: 'WORLD CUP 2022 SIMULATOR', shortDescription: "I developed an algorithm to predict World Cup match outcomes using statistical data. This project merged my passion for sports and coding, highlighting my problem-solving skills and focus on delivering an accurate, engaging solution."}
    ];

    return ( 
        <div className="w-full text-center h-fit">
            <div className="w-full pt-4 h-80 md:h-[26rem] bg-slate-300 relative">
                <img src={`${process.env.PUBLIC_URL}/dimitrijeMidzor.jpg`} alt="Dimitrije Midzor" className="ml-1 w-48 absolute md:w-64 md:left-1/4"/>
                <p className="w-[60%] md:w-[35%] absolute top-8 md:top-20 right-0 md:right-[20%] text-5xl md:text-6xl font-extrabold">Hi! I'm Dimitrije Petrović, nice to see you up here!</p>
            </div>
            <div class="h-fit w-full gap-4 mt-8">
                {/* <div className="mt-4 mx-auto flex flex-row gap-x-4 text-center justify-items-center">
                    <span className="material-icons text-4xl text-amber-300">extension</span>
                    <span className="material-icons text-4xl text-amber-300">key</span>
                </div> */}
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
                    <p className='text-xl font-bold'>Let me introduce myself</p>
                    <p className="my-2 md:w-2/5 mx-auto">Hey there! I'm Dimitrije Petrović, a 24-year-old software engineering enthusiast with two years of hands-on experience building web applications. I recently graduated from the Faculty of Mathematics in Belgrade in 2024 and decided to keep the brain juices flowing by jumping into master’s studies. I’m all about positive vibes and high energy, so whether I’m tackling code or a challenge, I do it with a smile!</p>
                    <Link to="about-me"><button className='mx-auto my-4 rounded-lg border-2 p-2 bg-amber-200 text-xl w-fit'>View more</button></Link>
                </div>
                <div className='gap-4 mx-2 mb-8 md:grid md:grid-cols-3'>
                    {
                        experience.map((exp) => (
                            <div key={exp.title} className='h-fit flex flex-col shadow-lg md:shadow md:hover:shadow-xl'>
                                {exp.date && <div className='mt-12 text-xs'>{exp.date}</div>}
                                {exp.roleName && <h2 className='mt-4 font-semibold'>{exp.roleName}</h2>}
                                {exp.title && <h2 className='mt-4 text-xl font-bold'>{exp.title}</h2>}
                                {exp.shortDescription && <div className='text-sm font-thin mt-4 md:h-12'>{exp.shortDescription}</div>}
                                {exp.icons.length > 0 && <div className="mt-4 w-full flex flex-row justify-center gap-4 mx-auto mb-4">
                                    {exp.icons}
                                </div>}
                                {/* {exp.title && <Link to={exp.link}><button className='mx-auto my-4 rounded-lg border-2 p-2 bg-amber-200 text-xl w-fit'>View more</button></Link>} */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Home;
import ImageSlider from "./ImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";


const AboutMe = () => {
    const { language } = useContext(LanguageContext);

    return ( 
        <div className="grow flex flex-col w-full md:mx-auto md:w-3/4">
            <div className="mt-4">
                <img src="ja.jpg" alt="Dimitrije Petrovic" className="w-40 mx-auto"/>
                <p className="text-center text-5xl font-bold">DIMITRIJE PETROVIĆ</p>
                <p className="text-center text-4xl font-semibold">{language === "EN" ? "Software engineer" : "Softver inženjer"}</p>
            </div>

            <div className="my-16 md:mx-auto flex flex-col w-full gap-y-4">
                <div className="flex flex-col-reverse md:flex-row md:justify-between gap-y-4 md:gap-x-16 md:gap-y-0 mx-1 md:mx-0">
                    <ImageSlider />
                    <div className="my-auto md:w-[45%]">
                        <p className="text-2xl font-bold">{language === "EN" ? "Faculty of Mathematics" : "Matematički fakultet"} 2019 - 2024</p>
                        <p className="text-xl">{language === "EN" ? "My studies were a wild mix of late-night coding, caffeine overloads, and just enough fun to keep me sane!" : "Moje studije bile su spoj noćnog učenja, previše kofeina i tačno toliko zabave da se održi balans!"}</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-y-4 md:gap-x-4 md:gap-y-0 mx-1 md:mx-0">
                    <div className="my-auto md:w-[45%]">
                        <p className="text-2xl font-bold"><a href="https://www.deversity.com/" className="text-blue-400">Deversity</a> {language === "EN" ? "and" : "i"} <a href="https://infaloom.com/" className="text-blue-400">Infaloom</a> 2022 - 2024</p>
                        <p className="text-xl">{language === "EN" ? "My 2 years of work were all about coding cool projects, meeting amazing people at Deversity and Infaloom, and squeezing in some table tennis matches and chess in between!" : "Moje dve godine rada bile su posvećene kodiranju zanimljivih projekata, upoznavanju sjajnih ljudi u Deversity-ju i Infaloom-u, uz poneki meč stonog tenisa i partiju šaha između svega toga!"}</p>
                    </div>
                    <img src="infaloomDimitrije.png" alt="Infaloom experience" className="mx-auto w-[90%] md:w-[45%] md:mx-0"/>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:justify-between gap-y-4 md:gap-x-4 md:gap-y-0 mx-1 md:mx-0">
                    <img src="padel.jpg" alt="Padel" className="mx-auto w-[90%] md:w-[45%] md:mx-0"/>
                    <div className="mx-auto my-auto md:w-[45%] md:mx-0">
                        <p className="text-2xl font-bold">{language === "EN" ? "Hobbies" : "Hobiji"} 2000 - ????</p>
                        <p className="text-xl">{language === "EN" ? "My hobbies keep me on the move — football, basketball, padel, running, and hiking, always chasing new heights!" : "Moji hobiji me stalno drže u pokretu - fudbal, košarka, padel, trčanje i planinarenje, uvek u potrazi za novim izazovima!"}</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;
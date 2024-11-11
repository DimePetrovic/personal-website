import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Playground = () => {
    const { language } = useContext(LanguageContext);

    return ( 
        <div className="grow flex flex-col w-full md:mx-auto md:w-3/4">
            <div className="mt-4">
                {/* <img src="ja.jpg" alt="Dimitrije Petrovic" className="w-40 mx-auto"/> Bice neka playground slicica */}
                <p className="text-center text-5xl font-bold">{language === 'EN' ? "PLAYGROUND" : "UČIONICA"}</p>
                <p className="text-center text-4xl font-semibold">{language === 'EN' ? "Brainwork & playtime!":"Učenje i zabava"}</p>
            </div>

            <div className="w-full flex flex-col justify-center gap-y-4 mx-auto my-4">
                <div className="mx-2 mt-6 shadow-lg md:shadow md:hover:shadow-xl p-6 mb-4">
                    <p className="my-2 mx-auto text-xl text-center">{language==="EN"?"For each topic, the content is divided into three parts: the first for learning, the second with simple exercises, and the third where you can put your knowledge to the test!":"Za svaku temu, sadržaj je podeljen na tri dela: prvi deo za učenje, drugi sa jednostavnim vežbama, i treći gde možeš testirati svoje znanje!"}</p>
                </div>
            </div>

            <div className='flex flex-col gap-4 mx-2 mb-8 md:grid md:grid-cols-3'>
                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <p className='mx-4 mt-4 text-xl font-bold'>{language === "EN" ? "AVL Trees" : "AVL drveta"} {language === "EN" && <span className="text-sm font-normal">- only in Serbian</span>}</p>
                    <p className="mx-4 mt-4 font-semibold">{language === "EN" ? "A place to learn about AVL Trees" : "Mesto za učenje AVL drveta"}</p>
                    <Link to="avl-trees" className="my-4 w-fit h-fit mx-auto"><button className='rounded-lg p-2 bg-amber-200 text-xl w-fit'>{language === "EN" ? "View more" : "Pogledaj više"}</button></Link>
                </div>
                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <p className='mx-4 mt-4 text-xl font-bold'>{language === "EN" ? "Red black trees" : "Crveno crna drveta"} {language === "EN" && <span className="text-sm font-normal">- only in Serbian</span>}</p>
                    <p className="mx-4 mt-4 font-semibold">{language === "EN" ? "A place to learn about Red black trees" : "Mesto za učenje crveno crnih drveta"}</p>
                    <button className='mx-auto my-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-fit' disabled>{language === "EN" ? "View more" : "Pogledaj više"}</button>
                </div>
                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <p className='mx-4 mt-4 text-xl font-bold'>{language === "EN" ? "Skip lists" : "Skip liste"} {language === "EN" && <span className="text-sm font-normal">- only in Serbian</span>}</p>
                    <p className="mx-4 mt-4 font-semibold">{language === "EN" ? "A place to learn about Skip lists" : "Mesto za učenje skip listi"}</p>
                    <button className='mx-auto my-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-fit' disabled>{language === "EN" ? "View more" : "Pogledaj više"}</button>
                </div>
            </div>
        </div>
    );
}
 
export default Playground;
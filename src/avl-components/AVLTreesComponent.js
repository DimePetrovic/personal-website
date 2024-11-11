import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const AVLTreesComponent = () => {
    const { language } = useContext(LanguageContext);

    return ( 
        <div className="grow flex flex-col w-full md:mx-auto md:w-3/4">
            <div className="mt-4">
                {/* <img src="ja.jpg" alt="Dimitrije Petrovic" className="w-40 mx-auto"/> Bice neka playground slicica */}
                <p className="text-center text-5xl font-bold">AVL drveta</p>
                <p className="text-center text-4xl font-semibold">Učenje i zabava!</p>
                {language === "EN" && <p className="mt-2 text-center text-red-500">Only in Serbian</p>}
            </div>
            <div className="mt-12">
                <div className='flex flex-col gap-4 mx-2 mb-8 md:grid md:grid-cols-3'>
                    <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                        <p className='mx-4 mt-4 text-xl font-bold'>Nauči osnove</p>
                        <p className="mx-4 mt-4 font-semibold h-20">Upoznaj se sa osnovnim konceptima i izgradi čvrstu osnovu za dublje razumevanje</p>
                        <Link to="basics" className="my-4 w-fit h-fit mx-auto"><button className='rounded-lg p-2 bg-amber-200 text-xl w-fit'>Pogledaj više</button></Link>
                    </div>
                    <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                        <p className='mx-4 mt-4 text-xl font-bold'>Jednostavni zadaci</p>
                        <p className="mx-4 mt-4 font-semibold h-20">Primeni ono što si naučio kroz jednostavne zadatke osmišljene da ojačaju tvoje veštine</p>
                        <button className='mx-auto my-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-fit' disabled>Pogledaj više</button>
                    </div>
                    <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                        <p className='mx-4 mt-4 text-xl font-bold'>Testiraj svoje znanje</p>
                        <p className="mx-4 mt-4 font-semibold h-20">Izazovi sebe složenijim problemima kako bi video koliko si dobro savladao gradivo</p>
                        <button className='mx-auto my-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-fit' disabled>Pogledaj više</button>
                    </div>
                </div>
            </div>
        </div>    
    );
}
 
export default AVLTreesComponent;
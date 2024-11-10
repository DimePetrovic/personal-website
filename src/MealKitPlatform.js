import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const MealKitPlatform = () => {
    const { language } = useContext(LanguageContext);

    return ( 
        <div className="grow flex flex-col w-full md:mx-auto md:w-3/4">
            <div className="mt-4">
                <img src={`${process.env.PUBLIC_URL}/coolivery.jpg`} alt="Coolivery bag" className="w-40 mx-auto"/>
                <p className="text-center text-5xl font-bold">{language === 'EN' ? "Meal kit delivery platform" : "Platforma za poručivanje kompleta za kuvanje"}</p>
                <p className="text-center text-4xl font-semibold underline"><a href="https://coolivery.com/" rel="noreferrer" target="_blank">Coolivery</a></p>
            </div>

            <div className="my-16 mx-2 md:mx-auto flex flex-col gap-y-4 text-xl">
                {language === "EN" && <p>From April 2023 to October 2024, I had the pleasure of working on the <a href="https://coolivery.com/" rel="noreferrer" target="_blank" className="underline">Coolivery app</a>, where I dove into some pretty exciting challenges in <span class="font-bold">Angular</span> and <span class="font-bold">.NET</span>. Our <span class="font-bold">microservices architecture</span> gave me the chance to implement a series of intricate services - from a <span className="font-bold">machine learning</span>-powered recommendation system that suggested new products based on users' purchase history to a web scraper that kept our ingredient prices updated in real-time by monitoring the latest market rates, and one that I am most proud of, <span className="font-bold">designing and implementing</span> our in-house delivery service solution</p>}
                {language === "SR" && <p>Od aprila 2023. do oktobra 2024. imao sam zadovoljstvo da radim na <a href="https://coolivery.com/" rel="noreferrer" target="_blank" className="underline">aplikaciji Coolivery</a>, gde sam se suočio sa prilično uzbudljivim izazovima u <span class="font-bold">Angularu</span> i <span class="font-bold">.NET-u</span>. Naša <span class="font-bold">mikroservisna arhitektura</span> pružila mi je priliku da implementiram niz složenih servisa – od sistema preporuka pokretanog <span class="font-bold">mašinskim učenjem</span>, koji je korisnicima predlagao nove proizvode na osnovu njihove istorije kupovine, preko veb skrejpera koji je u realnom vremenu ažurirao cene sastojaka prateći najnovije tržišne vrednosti, pa sve do projekta na koji sam najponosniji, <span class="font-bold">dizajniranja i implementacije</span> rešenja za našu internu uslugu dostave.</p>}
                {language === "EN" && <p>One of my favorite aspects of the project was <span class="font-bold">collaborating</span> with logistics managers and content creators to bring in fresh features that the app needed as it evolved. <span className="font-bold">Working alongside</span> these <span className="font-bold">domain experts</span> gave me the insights I needed to experience <span className="font-bold">software design</span> on a broader scale, building on the <span className="font-bold">code design principles</span> I had encountered in the past - a collaboration that kept me on my toes!</p>}
                {language === "SR" && <p>Jedan od omiljenih aspekata projekta bio mi je <span className="font-bold">rad sa menadžerima logistike i kreatorima sadržaja</span> kako bismo uneli nove funkcionalnosti koje su aplikaciji bile potrebne kako je rasla. <span className="font-bold">Saradnja sa ovim stručnjacima</span> dala mi je uvid u širu perspektivu <span className="font-bold">dizajna softvera</span> i primenim principe dizajna koda na dubljem nivou. Ovo je bila saradnja koja me je stalno podsticala na razmišljanje!</p>}
                {language === "EN" && <p>And while I tackled some big tasks, it’s still the little things that stick with me - like the unexpected, stubborn challenges of animating a simple search input!</p>}
                {language === "SR" && <p>Iako sam rešavao neke velike zadatke, ipak su mi u sećanju ostale one sitnice - kao neočekivani, neprestani problemi pri animiranju običnog polja za pretragu!</p>}
            </div>
        </div>
     );
}
 
export default MealKitPlatform;
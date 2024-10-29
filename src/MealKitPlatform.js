const MealKitPlatform = () => {
    return ( 
        <div className="grow flex flex-col w-full md:mx-auto md:w-3/4">
            <div className="mt-4">
                <img src={`${process.env.PUBLIC_URL}/coolivery.jpg`} alt="Coolivery bag" className="w-40 mx-auto"/>
                <p className="text-center text-5xl font-bold">Meal kit delivery platform</p>
                <p className="text-center text-4xl font-semibold underline"><a href="https://coolivery.com/" rel="noreferrer" target="_blank">Coolivery</a></p>
            </div>

            <div className="my-16 mx-2 md:mx-auto flex flex-col gap-y-4 text-xl">
                <p>From April 2023 to October 2024, I had the pleasure of working on the <a href="https://coolivery.com/" rel="noreferrer" target="_blank" className="underline">Coolivery app</a>, where I dove into some pretty exciting challenges in <span class="font-bold">Angular</span> and <span class="font-bold">.NET</span>. Our <span class="font-bold">microservices architecture</span> gave me the chance to implement a series of intricate services - from a <span className="font-bold">machine learning</span>-powered recommendation system that suggested new products based on users' purchase history to a web scraper that kept our ingredient prices updated in real-time by monitoring the latest market rates, and one that I am most proud of, <span className="font-bold">designing and implementing</span> our in-house delivery service solution</p>
                <p>One of my favorite aspects of the project was <span class="font-bold">collaborating</span> with logistics managers and content creators to bring in fresh features that the app needed as it evolved. <span className="font-bold">Working alongside</span> these <span className="font-bold">domain experts</span> gave me the insights I needed to experience <span className="font-bold">software design</span> on a broader scale, building on the <span className="font-bold">code design principles</span> I had encountered in the past - a collaboration that kept me on my toes!</p>
                <p>And while I tackled some big tasks, it’s still the little things that stick with me - like the unexpected, stubborn challenges of animating a simple search input!</p>
            </div>
        </div>
     );
}
 
export default MealKitPlatform;
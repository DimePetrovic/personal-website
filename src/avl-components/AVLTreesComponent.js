import { Link } from "react-router-dom";

const AVLTreesComponent = () => {
    return ( 
        <div className="grow flex flex-col w-full md:mx-auto md:w-3/4">
            <div className="mt-4">
                {/* <img src="ja.jpg" alt="Dimitrije Petrovic" className="w-40 mx-auto"/> Bice neka playground slicica */}
                <p className="text-center text-5xl font-bold">AVL Trees</p>
                <p className="text-center text-4xl font-semibold">Brainwork & playtime!</p>
            </div>
            <div className="mt-12">
                <div className='flex flex-col gap-4 mx-2 mb-8 md:grid md:grid-cols-3'>
                    <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                        <p className='mx-4 mt-4 text-xl font-bold'>Learn the Basics</p>
                        <p className="mx-4 mt-4 font-semibold h-20">Get introduced to core concepts and build a solid foundation for deeper understanding</p>
                        <Link to="basics" className="my-4 w-fit h-fit mx-auto"><button className='rounded-lg p-2 bg-amber-200 text-xl w-fit'>View more</button></Link>
                    </div>
                    <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                        <p className='mx-4 mt-4 text-xl font-bold'>Practice with Exercises</p>
                        <p className="mx-4 mt-4 font-semibold h-20">Apply what you’ve learned with straightforward tasks designed to reinforce your skills</p>
                        <button className='mx-auto my-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-fit' disabled>View more</button>
                    </div>
                    <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                        <p className='mx-4 mt-4 text-xl font-bold'>Test Your Knowledge</p>
                        <p className="mx-4 mt-4 font-semibold h-20">Challenge yourself with more complex problems to see how well you’ve mastered the material</p>
                        <button className='mx-auto my-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-fit' disabled>View more</button>
                    </div>
                </div>
            </div>
        </div>    
    );
}
 
export default AVLTreesComponent;
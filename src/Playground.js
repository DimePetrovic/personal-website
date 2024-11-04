import { Link } from "react-router-dom";

const Playground = () => {
    return ( 
        <div className="grow flex flex-col w-full md:mx-auto md:w-3/4">
            <div className="mt-4">
                {/* <img src="ja.jpg" alt="Dimitrije Petrovic" className="w-40 mx-auto"/> Bice neka playground slicica */}
                <p className="text-center text-5xl font-bold">PLAYGROUND</p>
                <p className="text-center text-4xl font-semibold">Brainwork & playtime!</p>
            </div>

            <div className="w-full flex flex-col justify-center gap-y-4 mx-auto my-4">
                <div className="mx-2 mt-6 shadow-lg md:shadow md:hover:shadow-xl p-6 mb-4">
                    <p className="my-2 mx-auto text-xl text-center">For each topic, the content is divided into three parts: the first for learning, the second with simple exercises, and the third where you can put your knowledge to the test!</p>
                </div>
            </div>

            <div className='gap-4 mx-2 mb-8 md:grid md:grid-cols-3'>
                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <p className='mx-4 mt-4 text-xl font-bold'>AVL Trees</p>
                    <p className="mx-4 mt-4 font-semibold">A place to learn about AVL Trees</p>
                    <Link to="avl-trees" className="my-4 w-fit h-fit mx-auto"><button className='rounded-lg p-2 bg-amber-200 text-xl w-fit'>View more</button></Link>
                </div>
                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <p className='mx-4 mt-4 text-xl font-bold'>Red black trees</p>
                    <p className="mx-4 mt-4 font-semibold">A place to learn about Red black lists</p>
                    <button className='mx-auto my-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-fit' disabled>View more</button>
                </div>
                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <p className='mx-4 mt-4 text-xl font-bold'>Skip lists</p>
                    <p className="mx-4 mt-4 font-semibold">A place to learn about Skip lists</p>
                    <button className='mx-auto my-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-fit' disabled>View more</button>
                </div>
            </div>
        </div>
    );
}
 
export default Playground;
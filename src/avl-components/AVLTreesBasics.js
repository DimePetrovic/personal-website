import AVLPlayground from "./avl-playground";

const AVLTreesBasics = () => {
    return ( 
        <div className="grow flex flex-col w-full md:mx-auto md:w-3/4">
            <h1 className="mt-4 text-2xl font-bold mx-auto">AVL drveta</h1>
            <h1 className="mt-2 text-xl font-semibold mx-2 md:mx-auto text-center">Na ovoj stranici možete isprobavati različite operacije sa AVL drvetima</h1>

            <p className="mt-4 text-lg mx-2 md:mx-auto">Dodavanje čvora u drvo je implementirano tako da se čvor prvo dodaje u drvo kao da je reč o uobičajenom nebalansiranom uređenom binarnom drvetu.</p>
            <p className="mt-2 text-lg mx-2 md:mx-auto">Po dodavanju čvora, <span className="text-green-500">novi čvor</span> se označava <span className="text-green-500">zelenom</span> bojom. Ukoliko je dodavanjem čvora, drvo prestalo da bude balansirano, <span className="text-red-500">kritični čvor</span> se označava <span className="text-red-500">crvenom</span> bojom.</p>
            <p className="mt-2 text-lg mx-2 md:mx-auto">Ukoliko je drvo van balansa, nije moguće dodavati nove čvorove u drvo, ili ih brisati dok se drvo ne balansira!</p>
            {/* <div className="">
                <p className=""></p>
                <p className=""></p>
            </div> */}
            <AVLPlayground />
        </div>
     );
}
 
export default AVLTreesBasics;
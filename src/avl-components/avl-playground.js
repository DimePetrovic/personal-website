import { AVLTree } from "../data-structures/AVLTrees";
import { useState } from "react";
import React from "react";

const AVLPlayground = () => {
    const [tree, setTree] = useState(new AVLTree());
    const [value, setValue] = useState("");
    const [deleteValue, setDeleteValue] = useState("");
    const [positions, setPositions] = useState();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [isInsertOpen, setIsInsertOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [shouldBalance, setShouldBalance] = useState(false);
    const [isColored, setIsColored] = useState(false);

    const handleResetColoring = () => {
        let newTree = new AVLTree();
        newTree.root = tree.root;
        newTree.resetBorders();
        setIsColored(false);
        setTree(newTree);
        const {newPositions, newWidth, newHeight} = newTree.getNodePositions();
        setPositions(newPositions);
        setWidth(newWidth);
        setHeight(newHeight);

    }

    const handleBalancing = () => {
        // console.log("Balansiram");
        // console.log(tree);
        const balancedTree = tree.balanceAfterInsert();
        // console.log(balancedTree);
        setTree(balancedTree);
        const {newPositions, newWidth, newHeight} = balancedTree.getNodePositions();
        setPositions(newPositions);
        setWidth(newWidth);
        setHeight(newHeight);
        setShouldBalance(false);
    }

    const handleInsert = () => {
        const num = parseInt(value, 10);
        if (!isNaN(num)) {
            tree.resetBorders();
            setIsColored(false);
            const {newTree, hasCriticalNode} = tree.insertWithHighlight(num);
            setShouldBalance(hasCriticalNode);
            setIsColored(true);
            setTree(newTree);
            const {newPositions, newWidth, newHeight} = newTree.getNodePositions();
            setPositions(newPositions);
            setWidth(newWidth);
            setHeight(newHeight);
            setValue("");
            setIsDeleteOpen(false);
            setIsInsertOpen(false);
        }
    };

    const handleDelete = () => {
        const num = parseInt(deleteValue, 10);
 
        if (!isNaN(num)) {
            const newTree = tree.deleteValue(num);
            setTree(newTree);
            const {newPositions, newWidth, newHeight} = newTree.getNodePositions();
            setPositions(newPositions);
            setWidth(newWidth);
            setHeight(newHeight);
            setDeleteValue("");
            setIsDeleteOpen(false);
            setIsInsertOpen(false);
        }
    };

    const handleDeleteTree = () => {
        setTree(new AVLTree());
        setValue("");
        setDeleteValue("");
        setPositions(null);
        setWidth(0);
        setHeight(0);
        setIsDeleteOpen(false);
        setIsInsertOpen(false);
        setIsColored(false);
        setShouldBalance(false);
    }

    const handleGenerateTree = () => {
        const arrayLength = Math.floor(Math.random() * (20 - 7 + 1)) + 7;
        const randomArray = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 100));

        let newTree = new AVLTree();
        randomArray.forEach(element => {
            newTree = newTree.insertValue(element);
        });

        setTree(newTree);
        const {newPositions, newWidth, newHeight} = newTree.getNodePositions();
        setPositions(newPositions);
        setWidth(newWidth);
        setHeight(newHeight);
        setValue("");
        setDeleteValue("");
        setIsDeleteOpen(false);
        setIsInsertOpen(false);
        setIsColored(false);
        setShouldBalance(false);
    }

    return ( 
        <div className="grow flex flex-col w-full relative">
            <div className='hidden gap-4 mx-2 mb-8 md:grid md:grid-cols-2 mt-2'>
                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <h2 className="mt-6 font-semibold mx-auto text-xl">Umetni novi čvor</h2>
                    <input
                        className="mx-auto mt-2 py-2 pl-2 rounded-lg border bg-slate-300"
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleInsert()}
                        placeholder="Unesi broj"
                        disabled={shouldBalance}
                    />
                    {!shouldBalance && <button onClick={handleInsert} className='rounded-lg p-2 bg-amber-200 text-xl w-24 mx-auto mt-4'>Umetni</button>}
                    {shouldBalance && <button className='mx-auto mt-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-24' disabled>Umetni</button>}            
                </div>

                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <h2 className="mt-6 font-semibold mx-auto text-xl">Obriši postojeći čvor</h2>
                    <input
                        className="mx-auto mt-2 py-2 pl-2 rounded-lg border bg-slate-300"
                        type="number"
                        value={deleteValue}
                        onChange={(e) => setDeleteValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleDelete()}
                        placeholder="Unesi broj"
                        disabled={shouldBalance}
                    />
                    {!shouldBalance && <button onClick={handleDelete} className='rounded-lg p-2 bg-amber-200 text-xl w-24 mx-auto mt-4'>Obriši</button>}
                    {shouldBalance && <button className='mx-auto mt-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-24' disabled>Obriši</button>}            
                </div>

                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <h2 className="mt-6 font-semibold mx-auto text-xl">Obriši drvo</h2>
                    <div className="py-4"></div>
                    <button onClick={handleDeleteTree} className='rounded-lg p-2 bg-amber-200 text-xl w-24 mx-auto mt-4'>Obriši</button>
                </div>

                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <h2 className="mt-6 font-semibold mx-auto text-xl">Generiši drvo</h2>
                    <div className="py-4"></div>
                    <button onClick={handleGenerateTree} className='rounded-lg p-2 bg-amber-200 text-xl w-24 mx-auto mt-4'>Generiši</button>
                </div>

                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <h2 className="mt-6 font-semibold mx-auto text-xl">Balansiraj drvo</h2>
                    <div className="py-4"></div>
                    {shouldBalance && <button onClick={handleBalancing} className='rounded-lg p-2 bg-amber-200 text-xl w-24 mx-auto mt-4'>Balansiraj</button>}
                    {!shouldBalance && <button className='mx-auto mt-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-24' disabled>Balansiraj</button>}            
                </div>

                <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                    <h2 className="mt-6 font-semibold mx-auto text-xl">Resetuj boje</h2>
                    <div className="py-4"></div>
                    {isColored && <button onClick={handleResetColoring} className='rounded-lg p-2 bg-amber-200 text-xl w-24 mx-auto mt-4'>Resetuj</button>}
                    {!isColored && <button className='mx-auto mt-4 rounded-lg p-2 bg-amber-200 opacity-30 text-xl w-24' disabled>Resetuj</button>}            
                </div>
                
            </div>

            <div className="overflow-auto mt-2 md:mt-0">
                {   
                    positions &&
                    <svg width={width} height={height} className="mx-auto my-[20px]">
                        {positions.map((node, index) => {
                        const leftChild = positions.find(n => n.value === (tree.findNode(tree.root, node.value)?.left?.value));
                        const rightChild = positions.find(n => n.value === (tree.findNode(tree.root, node.value)?.right?.value));

                        return (
                            <React.Fragment key={index}>
                            {leftChild && (
                                <line
                                x1={node.x + width/2} y1={node.y + 20}
                                x2={leftChild.x + height/2} y2={leftChild.y + 20}
                                stroke="black"
                                strokeWidth="2"
                                />
                            )}
                            {rightChild && (
                                <line
                                x1={node.x + width/2} y1={node.y + 20}
                                x2={rightChild.x + width/2} y2={rightChild.y + 20}
                                stroke="black"
                                />
                            )}
                            </React.Fragment>
                        );
                        })}

                        {positions.map((node, index) => (
                        <g key={index}>
                            <circle
                            cx={node.x + width/2}
                            cy={node.y + 20}
                            r="15"
                            fill="lightblue"
                            stroke={node.border}
                            strokeWidth="3"
                            />
                            <text
                            x={node.x + width/2}
                            y={node.y + 25}
                            textAnchor="middle"
                            fontSize="12"
                            fill="black"
                            >
                            {node.value}
                            </text>
                        </g>
                        ))}
                    </svg>
                }
            </div>

            {/* <div className="">
                <h1>Legenda</h1>
                <p></p>
                <p></p>
            </div> */}

            <div className="md:hidden absolute w-full bottom-2 flex flex-col gap-y-4">
                <div className="flex flex-row gap-x-4 mx-auto">
                    {shouldBalance && !isInsertOpen && !isDeleteOpen && <button onClick={handleBalancing} className='rounded-lg py-2 bg-amber-200 text-xl w-24 my-2'>Balansiraj drvo</button>}            
                    {isColored && !isInsertOpen && !isDeleteOpen && <button onClick={handleResetColoring} className='rounded-lg py-2 bg-amber-200 text-xl w-24 my-2'>Resetuj boje</button>}
                </div>
                {   isInsertOpen &&
                    <div className="h-fit mx-2 flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                        <h2 className="mt-6 font-semibold mx-auto text-xl">Umetni novi čvor</h2>
                        <input
                            className="mx-auto mt-2 py-2 pl-2 rounded-lg border bg-slate-300"
                            type="number"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleInsert()}
                            placeholder="Unesi broj"
                            autoFocus
                        />
                        <button onClick={handleInsert} className='rounded-lg p-2 bg-amber-200 text-xl w-24 mx-auto mt-4'>Umetni</button>            
                    </div>
                }
                { isDeleteOpen &&
                    <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl">
                        <h2 className="mt-6 font-semibold mx-auto text-xl">Obriši postojeći čvor</h2>
                        <input
                            className="mx-auto mt-2 py-2 pl-2 rounded-lg border bg-slate-300"
                            type="number"
                            value={deleteValue}
                            onChange={(e) => setDeleteValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleDelete()}
                            placeholder="Unesi broj"
                            autoFocus
                        />
                        <button onClick={handleDelete} className='rounded-lg p-2 bg-amber-200 text-xl w-24 mx-auto mt-4'>Obriši</button>
                    </div>
                }
                <div className="w-full flex flex-row gap-x-4">
                    {!shouldBalance && <button onClick={() => {setIsInsertOpen(true); setIsDeleteOpen(false);}} className='rounded-lg py-2 bg-amber-200 text-xl w-24 my-2'>Umetni čvor</button>}
                    {shouldBalance && <button className='mx-auto my-2 rounded-lg py-2 bg-amber-200 opacity-30 text-xl w-24' disabled>Umetni čvor</button>}           
                    {!shouldBalance && <button onClick={() => {setIsDeleteOpen(true); setIsInsertOpen(false);}} disabled={shouldBalance} className='rounded-lg py-2 bg-amber-200 text-xl w-24 my-2'>Obriši čvor</button>}            
                    {shouldBalance && <button className='mx-auto my-2 rounded-lg py-2 bg-amber-200 opacity-30 text-xl w-24' disabled>Obriši čvor</button>}
                    <button onClick={handleDeleteTree} className='rounded-lg py-2 bg-amber-200 text-xl w-24 my-2' >Obriši drvo</button>            
                    <button onClick={handleGenerateTree} className='rounded-lg py-2 bg-amber-200 text-xl w-24 my-2'>Generiši drvo</button>            
                </div>
            </div>
        </div>
     );
}
 
export default AVLPlayground;
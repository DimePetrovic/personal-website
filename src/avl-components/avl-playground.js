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

    const handleInsert = () => {
        const num = parseInt(value, 10);
        if (!isNaN(num)) {
            const newTree = tree.insertValue(num);
            setTree(newTree);
            const {newPositions, newWidth, newHeight} = newTree.getNodePositions();
            console.log(newPositions, newWidth, newHeight);
            setPositions(newPositions);
            setWidth(newWidth);
            setHeight(newHeight);
            setValue("");
        }
    };

    const handleDelete = () => {
        const num = parseInt(deleteValue, 10);
 
        if (!isNaN(num)) {
            const newTree = tree.deleteValue(num);
            setTree(newTree);
            const {newPositions, newWidth, newHeight} = newTree.getNodePositions();
            console.log(newPositions, newWidth, newHeight);
            setPositions(newPositions);
            setWidth(newWidth);
            setHeight(newHeight);
            setDeleteValue("");
        }
    };

    return ( 
        <div className="grow flex flex-col w-full md:mx-auto md:w-3/4">
            <h1 className="mt-4 text-xl font-bold mx-auto">AVL drveta</h1>

            <div className="">
                <p className=""></p>
                <p className=""></p>
            </div>

            <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl my-2 mx-2">
                <h2 className="mt-6 font-semibold mx-auto text-xl">Umetni novi čvor</h2>
                <input
                    className="mx-auto py-2 pl-2 rounded-lg border bg-slate-300"
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleInsert()}
                    placeholder="Unesi broj"
                />
                <button onClick={handleInsert} className='rounded-lg p-2 bg-amber-200 text-xl w-24 mx-auto mt-4'>Umetni</button>            
            </div>

            <div className="h-fit flex flex-col pb-2 shadow-lg md:shadow md:hover:shadow-xl my-2 mx-2">
                <h2 className="mt-6 font-semibold mx-auto text-xl">Obriši postojeći čvor</h2>
                <input
                    className="mx-auto py-2 pl-2 rounded-lg border bg-slate-300"
                    type="number"
                    value={deleteValue}
                    onChange={(e) => setDeleteValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleDelete()}
                    placeholder="Unesi broj"
                />
                <button onClick={handleDelete} className='rounded-lg p-2 bg-amber-200 text-xl w-24 mx-auto mt-4'>Obriši</button>
            </div>

            <div className="overflow-auto">
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
                            stroke="black"
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
        </div>
     );
}
 
export default AVLPlayground;
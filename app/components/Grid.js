import React, { useState, useRef } from 'react';
import MemberList from './MemberList';

const FixedGrid = () => {
    const [isDragging, setIsDragging] = useState(false);
    const gridRef = useRef(null);
    const cellSize = 50; // Example cell size
    const gridWidth = 1000; // Example grid width
    const gridHeight = 1000; // Example grid height
    const gridOffset = { x: 0, y: 0 }; // Example grid offset
    const members = Array.from({ length: 100 }, (_, i) => ({ name: `Member ${i + 1}` }));

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const generateGrid = () => {
        const rows = [];
        for (let y = 0; y < gridHeight / cellSize; y++) {
            for (let x = 0; x < gridWidth / cellSize; x++) {
                rows.push(
                    <div
                        key={`${x}-${y}`}
                        className="absolute border border-gray-200"
                        style={{
                            width: `${cellSize}px`,
                            height: `${cellSize}px`,
                            top: `${y * cellSize}px`,
                            left: `${x * cellSize}px`,
                        }}
                    ></div>
                );
            }
        }
        return rows;
    };

    return (
        <div className="flex">
            <div
                ref={gridRef}
                onMouseDown={handleMouseDown}
                className={`relative w-[calc(100vw-300px)] h-screen cursor-${isDragging ? 'grabbing' : 'grab'} overflow-hidden bg-white`}
            >
                <div
                    className="absolute"
                    style={{
                        top: `${gridOffset.y}px`,
                        left: `${gridOffset.x}px`,
                        width: `${gridWidth}px`,
                        height: `${gridHeight}px`,
                    }}
                >
                    {generateGrid()}
                </div>
            </div>
            <MemberList members={members} />
        </div>
    );
};

export default FixedGrid;
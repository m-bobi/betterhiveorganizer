"use client"
import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import MemberList from './components/MemberList';

export default function Home() {
  const [gridData, setGridData] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    { name: 'Chief' },
    { name: 'Jon Snow' },
    { name: 'Fullmetal Alchemist' },
    { name: 'Wesley Crusher' },
  ];

  useEffect(() => {
    const rows = 100;
    const cols = 100;
    const initialGrid = Array.from({ length: rows }, () => Array(cols).fill(null));
    setGridData(initialGrid);
  }, []);

  const handleAssignMember = (row, col) => {
    if (!selectedMember) return;

    const newGridData = [...gridData];
    newGridData[row][col] = { member: selectedMember.name };
    setGridData(newGridData);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <Grid rows={10} cols={10} gridData={gridData} onAssignMember={handleAssignMember} />
      </div>
      <div className="w-72 bg-white p-5 border-l border-gray-300 h-screen overflow-y-auto">
        <MemberList members={members} onSelectMember={setSelectedMember} />
        <p className="mt-4">Selected Member: {selectedMember?.name || 'None'}</p>
      </div>
    </div>
  );
}
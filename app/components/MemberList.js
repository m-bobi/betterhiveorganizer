import React from 'react';

const MemberList = ({ members, onSelectMember }) => {
    return (
        <div>
            <h3 className="font-semibold mb-4">Member List</h3>
            <ul className="space-y-2">
                {members.map((member, index) => (
                    <li
                        key={index}
                        onClick={() => onSelectMember(member)}
                        className="cursor-pointer hover:bg-gray-100 p-2"
                    >
                        {member.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MemberList;
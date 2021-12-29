import React from 'react';

const MemberItem = ({item}) => {
    const {username, age} = item;
    return (
        <>
         <li>
            {username} | {age}
        </li>   
        </>
    );
};

export default MemberItem;
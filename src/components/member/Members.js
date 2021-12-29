import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MemberItem from './MemberItem';

const Members = ({}) => {

    const [member, setMember] = useState([]);

    const listUrl = `/response-json`;
    
    useEffect( () => {
        axios({
            method: 'get',
            url: listUrl
        })
        .then(function (response) {
            console.log(response.data);
            setMember(response.data)
        })
    }, [])

    return (
        <ul>
            {
                member.map( ( item, index ) => <MemberItem key={index} item={item}/>)
            }
        </ul>
    );
};

export default Members;
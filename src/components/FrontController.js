import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const FrontController = ({version}) => {
    const listUrl = `/front-controller/v${version}/members`;
    
    const onRegister = () =>{
        const registerUrl = `/front-controller/v${version}/members/new-form`;
        axios({
            method: 'get',
            url: registerUrl
        })
        .then(function (response) {
            console.log(response);
        })
    }


    return (
        <>
        <li>
          FrontController - v{version}
          <ul>
            <li>
              <div onClick={onRegister}>회원가입</div>
            </li>
            <li>
              <a href={listUrl}>회원목록</a>
            </li>
          </ul>
        </li>   
        </>
    );
};

export default FrontController;
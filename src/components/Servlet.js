import React from 'react';
import { Link } from 'react-router-dom';

const Servlet = () => {
    return (
        <>
            <li>
          서블릿
          <ul>
            <li>
              <Link to="/new-form">회원가입</Link>
            </li>
            <li>
              <Link to="/servlet/members">회원목록</Link>
            </li>
          </ul>
        </li>
        </>
    );
};

export default Servlet;
import React from 'react';

const ServletMvc = () => {
    return (
        <>
        <li>
          서블릿 MVC
          <ul>
            <li>
              <a href="/servlet-mvc/members/new-form">회원가입</a>
            </li>
            <li>
              <a href="/servlet-mvc/members">회원목록</a>
            </li>
          </ul>
        </li>   
        </>
    );
};

export default ServletMvc;
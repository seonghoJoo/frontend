import React, { useState } from 'react';

const NewForm = () => {

    const [data, setData] = useState({
        username : '',
        age : '',
    });

    const [tempData, setTempData] = useState({})

    const [show, setShow] = useState(false)

    

    const onSubmit = (e) => {
        e.preventDefault()
        if(!data.username || !data.age) return;
        setShow(true)
        setTempData(data);
    }

    const onChange = (e) =>{
        const {name,value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }

    return (
        <div>
            <form action="/request-param" method="post" onSubmit={onSubmit}>
                username : <input type="text" name="username" value={data.username} onChange={onChange}/>
                age : <input type="text" name="age" value={data.age} onChange={onChange}/>
                <button type="submit">전송하기</button>
                <button type="submit">취소</button>
            </form>
            
            { show && 
                <div>
                    {tempData.username} | {tempData.age}
                </div>
            }
            
        </div>
    );
};

export default NewForm;
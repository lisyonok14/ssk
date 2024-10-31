import React from 'react'
import "./Registration.css";
import log from "../../assets/images/registr/reg.svg"


function Registration() {
    return (
        <div className='loginMain'>
            <div className='login'>
                <h1>Регистрация</h1>
                <input type="login" placeholder='Username' className='username'  />
                <input type="text" placeholder='ФИО' className='fio'  />
                <input type="text" placeholder='Номер студ. билета' className='number'  />
                <input type="text" placeholder='Группа' className='group'  />
                <input type="password" placeholder='Пароль' className='password' />
                <button className='one'>Зарегистрироваться</button>
                <button className='two'>Войти</button>
            </div>
        </div>
    )
}

export default Registration

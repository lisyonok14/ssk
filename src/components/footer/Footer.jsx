import React from 'react'
import "./Footer.css";
import Logo from "../../assets/images/nav/logo.svg"

import vk from"../../assets/images/footer/vk.svg"
import tg from"../../assets/images/footer/telegram.svg"
import phone from"../../assets/images/footer/phone.svg"
import mail from"../../assets/images/footer/mail.svg"

const Footer = () => {
    return (
        <>
        <footer>
            <img id='lg' src={Logo} alt="" />
            <div className='contacts'>
                <div className='tgVk'>
                    <img src={vk} alt="" />
                    <img src={tg} alt="" />
                </div>

                <div className='numbEm'>
                    <div className='numb'>
                        <img src={phone} alt="" />
                        <p>+7(111)111-11-11</p>
                    </div>
                    
                    <div className='mail'>
                        <img src={mail} alt="" />
                        <p>info@ask.com</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer

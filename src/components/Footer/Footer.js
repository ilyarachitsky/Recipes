import React, { useState } from 'react';
import styles from './Footer.module.css';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { IconContext } from "react-icons";
import fork from './cutlery.svg';

export default function Footer() {
    const [email, setEmail] = useState('')

    const emailHandler = e => {
        setEmail(e.target.value)
    }

    const submitHandler = () => {
        setEmail('')
    }
    return (
        <footer className={styles.footer}>
            <IconContext.Provider value={{ size: '2.5em', className: styles.icons }}>
                <div className={styles.social}>
                    <AiOutlineInstagram />
                    <AiOutlineFacebook />
                    <AiOutlineTwitter />
                </div>
            </IconContext.Provider>
            <img src={fork} alt="fork" />
            <div className={styles.newsletter}>
                <input value={email} onChange={emailHandler} type="email" placeholder='Subscribe for new recipes...' />
                <button onClick={submitHandler} type='submit'>Subscribe</button>
            </div>
        </footer >
    )
}

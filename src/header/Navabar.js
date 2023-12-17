import React from 'react'
import logo from '../assests/logo.png'
import '../header/navbar.css'

const Navabar = () => {



    return (
        <div className='navbar '>
            <div className='imgdiv'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='list'>
                 <ul ><a href='#home' >
                    Home
                </a></ul>
                <ul><a href='#about'>
                    About
                </a></ul>
                <ul><a href='#service'>
                    Service
                </a></ul>
                <ul><a href='#skills'>
                    Skills
                </a></ul>
                <ul><a href='#portfolio'>
                    Portfolio
                </a></ul>

                <ul><a href='#contact'>
                    Contact
                </a></ul>


            </div>
        </div>
    )
}

export default Navabar
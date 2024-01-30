import React from 'react'
import logo from '../assests/logo.png'
import '../header/navbar.css'

const Navabar = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className='navbar '>
            <div className='imgdiv'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='list'>
                <ul ><a href='#home' className={selectedItem === 'Home' ? 'selected' : ''} onClick={() => handleItemClick('Home')} >
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
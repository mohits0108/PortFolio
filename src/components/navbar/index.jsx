import React, { useState } from 'react';
import {FaBars,FaReact} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {HiX} from 'react-icons/hi';
import './style.scss';
const data=[
    {
        label : 'HOME',
        to : '/'
    },
    {
        label : 'ABOUT ME',
        to : '/about'
    },
    {
        label : 'SKILLS',
        to : '/skills'
    },
    {
        label : 'RESUME',
        to : '/resume'
    },
    {
        label : 'PORTFOLIO',
        to : '/portfolio'
    },
    {
        label : 'CONTACT',
        to : '/contact'
    },
    {
        label : 'REPORTS',
        to : '/reports'
    }
];
const Navbar = () => {
  const [toggleIcon,setToggleIcon]=useState(false)
  const HandleToggleIcon = ()=>{
    setToggleIcon(!toggleIcon)
  }
  return (
    <div>
       <nav className='navbar'>
        <div className='navbar_contanier'>
             <Link to={'/'} className='navbar_contanier_logo'>
             <FaReact size={30}/>
             </Link>
        </div>
         <ul className={`navbar_contanier_menu ${toggleIcon ? "active": ''}`}
         >
            {
                data.map((item,key)=>(
                    <li key={key} className='navbar_contanier_menu_item'>
                      <Link className='navbar_contanier_menu_item_links' to={item.to}>
                        {item.label}
                      </Link>
                    </li>
                ))
            }
         </ul>
         <div className='nav-icon' onClick={HandleToggleIcon}>
                {toggleIcon ? <HiX size={30}/> :<FaBars size={30}/>}
         </div>
       </nav>
    </div>
  )
}

export default Navbar;

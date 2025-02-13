import logo from '../assets/images/plan_it_logo.png'
import menu from '../assets/images/menu.svg'
import month from '../assets/images/month.svg'
import todo from '../assets/images/todo.svg'
import note from '../assets/images/note.svg'
import { Link } from "react-router-dom";
import { useState } from 'react'

function NavBar(){
    let [active, setActive] = useState('');

    return (
        <nav className='NavBar'>
            <ul>
                <li className={active === 'home' ? 'active' : ''} onClick={() => {setActive('home')}}>
                    <Link to='/'><img src={logo} /></Link>
                </li>
                <li className={active === 'menu' ? 'active' : ''} onClick={() => {setActive('menu')}}>
                    <Link to='/'><img src={menu} /></Link>
                </li>
                <li className={active === 'todo' ? 'active' : ''} onClick={() => {setActive('todo')}}>
                    <Link to='/Todo'><img src={todo} /></Link>
                </li>
                <li className={active === 'month' ? 'active' : ''} onClick={() => {setActive('month')}}>
                    <Link to='/Month'><img src={month} /></Link>
                </li>
                <li className={active === 'note' ? 'active' : ''} onClick={() => {setActive('note')}}>
                    <Link to='/Note'><img src={note} /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
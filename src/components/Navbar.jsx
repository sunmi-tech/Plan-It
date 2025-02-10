import logo from '../assets/images/plan_it_logo.png'
import menu from '../assets/images/menu.svg'
import month from '../assets/images/month.svg'
import todo from '../assets/images/todo.svg'
import note from '../assets/images/note.svg'
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className='NavBar'>
            <ul>
                <li>
                    <Link to='/'><img src={logo} /></Link>
                </li>
                <li>
                    <Link to='/'><img src={menu} /></Link>
                </li>
                <li>
                    <Link to='/Todo'><img src={todo} /></Link>
                </li>
                <li>
                    <Link to='/Month'><img src={month} /></Link>
                </li>
                <li>
                    <Link to='/Note'><img src={note} /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
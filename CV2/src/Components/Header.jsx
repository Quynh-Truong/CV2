import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <input type="checkbox" id="burger-bars" />
                    <ul className="menu">
                        <li>
                            <NavLink to='/'>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/experience'>
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/education'>
                                Education
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/portfolio'>
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="ham-menu">
                    <label htmlFor="burger-bars">
                        <i className="fa-solid fa-bars" />
                    </label>
                </div>
            </header>

        </>
    )
}
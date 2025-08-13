import {Link} from 'react-router-dom'

export default function Navbar(nameClass) {
    return <nav className={nameClass}>
        <ul>
            <li>
                <Link to={'/tools'}>Tools</Link>
            </li>
            <li>
                <Link to={''}></Link>
            </li>
            <li>
                <Link to={'/about'}>About us</Link>
            </li>
        </ul>
    </nav>
}пш
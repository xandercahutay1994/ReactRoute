import React from 'react'
import {
    NavLink as Link
} from 'react-router-dom'
import Main from './Main';

const Headers = () => (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    </div>
    
)
export default Headers


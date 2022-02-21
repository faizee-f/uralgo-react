import React from 'react';
import { Link } from 'react-router-dom';
function NavAuth() {
    return (
        <div>
            <ul className='navbar-nav mr-auto mb-2 mb-lg-0'>
                <li class="nav-item">
                    <Link class="nav-link " to='/signin'>Sign in </Link>
                </li>
            </ul>

        </div>
    );
}

export default NavAuth;

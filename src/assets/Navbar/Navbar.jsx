import React from 'react';
import Link from './Link';

const navigationData = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About",
            path: "/about"
        },
        {
            id: 3,
            name: "Accommodation",
            path: "/accommodation"
        },
        {
            id: 4,
            name: "Gallery",
            path: "/gallery"
        },
        {
            id: 5,
            name: "Contact",
            path: "/contact"
        }
    ];

const Navbar = () => {
    return (
        <nav className='max-w-7xl m-auto'>

            <ul className='flex'>
                {
                    navigationData.map (route => <Link key={route.id} route = {route}></Link>)
                }
            </ul>
            {/* <ul className='flex'>
                {
                    navigationData.map (route => 
                        <li className='mr-10'>
                            <a href={route.path}>{route.name}</a>
                        </li>
                    )
                }
            </ul> */}
        </nav>
    );
};

export default Navbar;
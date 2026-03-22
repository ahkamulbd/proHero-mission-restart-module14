import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';



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
const links = navigationData.map (route => <Link key={route.id} route = {route}></Link>);

const Navbar = () => {
    const [open, setOpen] = useState (false);
    return (
        <nav className='max-w-7xl m-auto flex px-4 py-2 justify-between text-black'>

            <span className='flex' onClick={() => setOpen (!open)}>
                {
                    open ? 
                    <X className='md:hidden'></X> : 
                    <Menu className='md:hidden'></Menu>
                }
                <ul className= {`md:hidden absolute duration-1000
                    ${open ? 'top-8' : '-top-40'}
                    bg-amber-200`}>
                    {links}
                </ul>
                <h2 className='ml-5'>MenuLogo</h2>                
            </span>
            

            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>

            <button>Sign In</button>
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
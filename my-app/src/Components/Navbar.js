import { Link,useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import '../styles/Navbar.css'
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const location=useLocation();

    useEffect(()=>{
        setShowMenu(false);
    },[location]);
    
    return (
        <div className='navbar' id={showMenu? "open":"close"}>
            <div className='toggleButton'>
                <button onClick={()=>setShowMenu((prev)=>!prev)}>
                <FaBars />
                </button>
            </div>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
            </div>
        </div>
    )
}

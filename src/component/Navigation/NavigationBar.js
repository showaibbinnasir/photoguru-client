import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(authContext)
    
    const handleLogOut = () => {
        logOut()
        .then(()=> {})
        .catch(error => console.error(error))
      }
    return (
        <div className='sticky top-0 z-40'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold'><Link to='/'>Home</Link></li>
                        <li className='font-semibold'><Link to='/services'>Services</Link></li>
                        <li className='font-semibold'><Link to='/about'>About</Link></li>
                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                        
                    </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">PhotoGuru</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    <li className='font-semibold'><Link to='/'>Home</Link></li>
                    <li className='font-semibold'><Link to='/services'>Services</Link></li>
                    <li className='font-semibold'><Link to='/about'>About</Link></li>
                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? 
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn m-1">{user?.email}</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><button onClick={handleLogOut}>LogOut</button></li>
                                
                            </ul>
                        </div> : 
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn m-1">Login</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/registration'>Registration</Link></li>
                            </ul>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
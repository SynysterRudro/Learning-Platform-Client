import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => (error))
    }
    return (
        <div>
            <div className="bg-gray-900 lg:mb-0">
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">

                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <Link className='text-white' to='/'>
                                {user?.uid ?
                                    <img title='user profile picture' className='rounded-full h-14' src={user?.photoURL} alt="" />
                                    :
                                    <></>
                                }

                            </Link>
                            <li>
                                <Link
                                    to='/courses'
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/faq'
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/blogs'
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                >
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                        <Link
                            to='/'
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center lg:mx-auto"
                        >
                            <svg
                                className="w-8 text-teal-400"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                stroke="currentColor"
                                fill="none"
                            >
                                <rect x="3" y="1" width="7" height="12" />
                                <rect x="3" y="17" width="7" height="6" />
                                <rect x="14" y="1" width="7" height="6" />
                                <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                CSE Ravens
                            </span>
                        </Link>




                        <div >
                            <label className="inline-flex m-2 items-center space-x-4 cursor-pointer dark:text-gray-100">
                                <span>Dark Mode</span>
                                <span className="relative">
                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                                </span>
                            </label>

                            {user?.uid ?
                                <>
                                    <Button className='bg-teal-600 hover:bg-teal-500 text-white p-2 rounded-md mx-2' onClick={handleLogout}>Logout</Button>
                                </>
                                :
                                <>
                                    <Link className='bg-teal-600 hover:bg-teal-500 text-white p-2 rounded-md mx-2' to='/login'><Button>Login</Button></Link>
                                    <Link className='bg-teal-600 p-2 hover:bg-teal-500 text-white rounded-md text-2l' to='/register'><Button>Register</Button></Link>
                                </>
                            }
                        </div>



                        <div className="ml-auto lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full">
                                    <div className="p-5 bg-white border rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <Link
                                                    to="/"
                                                    aria-label="Company"
                                                    title="Company"
                                                    className="inline-flex items-center"
                                                >
                                                    <svg
                                                        className="w-8 text-purple-400"
                                                        viewBox="0 0 24 24"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeMiterlimit="10"
                                                        stroke="currentColor"
                                                        fill="none"
                                                    >
                                                        <rect x="3" y="1" width="7" height="12" />
                                                        <rect x="3" y="17" width="7" height="6" />
                                                        <rect x="14" y="1" width="7" height="6" />
                                                        <rect x="14" y="11" width="7" height="12" />
                                                    </svg>
                                                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                        CSE Raven
                                                    </span>
                                                </Link>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link
                                                        to="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                    >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/courses"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                    >
                                                        Courses
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/blogs"
                                                        aria-label="Product pricing"
                                                        title="Product pricing"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                    >
                                                        Blogs
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/"
                                                        aria-label="Sign in"
                                                        title="Sign in"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                                    >
                                                        Sign in
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/"
                                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Sign up"
                                                        title="Sign up"
                                                    >
                                                        Sign up
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
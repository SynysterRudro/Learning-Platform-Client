import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div className='flex'>
            <div>
                <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
                    <nav className="space-y-8 text-sm">
                        <div className="space-y-2">
                            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Getting Started</h2>
                            <div className="flex flex-col space-y-1">
                                <Link rel="noopener noreferrer" href="#">Installation</Link>
                                <Link rel="noopener noreferrer" href="#">Plugins</Link>
                                <Link rel="noopener noreferrer" href="#">Migrations</Link>
                                <Link rel="noopener noreferrer" href="#">Appearance</Link>
                                <Link rel="noopener noreferrer" href="#">Mamba UI</Link>
                            </div>
                            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Pages</h2>
                            <div className="flex flex-col space-y-1">
                                <Link rel="noopener noreferrer" to='/'>Home</Link>
                                <Link rel="noopener noreferrer" to='/faq'>Faq</Link>
                                <Link rel="noopener noreferrer" to='/courses'>Courses</Link>
                                <Link rel="noopener noreferrer" to='/blogs'>Blogs</Link>
                            </div>
                        </div>
                    </nav>
                </aside>
            </div>
            <div>dsd</div>
        </div>
    );
};

export default Courses;
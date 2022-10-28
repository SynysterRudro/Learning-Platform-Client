import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">A learning website
                    <span className="dark:text-violet-400"> for those who has intereset in </span>CSE
                </h1>
                <div className="flex flex-wrap justify-center my-5">
                    <Link to='/courses'>
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Courses</button>
                    </Link>
                    <Link to='/blogs'>
                        <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Blogs</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
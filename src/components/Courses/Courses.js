import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://learning-platform-server-synysterrudro.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='flex'>
            <div>
                <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
                    <nav className="space-y-8 text-sm">
                        <div className="space-y-2">
                            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Total courses- {courses.length}</h2>
                            <div className="flex flex-col space-y-1">

                                {
                                    courses.map(course => <Link
                                        to={`/courses/${course.id}`}
                                        key={course.id}
                                    >{course.name}</Link>)
                                }
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
            <div className="grid grid-rows-6 lg:grid-rows-2 grid-flow-col gap-4">
                {
                    courses.map(course => <SingleCourse
                        key={course.id}
                        course={course}
                    ></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Courses;
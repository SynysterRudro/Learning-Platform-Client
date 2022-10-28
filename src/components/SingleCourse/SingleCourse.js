import React from 'react';
import { Link } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const SingleCourse = ({ course }) => {
    // console.log(course);
    const { id, name, img, details } = course;
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div>
                <img className='h-36' src={img} />
                <h2 className="mb-1 text-xl font-semibold">{name}</h2>
                <p className="text-sm dark:text-gray-400">{details.slice(0, 100)}...</p>
            </div>

            <button className='bg-blue-600 hover:bg-blue-400 rounded p-2'><Link to={`/courses/${id}`}>Read More</Link></button>
        </div>
    );
};

export default SingleCourse;
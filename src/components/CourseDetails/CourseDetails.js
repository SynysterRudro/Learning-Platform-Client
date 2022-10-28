import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {
    const coursesNews = useLoaderData();
    const { id, name, price, img, details } = coursesNews;
    const ref = React.createRef();

    return (
        <div className="max-w-xl p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <div ref={ref}>
                <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{id} Price- {price}</span>
                    <h2 className="text-xl text-teal-500 font-semibold tracking-wide">{name}</h2>
                </div>
                <p className="text-teal-500">{details}</p>
            </div>


            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='m-4' onClick={toPdf}>
                    <p className='text-2xl text-blue-600 '><FaDownload></FaDownload></p></button>}
            </Pdf>




            <button className='bg-blue-600 hover:bg-blue-400 rounded p-2 mt-2'><Link to={`/checkout/${id}`}>Get premium access</Link></button>

        </div>
    );
};

export default CourseDetails;
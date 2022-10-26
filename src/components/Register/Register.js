import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { emailPasswordSignUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);
        handleSignUp(email, password);
    }

    const handleSignUp = (email, passoword) => {
        emailPasswordSignUp(email, passoword)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => setMessage(error.message))
    }

    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                        <span className="block mb-2 dark:text-violet-400">Learn with pleasure</span>
                        <h1 className="text-5xl mb-2 font-extrabold dark:text-gray-50">CSE Raven</h1>

                        <form onSubmit={handleSubmit} className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                            <div>
                                <label className="text-sm sr-only">Your name</label>
                                <input name='name' id="name" type="text" placeholder="Your name - Optional" className="w-full rounded-md focus:ring focus:ring-violet-400 p-2 text-black dark:border-gray-700" />
                            </div>
                            <div>
                                <label className="text-sm sr-only">photo url</label>
                                <input id="name" name='photo' type="text" placeholder="Your photo url - Optional" className="w-full rounded-md focus:ring focus:ring-violet-400 text-black p-2 dark:border-gray-700" />
                            </div>
                            <div>
                                <label className="text-sm sr-only">Email address</label>
                                <input id="lastname" name='email' type="text" placeholder="Email address - Required" className="w-full rounded-md focus:ring focus:ring-violet-400 text-black p-2 dark:border-gray-700" required />
                            </div>
                            <div>
                                <label className="text-sm sr-only">Email address</label>
                                <input id="lastname" name='password' type="passoword" placeholder="Password - Required" className="w-full rounded-md focus:ring focus:ring-violet-400 text-black p-2 dark:border-gray-700" required />
                            </div>

                            <button type="submit" className="w-full py-2 font-semibold rounded dark:bg-violet-400 hover:bg-violet-300 dark:text-gray-900">Sign Up</button>
                            <p>Have an account? <Link className='text-blue-600' to='/login'>Login</Link></p>
                            <p>{message}</p>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
import React from 'react';

const Register = () => {
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                        <span className="block mb-2 dark:text-violet-400">Learn with pleasure</span>
                        <h1 className="text-5xl font-extrabold dark:text-gray-50">CSE Raven</h1>
                        <p className="my-8">
                            SignIn First
                        </p>
                        <form className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                            <div>
                                <label htmlFor="name" className="text-sm sr-only">Your name</label>
                                <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-400 p-2 dark:border-gray-700" />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                                <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-400 p-2 dark:border-gray-700" />
                            </div>
                            <button type="button" className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign In</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
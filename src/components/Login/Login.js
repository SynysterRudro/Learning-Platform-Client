
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const Login = () => {

    const { provideLogin, githubLogin } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.passoword.value;
        console.log(email, password);
    }

    const handleGithubSignIn = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignin = () => {
        provideLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.message(error))
    }


    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                    <span className="block mb-2 dark:text-violet-400">Learn with pleasure</span>
                    <h1 className="text-5xl font-extrabold dark:text-gray-50">CSE Raven</h1>
                    <p className="my-8">
                        SignIn First
                    </p>
                    <form onSubmit={handleSubmit} className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">

                        <div>
                            <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                            <input type="text" name="email" className="w-full rounded-md focus:ring focus:ring-violet-400 p-2 dark:border-gray-700 text-black" placeholder='your email address' />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="text-sm sr-only">Your password</label>
                            <input type="password" name="passoword" className="w-full rounded-md focus:ring focus:ring-violet-400 p-2 dark:border-gray-700 text-black" placeholder='your password' />
                        </div>

                        <button type="submit" className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign In</button>
                        <p>Need an account?<Link to='/register' className='text-blue-800 underline'>Register</Link> instead</p>
                    </form>
                </div>
                <div>
                    <p>Or login using</p>
                    <button onClick={handleGoogleSignin} type="button" className="px-8 my-2 py-3 font-semibold border rounded hover:bg-slate-500 dark:border-gray-100 dark:text-gray-100"><FaGoogle></FaGoogle> Google</button>
                    <br />
                    <button onClick={handleGithubSignIn} type="button" className="px-8 py-3 font-semibold border rounded hover:bg-slate-500 dark:border-gray-100 dark:text-gray-100"><FaGithub></FaGithub>GitHub</button>

                </div>

            </div>
        </section>
    );
};

export default Login;
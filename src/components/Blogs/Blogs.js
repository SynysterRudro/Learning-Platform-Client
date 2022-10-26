import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className='mb-12 text-4xl font-bold leading-none  sm:text-5xl'>CSE Ravens</p>
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is Cors?</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    CORS stands for Cross-Origin Resource Sharing. It is basically an HTTP-header based mechanism which allows a server to indicate any origins. It depends on a mechanism by which browser make a request to the server hosting the cross-origin resource for checking whether the server will permit the actual request or not.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Why are we using firebase? What are the options do you have to implement authentication? </summary>
                            <div className="px-4 pb-4">
                                <p>
                                    We are using Google Firebase in authentication purpose. It helps us in developing high-quality apps, growwing user base, and earn more money. Each feature works independently, and they work even better together and as we know it is a product of Google, that means it is much more secured and reliable than other auth platforms.
                                    We can also use - Auth0, mongoDb, Okta, Amazon Cognito etc for implementing authentication.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does the private route works?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    Private route is also called protected route as it is not accessable by every user. To access the private route user must have to be logged in, if the user is not logged in than he or she can not access that route but if the user is logged in to that website than he or she can access the route. This is the main concept of private route.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is node? How does it works?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    Node js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application.
                                    It accepts the request from the clients and sends the response to server, while working with the request node.js handles them with a single thread.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
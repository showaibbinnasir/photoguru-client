import React from 'react';
import useTitle from '../Hook/useTitle';

const Blog = () => {
    useTitle('Photoguru - Blog')
    return (
        <div className='mx-12'>
            <div>
            <div className='bg-secondary p-5 mb-4'>
                <h1 className="text-3xl">#Difference between SQL and NoSQL</h1>
                <div className='ml-8 grid gap-4 mb-5 grid-cols-1 lg:grid-cols-2' >
                    <div>
                        <h2 className="text-2xl">SQL</h2>
                        <ul>
                            <li>These databases have fixed or static or predefined schema</li>
                            <li>These databases are not suited for hierarchical data storage.</li>
                            <li>These databases are best suited for complex queries</li>
                            <li>Vertically Scalable</li>
                            <li>Follows ACID property</li>
                            <li>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl">NoSQL</h2>
                        <ul>
                            <li>They have dynamic schema</li>
                            <li>These databases are best suited for hierarchical data storage.</li>
                            <li>These databases are not so good for complex queries</li>
                            <li>Horizontally scalable</li>
                            <li>Follows CAP(consistency, availability, partition tolerance)</li>
                            <li>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-secondary p-5 mb-4'>
                <h1 className="text-3xl">#What is JWT?</h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object</p>
                <h1 className="text-3xl">#How JWT Work?</h1>
                <ul>
                    <li>User sign-in using username and password or google/facebook.</li>
                    <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                    <li>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                    <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                </ul>
            </div>
            <div className='bg-secondary p-5 mb-4'>
                <h1 className="text-3xl">#What is the difference between javascript and NodeJS?</h1>
                <div className='ml-8 grid gap-4 mb-5 grid-cols-1 lg:grid-cols-2' >
                    <div>
                        <h2 className="text-2xl">JavaScript</h2>
                        <ul>
                            <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                            <li>Javascript can only be run in the browsers.</li>
                            <li>It is basically used on the client-side.</li>
                            <li>Javascript is capable enough to add HTML and play with the DOM.</li>
                            <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</li>
                            <li>Javascript is used in frontend development.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl">NodeJs</h2>
                        <ul>
                            <li>NodeJS is a Javascript runtime environment.</li>
                            <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                            <li>It is mostly used on the server-side.</li>
                            <li>Nodejs does not have capability to add HTML tags.</li>
                            <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</li>
                            <li>Nodejs is used in server-side development.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-secondary p-5 mb-4'>
                <h1 className="text-3xl">#How does NodeJS handle multiple requests at the same time?</h1>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. </p>
            </div>
        </div>

        </div>
    );
};

export default Blog;
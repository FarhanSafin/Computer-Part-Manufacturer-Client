import React from 'react';

const Blog = () => {
    return (
        <div className='mt-40 container mx-auto'>
            <h2 className='underline text-3xl mt-20 text-secondary'>How will you improve the performance of a React Application?</h2>
            <p className='m-14'>Different things may be done to increase the performance of a React application. We can save the state of the component locally. To avoid needless re-renders, we may also memoize React components. To optimize render performance, we should separate the code as much as feasible. We can also utilize lazy loading to delay rendering the pictures in the DOM until they are ready to display in the viewport.</p>
            <h2 className='underline text-4xl mt-20 text-secondary'>What are the different ways to manage a state in a React application?</h2>
            <p className='m-14'>Redux, react hooks, server state, global state and also many more are all options for managing state in a React application.</p>
            <h2 className='underline text-4xl mt-20 text-secondary'>How does prototypical inheritance work?</h2>
            <p className='m-14'>Prototypal Inheritance is a JavaScript feature that allows you to add methods and attributes to objects. It's a technique that allows one object to inherit the attributes and methods of another.</p>
            <h2 className='underline text-4xl mt-20 text-secondary'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p className='m-14'>TThe includes() function of JavaScript may be used to check whether an array contains a given name inside the given array.</p>
            <h2 className='underline text-4xl mt-20 text-secondary'>What is a unit test? Why should write unit tests?</h2>
            <p className='m-14'>A unit test is a method of testing a unit, which is the smallest amount of code in a system that can be logically separated and tested if its working or not according to the requirement. Unit tests are automated tests designed and executed by software engineers to confirm that a piece of an application (referred to as a "unit") matches its design and operates as expected.</p>
        </div>
    );
};

export default Blog;
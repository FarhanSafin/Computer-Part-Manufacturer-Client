import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='text-center mt-40 text-3xl text-secondary'>
            <h2><span className='font-bold'>Name:</span> Farhan Md. Siraj</h2>
            <h2 className='mt-5'><span className='font-bold'>Email:</span> farhansafin97@yahoo.com</h2>
            <h2 className='mt-5'><span className='font-bold'>Educational Background::</span> Completed Bachelor of Science in Computer Science and Engineering from BRAC University </h2>
            <h2 className='mt-5'><span className='font-bold'>Technologies I know:</span> REACTJS, NODEJS, ExpressJS, MongoDB, JavaScript, Python</h2>
            <div className='mt-5'>
            <h2 className='mb-5'>My three projects: </h2>
            <a className='font-bold' target="_blank" rel="noreferrer" href="https://todo-app-1eb71.web.app">Todo App, </a>
            <a className='font-bold' target="_blank" rel="noreferrer" href="https://manage-inventory-system.web.app/home">Inventory Management System, </a>
            <a className='font-bold' target="_blank" rel="noreferrer"  href="https://teaching-tutor-3cdb0.web.app/home">Single Service Provider</a>
            </div>
            
        </div>
    );
};

export default MyPortfolio;
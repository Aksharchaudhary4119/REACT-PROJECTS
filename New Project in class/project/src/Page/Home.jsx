import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import MainImg from './IMG/HOME-MAIN.png';

const Home = () => {
    return (
        <>
        <div className='body'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="" alt="" />
                    <div>
                        <h3 className='mb-3 first-text'>Join us</h3>
                        <h1 className='fw-bold h1-home mb-1'>A CLEAN WORLD</h1>
                        <p className='text-white'>Save nature in community</p>
                        <button className='fw-bold bg-success text-white border border-success border-radius-sm'>See more</button>
                        <div className='d-flex flex-row mt-4'>
                            <p className='text-white'>Check our website</p>
                            <p className='home-p ps-4'>acleanworld.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Home;
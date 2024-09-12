import React from 'react';

const RegistrationCompo = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 mt-5">
                        <div className="card">
                            <div className="card-header text-center"> Login </div>
                            <div className="card-body">
                                <form method="post">
                                    <div className="row mt-2">
                                        <div className="col">
                                            <input type="text" className='form-control' placeholder='Enter User Name' name="username" id="username" />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <input type="password" className='form-control' placeholder='Enter Password' name="password" id="password" />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <input type="email" className='form-control' placeholder='Enter Email' name="email" id="email" />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col text-center">
                                            <input type="button" className='btn btn-primary' value="Registration" name="login" id="login" /> &nbsp;
                                            <input type="reset" className='btn btn-danger' value="Cancel" name="cancel" id="cancel" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationCompo;
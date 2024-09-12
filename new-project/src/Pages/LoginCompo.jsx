import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ValidateInput from './../CustomHook/Validate';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

const LoginCompo = () => {
    // const {InputChangeHandle,inp,errors}=ValidateInput({},{});
    const [emptyData, setEmptyData] = useState(false);
    const [loginErrorStatus, setLoginErrorStatus] = useState(false);
    const [cookies, setCookie] = useCookies(['login']);
    const navigate = useNavigate();

    const { InputChangeHandle, inp, errors } = ValidateInput({}, {});
    let checkLogin = (e) => {
        e.preventDefault();
        if (Object.keys(inp).length == 0) {
            setEmptyData(!emptyData)
        } else {
            // console.log(inp);
            // console.log(inp);
            
            if (inp.uname==="" || inp.pass==="") {
                // console.log(errors);
                setEmptyData(!emptyData)
            } else {
                // setEmptyData(!emptyData)
                // fetch(`http://localhost:5000/users?`)
                fetch(`http://localhost:5000/users?uname=${inp.uname}&pass=${inp.pass}`).then((response)=>response.json()).then((result)=>{
                    // console.log(result.length);
                    if (result.length == 0) {
                        setLoginErrorStatus(true)
                        setCookie('login', false);
                    } else {
                        setCookie('login', true);
                        console.log(result);
                        console.log(result[0]);
                        console.log(result[0].role);
                        
                        if (result[0].role == 1) {
                            navigate("/admindashboard");
                        }else{
                            navigate("/userdashboard");

                        }
                    }
                    
                })

                // localStorage.setItem('token', response.data.token);
                // import Cookies from 'universal-cookie';
                // const cookies = new Cookies();
                // cookies.set('myCat', 'Pacman', { path: '/' });
                // console.log(cookies.get('myCat')); // Pacman
            }
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="card">
                        {/* {JSON.stringify(emptyData)} */}
                            <div className="card-header text-center">Login</div>
                            {/* <div className="card-body">  </div>    */}
                            <div className="card-body">
                                <form onSubmit={checkLogin}>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" placeholder='Enter User Name' className='form-control' onChange={InputChangeHandle} name="uname" onBlur={InputChangeHandle} required />
                                            {errors.unameError ? <span>This field is Required</span> : <></>}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input className='form-control' placeholder='Enter your Password' type="password" onChange={InputChangeHandle} name="pass" onBlur={InputChangeHandle} required />
                                            {errors.unameError ? <span>This field is Required</span> : <></>}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            <input type="submit" className='btn btn-info' /> &nbsp;
                                            <input type="reset" className='btn btn-warning' />
                                        </div>

                                    </div>
                                </form>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <Link to="/signup">Click here to create new account</Link>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        {(emptyData) ? "* fields are required" : ""}
                                        {(loginErrorStatus) ? "Invalid User" : ""}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginCompo;
import React, { useState } from 'react';
import styles from './login.css';

const LoginRegisterPage = () => {
    const [changeForm,setChangeForm] = useState(true)
    // const [data,setData] = useState('');
    const [data,setData] = useState({});
    const [password,setPassword] = useState();
    return (
        <>
            <section className="user">
                <div className="user_options-container">
                    <div className="user_options-text">
                        <div className="user_options-unregistered">
                            <h2 className="user_unregistered-title">Don't have an account?</h2>
                            <p className="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
                            <button className="user_unregistered-signup" onClick={()=>{setChangeForm(!changeForm)}} id="signup-button">Sign up</button>
                        </div>

                        <div className="user_options-registered">
                            <h2 className="user_registered-title">Have an account?</h2>
                            <p className="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
                            <button className="user_registered-login" onClick={()=>{setChangeForm(!changeForm)}} id="login-button">Login</button>
                        </div>
                    </div>

                    {/* <div className="user_options-forms" id="user_options-forms"> */}
                    <div className= {(changeForm)? "user_options-forms bounceLeft":"user_options-forms bounceRight" }  id="user_options-forms">
                        <div className="user_forms-login">
                            <h2 className="forms_title">Login</h2>
                            <form className="forms_form">
                                <fieldset className="forms_fieldset">
                                    <div className="forms_field">
                                        <input type="email" placeholder="Email" className="forms_field-input" required autofocus />
                                    </div>
                                    <div className="forms_field">
                                        <input type="password" placeholder="Password" className="forms_field-input" required />
                                    </div>
                                </fieldset>
                                <div className="forms_buttons">
                                    <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                                    <input type="submit" value="Log In" className="forms_buttons-action"/>
                                </div>
                            </form>
                        </div>
                        <div className="user_forms-signup">
                            <h2 className="forms_title">Sign Up</h2>
                            <form className="forms_form">
                                <fieldset className="forms_fieldset">
                                    <div className="forms_field">
                                        {/* <input type="text"  placeholder="Full Name" name='fullname' className="forms_field-input" required onChange = {(e) => {setPassword(e.target.value)}} /> */}
                                        <input type="text"  placeholder="Full Name" name='fullname' className="forms_field-input" required onChange={(e)=>setData(prev=>({...prev,[e.target.name]:e.target.value}))} />
                                    </div>
                                    <div className="forms_field">
                                        <input type="email" placeholder="Email" name='email' className="forms_field-input" required onChange = {(e) => setData(pre =>({...pre,[e.target.name]:e.target.value}))} />
                                    </div>
                                    <div className="forms_field">
                                        {/* <input type="password" placeholder="Password" className="forms_field-input" required onChange = {(e) => {setPassword(e.target.value)}} /> */}
                                        <input type="password" placeholder="Password" name='password' className="forms_field-input" required  onChange = {(e) => setData(pre =>({...pre,[e.target.name]:e.target.value}))} />
                                    </div>
                                </fieldset>
                                <div className="forms_buttons">
                                    <input type="submit" value="Sign up" className="forms_buttons-action"/>
                                    {/* {data} */}
                                    {JSON.stringify(data)}
                                    {/* {password} */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default LoginRegisterPage;
import React, { useState } from 'react';
import './Login.css';
import assets from '../../assets/assets';
import { signup, login, resetPass } from '../../config/firebase';

const Login = () => {
    const [currState, setCurrState] = useState("Giriş Yap");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        if (currState === "Kayıt Ol") {
            signup(userName, email, password);
        } else if (currState === "Giriş Yap") {
            login(email, password);
        } else if (currState === "Şifre Sıfırla") {
            resetPass(email);
        }
    };

    return (
        <div className='login'>
            <img src={assets.logo_big} className='logo' alt="logo" />

            <form onSubmit={onSubmitHandler} className="login-form">
                <h2>{currState === "Kayıt Ol" ? "Kayıt Ol" : currState === "Giriş Yap" ? "Giriş Yap" : "Şifre Sıfırla"}</h2>
                
                {/* Username input only for Sign Up */}
                {currState === "Kayıt Ol" && (
                    <input 
                        onChange={(e) => setUserName(e.target.value)} 
                        value={userName} 
                        type="text" 
                        placeholder='Kullanıcı Adı' 
                        className='form-input' 
                        required 
                    />
                )}
                
                {/* Email input for all states */}
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    type="email" 
                    placeholder='E-Posta' 
                    className='form-input' 
                    required 
                />

                {/* Password input for Sign Up and Login */}
                {(currState === "Kayıt Ol" || currState === "Giriş Yap") && (
                    <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        type="password" 
                        placeholder='Şifre' 
                        className='form-input' 
                        required 
                    />
                )}

                {/* Terms & Conditions for Sign Up */}
                {currState === "Kayıt Ol" && (
                    <div className="login-term">
                        <input style={{cursor:'pointer'}} type="checkbox" required />
                        <p>Agree to the terms of use & privacy policy.</p>
                    </div>
                )}

                {/* Form submit button */}
                <button type="submit">
                    {currState === "Kayıt Ol" ? "Kayıt Ol" : currState === "Giriş Yap" ? "Giriş Yap" : "Şifre Sıfırla"}
                </button>

                

                {/* Switch between forms */}
                <div className='login-forgot'>
                    {currState === "Giriş Yap" && (
                        <>
                            <p className="login-toggle">
                                Forgot Password? <span onClick={() => setCurrState("Şifre Sıfırla")}>click here</span>
                            </p>
                            <p className="login-toggle">
                                Create an account? <span onClick={() => setCurrState("Kayıt Ol")}>click here</span>
                            </p>
                        </>
                    )}
                    
                    {currState === "Kayıt Ol" && (
                        <p className="login-toggle">
                            Already registered? <span onClick={() => setCurrState("Giriş Yap")}>click here</span>
                        </p>
                    )}
                    
                    {currState === "Şifre Sıfırla" && (
                        <p className="login-toggle">
                            Remembered your password? <span onClick={() => setCurrState("Giriş Yap")}>click here</span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;

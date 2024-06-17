import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login-container'>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="form" action="#">
            <h1 className="title">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            </div>
            <span className="description">or use your email for registration</span>
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-signup">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form" action="#">
            <h1 className="title">Sign in</h1>
            <div className="social-container">
              <div className="social-item cursor-pointer">
                <img className="social-img" src='https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png' alt="Google" />
              </div>
            </div>
            <span className="description">or use your account</span>
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
            <a href="#" className="forgot-password">Forgot your password?</a>
            <button className="btn btn-signin">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="title">Welcome Back!</h1>
              <p className="description">To keep connected with us please login with your personal info</p>
              <button className="btn ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="title">Hello, Friend!</h1>
              <p className="description">Enter your personal details and start journey with us</p>
              <Link to={'/signup'}><button className="btn ghost" id="signUp">Sign Up</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

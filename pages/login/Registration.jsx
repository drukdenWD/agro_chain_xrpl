import React, { useState } from 'react';
import {  toast } from 'react-toastify';
import { isValidAddress } from 'xrpl';
// this is the registration page, if a user doesnt have an account he/she can register to login
export default function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [wallet, setwallet] = useState('');
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Check if the passwords match
    setPasswordMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    // Check if the passwords match
    setPasswordMatch(password === newConfirmPassword);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if(!isValidAddress (wallet)) {
      toast.error("XRPL wallet is not valid");
      return;
    }
    if (password === confirmPassword) {
      // Passwords match, you can proceed with registration
      // Send a POST request to your backend with the registration data
      // (username, email, password, etc.)
      const registrationData = { username, email, wallet, password };
  
      fetch('/api/registering', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      })
        .then((response) => {
          if (response.status === 200) {
            // Registration successful
            toast.success('🦄 Successfully Registered');
          } else {
            // Registration failed
            toast.error('🦄 Registration failed. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error('🦄 An error occurred while registering. Please try again.');
        });
    } else {
      // Passwords do not match
      // You can display an error message to the user or handle it as needed
      toast.error('🦄 Passwords do not match');
      // Optionally, you can also set a border color for the password and confirm password inputs
      // to indicate the mismatch by updating your state (passwordMatch).
      setPasswordMatch(false);
    }
  };
  

  return (
    <section className="login_section">
      <div className="container align-items-center justify-content-center">
        <div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="card card-default mb-0">
                <div className="card-body px-5 pb-5 pt-0">
                  <h4 className="text-center">Registration</h4>
                  <form method="POST" onSubmit={handleRegistrationSubmit}>
                    <div className="row my-3">
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          name="name"
                          required
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Wallet Address"
                          value={wallet}
                          onChange={(e) => setwallet(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={handlePasswordChange}
                          style={{ border: passwordMatch ? '1px solid #ccc' : '1px solid red' }}
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          id="confirmPassword"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                          style={{ border: passwordMatch ? '1px solid #ccc' : '1px solid red' }}
                        />
                      </div>
                      <div className="col-md-12 mt-2">
                        <button type="submit" className="btn btn-main">
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                  <hr className="hr-class" />
                  <h6 className="text-center">OR</h6>
                  <hr className="hr-class" />
                  <button className="btn btn-google btn-block mb-4 form-control mt-2" type="submit">
                    <i className="fa-brands fa-google" /> Continue With Google
                  </button>
                  <div className="row my-3">
                    <div className="col-md-12">
                      <p>
                        Already have an account?
                        <a className="text-info" href="Login">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

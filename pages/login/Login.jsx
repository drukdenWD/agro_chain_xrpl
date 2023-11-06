import React from 'react'
import { useState } from 'react';
import {  toast } from 'react-toastify';
import { useRouter } from 'next/router';

//this is the login section where a farmer/user can log into our website
export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch('/api/logging', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      console.log(response);
      if (response.status === 200) {
        // Login successful

        toast.success('🦄 Login Successful');
        // Redirect the user to another page (e.g., using React Router)
        // Replace '/dashboard' with the URL of the page you want to redirect to.
        router.push('/business-holiday/landing');
      } else {
        // Login failed
        toast.error('🦄 Login Failed. Please check your email and password.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('🦄 An error occurred while logging in. Please try again.');
    }
  };

  return (
    <>
         <section className="login_section">
        <div className="container align-items-center justify-content-center">
          <div >
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="card card-default mb-0">
                
                  <div className="card-body px-5 pb-5 pt-0">
                    <h4 className="text-center">Login</h4>
                   
                    <div className="row">
                      <div className="col-md-12 text-center">
                        
                        <button className="btn btn-google btn-block mb-4 form-control" type="submit"><i className="fa-brands fa-google" /> Continue With Google</button>
                      </div>
                    </div>
                   <hr className="hr-class"  />
                    <h6 className="text-center">OR</h6>
                   <hr className="hr-class"  />
                    <form method="POST">
                      <div className="row my-3">
                        <div className="form-group col-md-12 mb-4">
                          <input type="text" className="form-control " id="login" placeholder="Email" name="login" required   value ={email}onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-12 ">
                          <input type="password" name="password" className="form-control" id="password" placeholder="Password"  value ={password}onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <div className="col-md-12">
                          <div className="d-flex justify-content-between mb-3">
                           
                            <a className="text-color underline text-sm pt-2" href="#"> Forgot your password?</a>
                          </div>
                          <button type="submit" className="btn btn-main" href="index"
                          
                          onClick={handleLoginSubmit}>Log In</button>
                        </div>
                      </div>
                    </form>
                    <div className="row my-3">
                      <div className="col-md-12">
                        <p>Don't have an account yet ?
                          <a className="text-info" href="Registration">Registration</a>
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
    </>
  )
}

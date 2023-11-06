//this is the secret key form page where a user will need to provide the secret key that you get while signing up into our website.
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const xrpl = require("xrpl");
const SecretKeyForm = ({onKeySubmit}) => {
  const [secretKey, setSecretKey] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userwallet, setuserwallet] = useState("");
  async function handlegetToken(){
    try {
      const token = await axios.get("/api/getcookie");
      setuserwallet(token.data.decoded.wallet);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    handlegetToken()
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(secretKey);
    try {
      let wallet = xrpl.Wallet.fromSeed(secretKey);
      let address = wallet.classicAddress;
      
      if(address === userwallet){
        toast.success("You have successfully given the key")
        onKeySubmit(); // Call the callback function from the prop

      } else{
        toast.error("The secret key does not match with the wallet you provided during signup");
      }
      
  } catch (err) {
    console.log(err);
      toast.error("Invalid Seed Value")
      return;
  }

  };

  return (
    <div>
      <h2 style={{   textAlign: 'center',
  marginBottom: '20px',
  color: 'green', /* Change the color to 'lightgreen' or any other color you prefer */
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', /* Add a 3D shadow effect */
  background: 'linear-gradient(45deg, #FF5722, #FFC107)', /* Use a gradient background with your preferred colors */
  WebkitBackgroundClip: 'text', /* Clip the background to the text */
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',}}>
        Enter Your Secret Key To Submit Crop Details
      </h2>
      <p style={{paddingLeft: '570px'}}>[Hint: Secret Key of XRPL that was issued]</p>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <input
          type="text"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          placeholder="Enter your secret key"
          style={{
            padding: '10px',
            margin: '10px',
            width: '300px',
          }}
        />
        <input
          type="number"
          placeholder="XRP amount"
          style={{
            padding: '10px',
            margin: '10px',
            width: '300px',
          }}
        />
        <button
          type="submit"
          style={{
            background: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
      {isSubmitted === false && (
        <p style={{ textAlign: 'center', color: 'red' }}>
          Incorrect secret key. Please try again.
        </p>
      )}
    </div>
  );
};

export default SecretKeyForm;

//this is the crop details submission page. this is where a farmer can up load their crop details
'use client';
import React, { useState, useEffect } from 'react';
import Banner from '../../components/banner/Banner';
import {  toast } from 'react-toastify';
import SecretKeyForm from './SecretForm';

export default function Info() {
  const [cropname, setCropname] = useState("");
  const [cropid, setCropid] = useState("");
  const [cid, setCid] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [address, setAddress] = useState("");
  const [isKeySubmitted, setIsKeySubmitted] = useState(false);
  const handleKeySubmit = () => {
    // You can perform key validation here, and if it's correct, set isKeySubmitted to true
    // For simplicity, I'm directly setting isKeySubmitted to true here
    console.log("key is submitted successfully")
    setIsKeySubmitted(true);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission

    if (!cropname || !cropid || !cid || !pnumber || !address) {
      toast.warning('🦄 Please fill out the required fields!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    try {
      const res = await fetch('http://localhost:3000/api/users', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ cropname, cropid, cid, pnumber, address }),
      });

      if (res.ok) {
        toast.success('🦄 Successfully added', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // Additional logic for a successful submission
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // This code will only run on the client side
      console.log("hello");
    }
  }, []);

  return (
    <>
      <Banner
        title="Register Crops"
        description="This is the section where you can upload your crop details with a picture if you have it."
      />

      {!isKeySubmitted ? ( // Render SecretKeyForm if the key is not submitted
        <SecretKeyForm onKeySubmit={handleKeySubmit} />
      ) : (
        <section className="info_section">
          <div className="container">
            <div className="row my-2">
              <h3 className="text-center">
                Please, Fill Up This Form to ensure you are convinced with our website.
              </h3>
            </div>
          </div>
          <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="info-content info-card">
              <h4 className="text-center">
                Crop Information of Farmer
              </h4>
              <div className="heading_bottom" />
              <div className="row input-element">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label  className="label-class lavel-down">Crop Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control input-normal" onChange={(e)=> setCropname(e.target.value)}
                      value ={cropname} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label  className="label-class lavel-down">Crop ID <span className="text-danger">*</span></label>
                      <input type="email" className="form-control input-normal"
                      onChange={(e)=> setCropid(e.target.value)}
                      value ={cropid} 
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label  className="lavel-down label-class">Date of Registration<span className="text-danger">*</span></label>
                      <input type="text" className="form-control input-normal"
                      
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label  className="lavel-down label-class">CID Number<span className="text-danger">*</span></label>
                      <input type="number" className="form-control input-normal"
                      onChange={(e)=> setCid(e.target.value)}
                      value ={cid} 
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label  className="lavel-down label-class">Phone Number</label>
                      <input type="text" className="form-control input-normal"
                      onChange={(e)=> setPnumber(e.target.value)}
                      value ={pnumber} 
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label  className="lavel-down label-class">Date of Harvest<span className="text-danger">*</span></label>
                      <input type="text" className="form-control input-normal"
                      onChange = {(e) => setAddress(e.target.value)}
                      value = {address} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label  className="lavel-down label-class">Permanent Address<span className="text-danger">*</span></label>
                      <input type="text" className="form-control input-normal" />
                      
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label  className="lavel-down label-class">Mailling Address<span className="text-danger">*</span></label>
                      <input type="text" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="checkbox"  />
                      <label >Click to confirm you are not robot</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-content info-card">
              <h5 className="text-center">
                Upload Documents
              </h5>
              <div className="heading_bottom" />
              <div className=" input-element">
                <div className="row">
                  <div className="col-md-12">
                    <div >
                      <label  className="form-label"> CID<span className="text-danger">*</span></label><br />
                      <input type="file" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div >
                      <label  className="form-label">Crops<span className="text-danger">*</span></label><br />
                      <input type="file" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="checkbox"  />
                      <label >Accept All The <a href="#">Terms &amp; Conditions</a> Of Agro-Chain</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-danger btn-block">Back</button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-main btn-block text-white" type="submit" onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
              </div>
              <div className="row">
              </div>
            </div>
            </form>
          </div>
        </section>
      )}
    </>
  )
}

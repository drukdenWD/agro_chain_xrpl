//this is the page where the crop details will be uploaded. although my web doesnt have purchase feature. it will be for customoers to view the crop details.

'use client';
import React, { useEffect, useState } from 'react';
import Banner from '../components/banner/Banner';

export default function InfoList() {
  const [informations, setInformations] = useState([]); // Initialize as an empty array

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3000/api/users', {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setInformations(data.informations);
      } catch (error) {
        console.error('Error loading data: ', error);
      }
    }

    fetchData();
  }, []); // The dependency array should be an empty array to run the effect only once.

  const listItemStyle = {
    border: '1px solid #ddd',
    margin: '10px',
    padding: '10px',
    display: 'flex !important',
    flexDirection: 'column',
  };

  const headingStyle = {
    fontSize: '18px',
  };

  const detailStyle = {
    margin: '5px 0',
  };

  return (
    <>
      <Banner
        title="Crop Details"
        description="This is the page where crop details are being shown"
      />

      {informations.length > 0 ? (
        informations.map((info) => (
          <div key={info._id} style={listItemStyle}>
            <h2 style={headingStyle}>Crop Name: {info.cropname}</h2>
            <div style={detailStyle}>Crop ID: {info.cropid}</div>
            <div style={detailStyle}>CID: {info.cid}</div>
            <div style={detailStyle}>Phone Number: {info.pnumber}</div>
            <div style={detailStyle}>Address: {info.address}</div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}

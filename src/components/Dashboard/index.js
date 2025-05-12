import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'; // Importing the CSS for styling
import Header from '../components/Header'

import ApplicationForm from '../components/ApplicationForm';

const Dashboard = () => {
 const [applications, setApplications] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/applications')
      .then((res) => setApplications(res.data))
      .catch((err) => console.error('Error fetching applications:', err));
  }, []);
  return (
    <div className='one'>
      <Header />
      <div className='user-det'>
        <div className='user-four'>
          <div className='user-iamge'>
              <svg width="52" height="38" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_37_259)">
              <path d="M28.2 17.5H27.1V10.625C27.1 10.2797 26.8539 10 26.55 10H25.6164C25.2905 10 24.9722 10.1094 24.7013 10.3148L23.6474 11.1133C23.5873 11.1588 23.5356 11.2173 23.4954 11.2854C23.4552 11.3536 23.4272 11.4301 23.4131 11.5105C23.3989 11.591 23.3988 11.6739 23.4128 11.7544C23.4268 11.8349 23.4547 11.9114 23.4948 11.9797L24.1053 13.0195C24.1453 13.0878 24.1967 13.1465 24.2567 13.1922C24.3167 13.2379 24.384 13.2697 24.4548 13.2858C24.5256 13.3019 24.5986 13.302 24.6694 13.2861C24.7402 13.2701 24.8076 13.2385 24.8677 13.193L24.9 13.1687V17.5H23.8C23.4961 17.5 23.25 17.7797 23.25 18.125V19.375C23.25 19.7203 23.4961 20 23.8 20H28.2C28.5039 20 28.75 19.7203 28.75 19.375V18.125C28.75 17.7797 28.5039 17.5 28.2 17.5ZM45.8 0H6.2C4.98519 0 4 1.11953 4 2.5V27.5C4 28.8805 4.98519 30 6.2 30H45.8C47.0148 30 48 28.8805 48 27.5V2.5C48 1.11953 47.0148 0 45.8 0ZM7.3 26.25V21.25C9.73031 21.25 11.7 23.4883 11.7 26.25H7.3ZM7.3 8.75V3.75H11.7C11.7 6.51172 9.73031 8.75 7.3 8.75ZM26 23.75C22.3549 23.75 19.4 19.832 19.4 15C19.4 10.1672 22.3549 6.25 26 6.25C29.6451 6.25 32.6 10.1672 32.6 15C32.6 19.8336 29.6438 23.75 26 23.75ZM44.7 26.25H40.3C40.3 23.4883 42.2697 21.25 44.7 21.25V26.25ZM44.7 8.75C42.2697 8.75 40.3 6.51172 40.3 3.75H44.7V8.75Z" fill="white"/>
              </g>
              <defs>
              <filter id="filter0_d_37_259" x="0" y="0" width="52" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_259"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_259" result="shape"/>
              </filter>
              </defs>
              </svg>
          </div>
          <div className='user-dif'>
              <p className='def'>DEFICIT</p>
              <div className='user-diff-one'>
                <svg width="22" height="30" viewBox="0 0 22 30" className='p' fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_37_230)">
  <path d="M6.83301 20.25V7.9335C6.83295 7.67174 6.8973 7.41737 7.01594 7.21033C7.13459 7.0033 7.30081 6.85533 7.48851 6.78966C7.6762 6.724 7.87474 6.74436 8.05293 6.84754C8.23113 6.95073 8.37889 7.1309 8.47301 7.35975L13.5263 19.6403C13.6205 19.8691 13.7682 20.0493 13.9464 20.1525C14.1246 20.2556 14.3231 20.276 14.5108 20.2103C14.6985 20.1447 14.8648 19.9967 14.9834 19.7897C15.102 19.5826 15.1664 19.3283 15.1663 19.0665V6.75" stroke="#0A512F" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.1665 11.25H16.8332" stroke="#0A512F" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.1665 15.75H16.8332" stroke="#0A512F" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <filter id="filter0_d_37_230" x="-3" y="0" width="28" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_230"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_230" result="shape"/>
  </filter>
  </defs>
                </svg>
                <p className='amount'>0.0</p>
              </div>
          </div>
        </div>         
        <div className='applyform'>
            <button className='btn' onClick={() => setShowForm(true)}>Get Apply</button>
        </div>
      </div>
    <div className="dashboard">
      <h2>Applied Loans</h2>
      
      <div className='cols'>
        <h1 className='loanofficer'>Loans Offer</h1>
        <h1 className='ammount2'>ammount</h1>
        <h1 className='dateapplied'>Data Applied</h1>
        <h1 className='status'>status</h1>
      </div>
      
     
        <div>
        
        {applications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <ul>
            {applications.map((app) => (
              <li key={app._id} style={{ marginBottom: '10px' }}>
                    <div className='cols'>
                      <h1 className='loanofficer'>{app.fullName}</h1>
                      <h1 className='ammount2'>{app.loanAmount}</h1>
                      <h1 className='dateapplied'>{app.createdAt}</h1>
                      <h1 className='status'>status</h1>
                    </div>
              </li>
            ))}
          </ul>
        )}
      </div>





      {showForm && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    }}
  >
    <div
      style={{
        background: '#fff',
        width: '80%',
        maxWidth: '900px',
        height: '80%',
        borderRadius: '10px',
        padding: '30px',
        position: 'relative',
        overflowY: 'auto',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      <button
  onClick={() => setShowForm(false)}
  style={{
    position: 'absolute',
    top: '20px',
    right: '50px',
    fontSize: '24px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#333',
    width:'60px',
  }}
>
  ❌
</button>
      
      <ApplicationForm />
    </div>
  </div>
)}

    </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';

const DelCart = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
    <linearGradient id="nyvBozV7VK1PdF3LtMmOna_pre7LivdxKxJ_gr1" x1="18.405" x2="33.814" y1="10.91" y2="43.484" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32bdef"></stop><stop offset="1" stop-color="#1ea2e4"></stop></linearGradient><path fill="url(#nyvBozV7VK1PdF3LtMmOna_pre7LivdxKxJ_gr1)" d="M39,10l-2.835,31.181C36.072,42.211,35.208,43,34.174,43H13.826	c-1.034,0-1.898-0.789-1.992-1.819L9,10H39z"></path><path fill="#0176d0" d="M32,7c0-1.105-0.895-2-2-2H18c-1.105,0-2,0.895-2,2c0,0,0,0.634,0,1h16C32,7.634,32,7,32,7z"></path><path fill="#007ad9" d="M7,9.886L7,9.886C7,9.363,7.358,8.912,7.868,8.8C10.173,8.293,16.763,7,24,7s13.827,1.293,16.132,1.8	C40.642,8.912,41,9.363,41,9.886v0C41,10.501,40.501,11,39.886,11H8.114C7.499,11,7,10.501,7,9.886z"></path>
    </svg>
  )
}

export const DeleteCartIcon: React.FC = () => {

  return (
    <div style={{display: "flex", alignItems: "center"}}>
    <DelCart/>
    </div>
  )
};

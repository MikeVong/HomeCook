import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lottie/6519-cooking.json';

export default function LottieCook() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    );
  }
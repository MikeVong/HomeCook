import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lottie/25523-wok-pan-food-fry-on-fire.json';

export default function LottiePan() {
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
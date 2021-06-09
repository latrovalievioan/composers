import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export const AppLoader = () => (
  <Loader
    type="TailSpin"
    color={getComputedStyle(document.documentElement).getPropertyValue(
      '--orange'
    )}
    height={100}
    width={100}
    timeout={3000}
  />
);

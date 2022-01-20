import React from 'react';

const ErrorDisplay = ({ err }) => {
  return <p data-testid="error-message" className="text-black font-bold text-base text-center">{err}</p>;
};

export default ErrorDisplay;

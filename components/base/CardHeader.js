import React from 'react';
import Image from 'next/image'

const CardHeader = ({ url }) => {
  return <div className="pb-6 flex items-center justify-center">
      <div  ><Image src={url} width={200} height={50} alt="Header Image"/></div>
  </div>;
};

export default CardHeader;

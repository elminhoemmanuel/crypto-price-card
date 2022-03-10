import React, { useEffect } from 'react';
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa"
import { AiOutlineColumnHeight } from "react-icons/ai"
import { RiHandCoinFill } from "react-icons/ri"


const Card = ({ data }) => {

    const scaleFactor = 24

    const formatDeposit = (deposit)=>{
        let num = deposit / ( 10**scaleFactor );
        return `${String(num)} NEAR`
    }

    

    return <div className="w-full border border-gray-300 shadow-lg rounded-md p-6 bg-white">
        <div className="flex items-center justify-center flex-col border-b border-gray-400 py-4">
            <div className="flex items-center justify-center flex-col mb-4">
                <div className="bg-figyelllow rounded py-2 px-3 flex items-center justify-center"><FaPlaneDeparture className="h-5 w-5text-black" /></div>
                <p className="font-bold">Sender</p>
            </div>
            <p data-testid="sender" className="no-overflow text-center">
                &nbsp;{data.sender}
            </p>
        </div>

        <div className="flex items-center justify-center flex-col border-b border-gray-400 py-4">
            <div className="flex items-center justify-center flex-col mb-4">
                <div className="bg-figyelllow rounded py-2 px-3 flex items-center justify-center"><FaPlaneArrival className="h-5 w-5text-black" /></div>
                <p className="font-bold">Receiver</p>
            </div>
            <p data-testid="receiver" className="no-overflow text-center">
                &nbsp;{data.receiver}
            </p>
        </div>

        <div className="flex items-center justify-center flex-col border-b border-gray-400 py-4">
            <div className="flex items-center justify-center flex-col mb-4">
                <div className="bg-figyelllow rounded py-2 px-3 flex items-center justify-center"><AiOutlineColumnHeight className="h-5 w-5text-black" /></div>
                <p className="font-bold">Height</p>
            </div>
            <p data-testid="height" className="no-overflow text-center">
                &nbsp;{data.height}
            </p>
        </div>

        <div className="flex items-center justify-center flex-col py-4">
            <div className="flex items-center justify-center flex-col mb-4">
                <div className="bg-figyelllow rounded py-2 px-3 flex items-center justify-center"><RiHandCoinFill className="h-5 w-5text-black" /></div>
                <p className="font-bold">Deposit</p>
            </div>
            <p data-testid="deposit" className="no-overflow text-center">
                &nbsp;{formatDeposit(data.actions[0].data.deposit)}
            </p>
        </div>
    </div>;
};

export default Card;

import React, { useEffect, useState } from 'react';
import Card from '../base/Card';
import CardHeader from '../base/CardHeader';
import PriBtn from '../base/PriBtn';
import PriBtnOutlined from '../base/PriBtnOutlined';


const CardDisplay = ({ data }) => {

    const [currentItem, setCurrentItem] = useState(0);

    const next = () => setCurrentItem(prev => prev + 1);
    const prev = () => setCurrentItem(prev => prev - 1);

    // useEffect(() => {

    //     console.log(data);

    //     return () => {
    //     }
    // }, [])

    return <div className="w-full md:w-3/4 lg:w-3/5 mx-auto">

        <CardHeader url="https://global-uploads.webflow.com/6114c8bdb7b77370f7d9c0ab/6129012dc3500f4fd2ebb3c5_near-logo-lg-1.svg" />

        <Card data={data[currentItem]} />

        <div className={`my-5 flex flex-col md:flex-row md:items-center ${currentItem > 0
        ? "md:justify-between":"md:justify-end"}`}>
            {currentItem > 0 &&

                <PriBtnOutlined
                    text="Previous"
                    addStyle="w-full md:w-auto"
                    clicked={()=>{prev()}}
                />
            }

            {currentItem !== (data.length - 1) &&

                <PriBtn
                    text="Next"
                    addStyle="w-full md:w-auto"
                    clicked={()=>{next()}}
                />
            }

        </div>

    </div>;
};

export default CardDisplay;

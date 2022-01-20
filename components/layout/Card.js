import React, {useEffect} from 'react';


const Card = ({ data }) => {

    useEffect(() => {
        
        console.log(data);

        return () => {
        }
    }, [])

    return <div>
        {data[0].id}
    </div>;
};

export default Card;

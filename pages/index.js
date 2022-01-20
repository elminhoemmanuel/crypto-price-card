import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Loader from '../components/base/Loader';
import Card from '../components/layout/Card';


export default function Home() {

    let url = "http://figment-mock-data.figment.network/near/transactions"
    let pollInterval = 20 //poll interval duration in seconds


    const [usedData, setUsedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getData();
        // console.log(validateData(usedData));
        // interval to poll enpoint every 20 seconds
        const interval = setInterval(() => {
            setLoading(true)
            getData();
        }, (pollInterval * 1000))

        return () => {
            clearInterval(interval);
        }
    }, [loading])

    // function to add new transactions to previous ones
    const handleNewData = (incoming, old) => {
        if (old[0] !== undefined) {
            if (incoming[0].id === old[0].id) {
                console.log("same");
                setUsedData(old);
            } else if (incoming[0].id !== old[0].id) {
                console.log("different");
                setUsedData([...incoming, ...old]);
            }
        } else {
            console.log("fetching for first time")
            setUsedData(incoming);
        }

    }

    // function to validate data to ensure only items that are Transfer are used and to sort from newest to oldest
    const validateData = (arr) => {
        let reqdArr = arr.filter(item=>item.actions[0].type==="Transfer" && item.success);
        let datedArr = []
        for (let i = 0; i < reqdArr.length; i++) {
            datedArr.push({...reqdArr[i], date:new Date(reqdArr[i].created_at)})
        }
        const sortedArr = datedArr.sort((a, b) => b.date - a.date)
        return sortedArr
    }

    // function to fetch data from endpoint
    const getData = () => {
        setError("")
        fetch(`${url}`)
            .then(response => response.json())
            .then((data) => {
                // console.log(data)
                handleNewData(data, usedData);
                setLoading(false);
            })
            .catch(error => {
                // console.log(error)
                setError("Something went wrong, could not fetch data. Please check your internet and refresh the page")
                setLoading(false);
                console.log(error);
            });
    }

    return (
        <>
            <Head>
                <title>Crypto Pricer</title>
                <meta name="keywords" content="Crypto Pricer" />
            </Head>

            <div className="px-4 md:px-10 py-10">
                {
                    loading ? <Loader /> : 
                    <div>
                        {
                            error && <p className="text-red-500 text-base text-center">{error}</p> 
                        }
                        {
                            usedData[0] && !error && <Card data={validateData(usedData)} /> 
                        }
                    </div>
                    
                }
            </div>
        </>
    )
}
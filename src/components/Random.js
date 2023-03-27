import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useGIF from '../hook/useGIF';
import Spinner from './Spinner';

const API_KEY = 'qIaqHqNpgxJVvpIPMba18GCcGN25fxGx';
// const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {

    const { gif, isLoading, fetchData } = useGIF();
    
    function clickHandler() {
        fetchData();
    }
    return (
        <div className='aspect-square sm:aspect-video flex flex-col justify-between items-center min-h-[40vh] border-green-400 bg-green-300 border-2 py-5 px-3 sm:px-10 rounded-lg '>
            <h2 className='text-xl sm:text-2xl font-semibold'> A Random GIF</h2>
            <div className=' w-full overflow-hidden p-2 flex justify-center items-center  '>
                {
                    isLoading ? (<Spinner />) : (<img src={gif} className='w-full h-full ' />)
                }
            </div>
            <button onClick={clickHandler} className='w-[50vw]  sm:w-[600px] bg-green-100 font-semibold rounded-3xl  '>Generate</button>
        </div>
    )
};


export default Random

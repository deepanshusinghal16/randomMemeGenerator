import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useGIF from '../hook/useGIF';
import Spinner from './Spinner';

const API_KEY = 'qIaqHqNpgxJVvpIPMba18GCcGN25fxGx';


const Tag = () => {

    const [searchText, setSearchText] = useState('car');

    const { gif, isLoading, fetchData } = useGIF(searchText);


    function clickHandler() {
        fetchData();
    }
    function changeHandler(event) {
        setSearchText(event.target.value);
    }

    return (
        <div className='aspect-square sm:aspect-video flex flex-col justify-between items-center min-h-[40vh] border-blue-400 bg-blue-300 border-2 py-5 px-3 sm:px-10 rounded-lg '>
            <h2 className='text-xl sm:text-2xl font-semibold'> Search {searchText}  GIF </h2>
            <div className=' w-full overflow-hidden p-2 flex justify-center items-center  '>
                {
                    isLoading ? (<Spinner />) : (<img src={gif} className='w-full h-full ' />)
                }
            </div>
            <div className='flex flex-col gap-1'>
                <input type="text" name="" id="" className='w-[50vw]  sm:w-[600px] rounded-2xl bg-blue-50  px-3 '
                    onChange={changeHandler} value={searchText}  />
                <button onClick={clickHandler} className='w-[50vw]  sm:w-[600px] bg-blue-100 font-semibold rounded-3xl  '>Generate</button>
            </div>
        </div>
    )
}

export default Tag

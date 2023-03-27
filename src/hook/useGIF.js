import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_KEY = 'qIaqHqNpgxJVvpIPMba18GCcGN25fxGx';


const useGIF = (tag) => {
    // const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const [gif, setGif] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData() {
        setIsLoading(true);
        const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
        
        tag = tag.toUpperCase();

        setIsLoading(false);

        const newgif = output.data.data.images.downsized_medium.url;
        setGif(newgif);
    }


    useEffect(() => {
        fetchData();
    }, []);

    return { gif, isLoading, fetchData };
}

export default useGIF

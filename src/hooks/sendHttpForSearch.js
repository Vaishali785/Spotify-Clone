import { useEffect, useState } from 'react'
import { getSearchResult } from '../utilities/data/SpotifyApiCalls';
import { useSelector } from 'react-redux';

const useSendHttpForSearch = (query) => {
    const token = useSelector(state => state.auth.access_token);
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getResult = async () => {
            try {
                const fetchCall = await fetch(getSearchResult(query, 5), {
                    method: "GET",
                    // body: props.body ? props.body : null,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!fetchCall.ok) {
                    throw new Error(`HTTP error! Status: ${fetchCall.status}`)
                }
                setIsLoading(false);
                const response = await fetchCall.json();
                // console.log(response);
                setResponse(response);
                // setTimeout(() => {
                // }, 2000)

            } catch (err) {
                setError(err);
            }
        }
        // , 1000)
        getResult();


        return () => {
            clearTimeout(getResult);
        }
    }, [token, query])
    return { isLoading, error, response }
}

export default useSendHttpForSearch
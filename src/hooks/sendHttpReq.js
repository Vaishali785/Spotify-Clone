import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useSendHttpRequest = () => {
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const token = useSelector(state => state.auth.access_token);
    /**
     * 1.) created custom hook and set response here becoz otherwise it returns unresolved promise and not the response
     * 2.) usecallback is used becoz we are calling this function as useEffect dependancy 
    */
    const fetchFunction = useCallback(async (props) => {
        try {
            const fetchCall = await fetch(props.url, {
                method: props.method,
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
    }, [token])
    return { isLoading, response, error, fetchFunction }
}

export default useSendHttpRequest
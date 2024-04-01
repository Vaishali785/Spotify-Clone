import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";

const useSendHttpRequest = () => {
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const token = useSelector(state => state.auth.access_token);
    const dispatch = useDispatch();
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
                // setIsLoading(false);
                if (fetchCall.status === 403) {
                    dispatch(authActions.setIsUnauthorized());
                }
                throw new Error(fetchCall.status)
            }
            setIsLoading(false);
            const response = await fetchCall.json();
            setResponse(response);


        } catch (err) {
            console.log(err);
        }
    }, [token, dispatch])
    return { isLoading, response, error, fetchFunction }
}

export default useSendHttpRequest
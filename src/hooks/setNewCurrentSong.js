import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { songActions } from '../store/currentSong';

const useSetNewCurrentSong = () => {
    const dispatch = useDispatch();
    const isPlaying = useSelector(state => state.song.isPlaying);
    const [error, setError] = useState();

    // console.log("isPlaying", isPlaying)
    // dispatch(songActions.setIsPlaying(false));
    const setSongFunction = useCallback(async (props) => {
        try {
            // console.log("inside setNewCurrentSong.js");
            // console.log(props);
            if (props.preview_url != null) {
                dispatch(songActions.setCurrentSong(props))
                const isPlayingValue = props ? true : false;
                // console.log("isPlaying", isPlaying)
                dispatch(songActions.setIsPlaying(isPlayingValue));
                let lastPlayed = JSON.parse(sessionStorage.getItem("lastPlayed"));
                lastPlayed = props;
                sessionStorage.setItem("lastPlayed", JSON.stringify(lastPlayed));

            } else {
                alert("Sorry, This song not available!")
            }
            // const isPlayingValue = props ? true : !isPlaying;
            // console.log(isPlaying);
        } catch (err) {
            setError(err);
        }
    }, [dispatch])
    return { error, setSongFunction }
}

export default useSetNewCurrentSong
import React from 'react';
import classes from './DancingTracks.module.css';

const DancingTracks = () => {
    return (
        <div>
            <div className={`${classes["dancing-tracks-wrap"]}`}>
                <span style={{ "--min-height": "20%", "--max-height": "80%", animationDelay: "0s" }} className={`${classes["dancing-tracks"]}`}></span>
                <span style={{ "--min-height": "30%", "--max-height": "45%", animationDelay: "1s" }} className={`${classes["dancing-tracks"]}`}></span>
                <span style={{ "--min-height": "15%", "--max-height": "90%", animationDelay: "2s" }} className={`${classes["dancing-tracks"]}`}></span>
                <span style={{ "--min-height": "25%", "--max-height": "80%", animationDelay: "0s" }} className={`${classes["dancing-tracks"]}`}></span>
                <span style={{ "--min-height": "35%", "--max-height": "50%", animationDelay: "1s" }} className={`${classes["dancing-tracks"]}`}></span>
            </div>
        </div>
    )
}

export default DancingTracks
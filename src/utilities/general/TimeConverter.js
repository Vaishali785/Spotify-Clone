function convertMsToMinsSecs(ms) {
    const original_ms = ms;
    const secs = original_ms / 1000; //convert ms to secs
    const mins = secs / 60; //convert secs to mins(float value)
    let final_mins = Math.trunc(mins); // returns integer part for minutes
    let decimal_secs = Number((mins - final_mins)); //returns decimal part with decimal for secs

    if (decimal_secs > 0.60) { // if secs are more than 60 than add mins and decrease secs
        decimal_secs = decimal_secs - 0.60;
        final_mins += 1;
    }
    decimal_secs = decimal_secs.toFixed(2); //return 2 digit after decimal
    const final_secs = decimal_secs.toString().split(".")[1]; //remove decimal and get only after-decimal value
    return final_mins + ":" + final_secs;
}

export default convertMsToMinsSecs
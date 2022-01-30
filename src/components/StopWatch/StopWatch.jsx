import { useEffect, useState } from "react";
import './StopWatch.scss';


const StopWatch = () => {

    const [ time, setTime ] = useState(0);
    const [ timerOn, setTimerOn ] = useState(false);


    useEffect(() => {

        let interval = null;

        if (timerOn){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10 );
            }, 10)
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval); 
    },  [timerOn]);



    return (
        <div className="stopwatch">

            <div className="stopwatch__span">  
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>

            <div className="stopwatch__button" >
                {!timerOn && time === 0 && (                   
                    <button className="stopwatch__button-item" onClick={() => setTimerOn(true)}>Start</button>                   
                )}
                {timerOn && <button className="stopwatch__button-item-stop" onClick={() => setTimerOn(false)}>Stop</button>}
                {!timerOn && time > 0 && (
                    <button className="stopwatch__button-item " onClick={() => setTimerOn(true)}>Resume</button>
                )}
                {!timerOn && time > 0 && ( 
                    <button className="stopwatch__button-item" onClick={() => setTime(0)} >Reset</button>
                )}  
            </div> 
        </div>
    )
} 


export default StopWatch;
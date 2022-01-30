import React, {useEffect, useState} from 'react';
import './CountDown.scss';

const CountDown = ()  => {

    const [ time , setTime] = useState ('');

    useEffect(() => {
       
            let countDownDate = new Date("March 11 2022 00:00:00").getTime()
            
            let x = setInterval( () => {
                let now = new Date().getTime();
                let distance = countDownDate - now;
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24  )) / ( 1000 * 60 * 60 ));
                let minutes = Math.floor((distance % ( 1000 * 60 *60 )) /  ( 1000 * 60));
                let seconds = Math.floor((distance % ( 1000 * 60)) / 1000);

                setTime(days + "d " + hours + 'h ' + minutes + 'm ' + seconds + 's '  ); 

                if ( distance < 0) {
                    clearInterval(x);
                    setTime('Get Out of There Its Gonna Blow');
                }
            }, 1000);
    }, []);
    
    return (
        <div className="countdown">
            <div className="countdown__time">
                <p>{time}</p> 
            </div>
            <div className="countdown__num">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>*</p>
                <p>0</p>
                <p>#</p>
            </div>                        
        </div>
    )
}

export default CountDown;
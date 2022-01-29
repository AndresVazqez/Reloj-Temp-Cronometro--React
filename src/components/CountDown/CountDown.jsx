import React, {useEffect, useState} from 'react';

const CountDown = ()  => {

    const [ time , setTime] = useState ('');

    useEffect(() => {
       
            let countDownDate = new Date("March 11 2022 00:00:00").getTime()
            
            let x = setInterval( () => {
                let now = new Date().getTime();
                let distance = countDownDate - now;
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24  )) / ( 1000 * 60 ));
                let minutes = Math.floor((distance % ( 1000 * 60 )) /  ( 1000 * 60));
                let seconds = Math.floor((distance % ( 1000 * 60)) / 1000);

                setTime(days + "d" + hours + 'h' + minutes + 'm' + seconds ); 

                if ( distance < 0) {
                    clearInterval(x);
                    setTime('THE MOMENT HAS ARRIVED');
                }
            }, 1000);
    }, []);
    
    return (
        <div className="countdown">           
            {time}
        </div>
    )


}

export default CountDown;
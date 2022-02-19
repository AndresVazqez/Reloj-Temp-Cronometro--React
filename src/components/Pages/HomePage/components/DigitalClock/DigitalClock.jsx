import React, { useEffect, useState } from 'react';
import './DigitalClock.scss';

export default function DigitalClock () {

    const [clockState, setClockState] = useState();
    const date = new Date()      
    let week = ['Domingo','Lunes','Martes', 'Miercoles', 'jueves', 'Viernes', 'Sábado'];
    let month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
     'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let dayWeek = date.getDay();
    let day = date.getDate();
    let getMonth = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes; 
    }    
        
    
    useEffect( () => {
        setInterval( () => {
            let date = new Date();
            let seconds = date.getSeconds();
            if (seconds < 10) {
                seconds = '0' + seconds
            }            
            setClockState(seconds)           
        }, 1000);        
    }, []);

    
    return (
        <div className="digitalclock">
            <h4 className="digitalclock__title">RGB CLOCK</h4>
            <div className="digitalclock__clock">
            <span>{hours}</span>:<span>{minutes}</span><span className="digitalclock__clock-sec">{clockState}</span>
            </div>
            <div className="digitalclock__info">
                <div className="digitalclock__info-day" >
                    <h3>Día</h3>
                    <p>{week[dayWeek]}</p>
                </div>
                <div className="digitalclock__info-date">
                    <h3>Fecha</h3>
                    <p>{month[getMonth]} {day}</p>
                </div>
                <div className="digitalclock__info-year">
                    <h3>Año</h3>
                    <p>{year}</p>                   
                </div>
            </div>  
        </div>
    );
};
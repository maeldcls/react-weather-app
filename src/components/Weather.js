import React, { useState, useEffect } from 'react';

import '../css/Weather.css'
import svg from '../icons/sun.svg';
import Days from './Days.js';
import dateFormat from "dateformat";


export default function Weather(props, { handleClickDay }) {


    const joursDeLaSemaine = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];
    const date = new Date();
    let days = [joursDeLaSemaine[date.getDay()], joursDeLaSemaine[date.getDay() + 1], joursDeLaSemaine[date.getDay() + 2]];


    function handleSubmit(event) {
        const locationInput = event.currentTarget.elements.locationInput.value;
        props.onSubmit(locationInput);
    }

    function handleClickDay(event) {

        document.querySelector(".clickedDay").classList.remove('clickedDay');
        event.target.classList.add('clickedDay');

        props.onDayClick(event.target.id);
    }

    return (
        <div className="row">
            <div className="col s12 m6 push-m3">
                <div className="weather card blue-grey darken-1">
                    <div className="card-content white-text">
                        <form onSubmit={handleSubmit}>
                            <label>Entre le nom de la ville</label>
                            <input type="text" id="locationInput" />
                            <input type="submit" />
                        </form>
                        <span className="card-title">{props.location}</span>
                        <p><img className="icon" src={props.icon} /></p>
                        <span className="temperature">{props.temperature}°</span>
                        <div className="wind">Vent {props.wind}km/h</div>
                    </div>
                    <div className="card-action">
                        <Days class="clickedDay" value={days[0]} id="0" isSelected="true" onDayClick={handleClickDay} />
                        <Days value={days[1]} id="1" onDayClick={handleClickDay} />
                        <Days value={days[2]} id="2" onDayClick={handleClickDay} />
                    </div>
                </div>
            </div>
        </div>
    )
}




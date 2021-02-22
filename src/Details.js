import React from 'react';
import './App.css'

function Countries(props) {
    let [states, setstates] = React.useState([]);
    let divStyle = {
        height: 400
    };
    if (props.country) {
        fetch(`https://vishnusayanth.pythonanywhere.com/api/states/${props.country.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${props.TOKEN}`,
            },
        }).then(resp => resp.json()).then(resp => setstates(resp.states));
        return (
            <div className="details-content">
                <div>
                    <h2 className="display-4" align="center">{props.country.name}</h2>
                    <ul>
                        <li className="lead">
                            Continent : {props.country.continent_name}
                        </li>
                        <li className="lead">
                            Capital : {props.country.capital}
                        </li>
                        <li className="lead">
                            Official Language : {props.country.official_language}
                        </li>
                        <li className="lead">
                            Country code : {props.country.country_code}
                        </li>
                        <li className="lead">
                            ISO Code : {props.country.iso_code}
                        </li>
                    </ul>

                </div>
                <div className="overflow-scroll" style={divStyle}>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h3 align="center">
                                States
                            </h3>
                        </li>
                        {states.map(state => {
                            return (
                                <li className="list-group-item" key={state.id}>
                                    <h6>{state.name}</h6>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    return '';
}

export default Countries;

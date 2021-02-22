import React from 'react';

function Countries(props) {
    let [countries, setcountries] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://vishnusayanth.pythonanywhere.com/api/countries/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${props.TOKEN}`,
            },
        }).then(resp => resp.json()).then(resp => setcountries(resp.countries));
    })
    let divStyle = {
        height: 400
    };
    return (
        <div className="overflow-scroll" style={divStyle}>
            <input className="form-control" id="search" placeholder="Search"/>
            <ul className="list-group">
                {countries.map(country => {
                    return (
                        <li className="list-group-item cursor countries" key={country.id} onClick={props.selectFunction(country)}>
                            <h5>{country.name}</h5>
                        </li>
                    )
                })
                }
            </ul>
        </div>

    )
}

export default Countries;

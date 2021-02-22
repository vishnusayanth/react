import React from 'react';
import {useState} from 'react';
import './App.css';
import Countries from './Countries';
import Details from './Details';


function App() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const tokenString = 'bab78f8d260530d349ea22d7dc4809adf9bbcd06';
    //This token has very limited permissions on 'http://vishnusayanth.pythonanywhere.com';
    const selectCountry = country => evt => {
        setSelectedCountry(country);
    }

    return (
        <React.Fragment>
            <div className="content">
                <div className="overflow-auto" data-spy="scroll">
                    <h3 align="center" className="alert alert-success">Countries</h3>
                    <Countries TOKEN={tokenString} selectFunction={selectCountry}/>
                </div>
                <div>
                    <h3 align="center" className="alert alert-success">Details</h3>
                    <div id="details">
                        <Details TOKEN={tokenString} country={selectedCountry}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;

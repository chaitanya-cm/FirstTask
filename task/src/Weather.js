import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon1 from './img/sun.svg'; 
import icon2 from './img/moon.png';
import icon3 from './img/clouds-cloud.svg';
import icon4 from './img/rainy-sv.svg';
import React,{useState, useEffect} from 'react';
// import {getAllDetails} from '../'
import {getDetails } from './api/api';
import axios from 'axios';


function Weather  () {
  
  const [cityName, setcityName] = useState('');
  const [weather, setWeather] = useState({});

 
const search = async (evt) => {
    if(evt.key == "Enter"){
      try{
          const res = await getDetails(cityName);
          setWeather(res);
          console.log(res);
      }catch(error){
        console.log(error.message);
      }
    }
}


const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${date} ${month} ${year}`
  }

  const dateBuilder1 = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    // let date = d.getDate();
    // let month = months[d.getMonth()];
    // let year = d.getFullYear();
    return `${day}`
  }

  const timeBuilder = (t) => {
    var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    return `${time}`

  }


useEffect(() => {

  search();

}, []);

// console.log(process.env.REACT_APP_API_BASE_URL);
return (
    <>
    <div className="search-box">
      <h3>Enter City Name:</h3>
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setcityName(e.target.value)}
            value={cityName}
            onKeyPress={search}
          />
        </div>
        { (typeof weather.main != "undefined") ? (
          <div class='card-group'>
          <div className="card justify-content-center border-dark mb-3" style={{width:450}} >
              <div className='row justify-content-center'>
                <div className='col-3'><h1>{Math.round(weather.main.temp)}°c</h1></div>
                <div className='col-3'><h2>{weather.weather[0].main}</h2></div>
                <div className='col-3'><h2>{weather.name}</h2></div>
                </div>
      
            <img class="card-img-top" src={icon1}/>
              <div class="card-body text-dark">
                <h5 class="card-title text-center">{dateBuilder1(new Date())}</h5>
                  <h3 class="card-text">{dateBuilder(new Date())}</h3>
                  <h4 class="card-text text-center">{timeBuilder()}</h4>
              </div>
              <div class='row'>
                <div className='col-2'>
                <p className='text-center font-weight-bold'>Now</p>
                <img class="card-img-top" src={icon1} style={{height:80, width:80}} />
                <div className='text-center'>20°c</div>
                </div>
                
                <div className='col-3'>
                <p className='text-center font-weight-bold' style={{fontweight:900}}>10:00</p>
                <img class="card-img-top" src={icon2} style={{height:80, width:80}}/>
                <div className='text-center'>15°c</div>
                </div>
      
                <div className='col-3'>
                <p className='text-center font-weight-bold' style={{fontweight:900}}>12:00</p>
                <img class="card-img-top" src={icon3} style={{height:80, width:80}}/>
                <div className='text-center'>22°c</div>
                </div>
      
                <div className='col-3'>
                <p className='text-center font-weight-bold' style={{fontweight:900}}>02:00</p>
                <img class="card-img-top" src={icon4} style={{height:80, width:80}}/>
                <div className='text-center'>10°c</div>
                </div>
              </div>
            </div>
      
      
            <div className="card justify-content-center border-dark mb-3" id='card1' style={{width:450}} >
              <div className='row justify-content-center'>
                <div className='col-3'><h1>16°c</h1></div>
                <div className='col-3'><h2>Sunny</h2></div>
                <div className='col-3'><h2>London</h2></div>
                </div>
      
            <img class="card-img-top" src={icon4}/>
              <div class="card-body text-dark">
                <h5 class="card-title text-center">SUN</h5>
                  <h3 class="card-text">05 May 2022</h3>
                  <h4 class="card-text text-center">07:40</h4>
              </div>
              <div class='row'>
                <div className='col-2'>
                <p className='text-center font-weight-bold'>Now</p>
                <img class="card-img-top" src={icon1} style={{height:80, width:80}} />
                <div className='text-center'>16°c</div>
                </div>
                
                <div className='col-3'>
                <p className='text-center font-weight-bold' style={{fontweight:900}}>10:00</p>
                <img class="card-img-top" src={icon2} style={{height:80, width:80}}/>
                <div className='text-center'>19°c</div>
                </div>
      
                <div className='col-3'>
                <p className='text-center font-weight-bold' style={{fontweight:900}}>12:00</p>
                <img class="card-img-top" src={icon3} style={{height:80, width:80}}/>
                <div className='text-center'>15°c</div>
                </div>
      
                <div className='col-3'>
                <p className='text-center font-weight-bold' style={{fontweight:900}}>02:00</p>
                <img class="card-img-top" src={icon4} style={{height:80, width:80}}/>
                <div className='text-center'>20°c</div>
                </div>
      
              </div>
             
            </div>
      </div>
        ): (' ')}
    
    
      </>
  );
}

export default Weather;

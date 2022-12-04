import logo from "./logo.svg";
import "./App.css";
import options from "./Main";
import Weather from "./Components/Weather";
import React, { Component } from "react";
import "weather-icons/css/weather-icons.css";
import "./Components/form.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/Form";



class App extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      celsius: undefined,
      temp_min: undefined,
      temp_max: undefined,
      description: "",
      error: false,
    };
    

    this.icon = {
      Thunderstorm: "wi-thunderstorm"
    }
  }
  calCelsius(temp) {
    let cell = Math.floor(temp - 273)
    return cell;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_KEY = "4e450584e6f49baa7b3991a933d30038";

    if(city){
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: `${response.name},${response.sys.country}`,
      
      celsius: this.calCelsius(response.main.temp),
      temp_min: this.calCelsius(response.main.temp_min),
      temp_max: this.calCelsius(response.main.temp_max),
      description: response.weather[0].description,
      icon:  this.icon.Thunderstorm,
      error: false,
    });
  }
    else{
  this.setState({error : true});
}
}

  render() {
    return (
      <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error}/>
        <Weather
          city={this.state.city}
          country={this.state.country}
          icon={this.state.icon}
          temp_celsius={this.state.celsius}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          description={this.state.description}
        />
      </div>
    );
  }
}
export default App;

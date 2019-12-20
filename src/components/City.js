import React, { Component } from 'react';
import PropTypes from 'prop-types';

const titleCase = str => {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
};

export class City extends Component {
  render() {
    const { city } = this.props;
    const description = titleCase(city.weather[0].description);

    return (
      <div className='city'>
        <img src={city.weather[0].icon} alt='Weather icon' />
        <h5>
          {city.name} / {Math.round(city.main.temp)}°
        </h5>
        <p>{description}</p>
        <div className='conditions'>
          <p>Humidity: {city.main.humidity}% </p>
          <p>Wind Speed: {Math.round(city.wind.speed)} mph </p>
        </div>
      </div>
    );
  }
}

// PropTypes
City.propTypes = {
  city: PropTypes.object.isRequired
};

export default City;

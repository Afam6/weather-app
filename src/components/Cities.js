import React, { Component } from 'react';
import City from './City';
import PropTypes from 'prop-types';

class Cities extends Component {
  render() {
    return (
      <div className='cities'>
        {this.props.cities.map(city => (
          <City key={city.id} city={city} />
        ))}
        <div className='clear'></div>
      </div>
    );
  }
}

// PropTypes
Cities.propTypes = {
  cities: PropTypes.array.isRequired
};

export default Cities;

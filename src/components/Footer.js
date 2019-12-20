import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p>
          Copyright © {new Date().getFullYear()} All Rights Reserved | Design by
          Afam Ezechukwu
        </p>
      </div>
    );
  }
}

export default Footer;

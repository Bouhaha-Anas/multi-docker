import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OtherPage extends Component {
  render() {
    return (
      <div>
        Im some other page
        <Link to="/">Go back to home page!</Link>
      </div>
    );
  }
}

export default OtherPage;

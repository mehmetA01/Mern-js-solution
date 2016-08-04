import React, { Component } from 'react';
import { Link } from 'react-router';
import toastr from 'toastr';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Home Component...");

    toastr.info('Home Component...', 'Info');
    toastr.success('Home Component...', 'Success')
    toastr.warning('Home Component...', 'Warning');
    toastr.error('Home Component...', 'Error!')
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>Home Component</h3>
        </div>
      </div>
    );
  }
}
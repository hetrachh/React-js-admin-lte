import React, { Component } from 'react'
import Header from './Components/Header';
import Menu from './Components/Menu';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';

export default class Home extends Component {
    render() {
        return (
          <div>
            <Header />
            <Menu />
            <Dashboard />
            <Footer />
          </div>
        );
    }
}

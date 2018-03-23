import React, { Component } from 'react'
import NavigationBar from './component/NavigationBar'
import './styles.css';

export default class NavigationBarContainer extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
        
      }
    }
  
    render() {
      return (
        <div className="navbar-panel">
          <NavigationBar
          className=""
          />
        </div>
      )
    }
  }


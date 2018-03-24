import React, { Component } from 'react';
import './styles/App.css';
import NavigationBarContainer from './components/NavigationBar/NavigationBarContainer';
import PersonalInformationContainer from './components/PersonalInformation/PersonalInformationContainer';
import EducationContainer from './components/Education/EducationContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBarContainer>
        </NavigationBarContainer>
        <PersonalInformationContainer/>
        <EducationContainer/>
      </div>
    )
  }
}

export default App;

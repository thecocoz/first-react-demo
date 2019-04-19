import React, { Component } from 'react';
import logo from './logo.svg';
import personal_profile_image from './images/avatar.png';
import './App.css';
// import './assets/bootstrap.min.css';
// import './assets/bootstrap-grid.min.css';

class App extends Component {
  render() {
    return (


      <div className="App">
        <div className="left-section">

          <div className="profile">
            <img src={personal_profile_image} className="personal-profile-image" alt="Personal"></img>
          </div>

          <div className="left-title">Name</div>
          <div className="left-description"> Sorasak Tantipongpipat </div>

          <div className="left-title">E-Mail</div>
          <div className="left-description"> sorasak.tant@gmail.com </div>

          <div className="left-title">Address</div>
          <div className="left-description"> Sathorn, Bangkok Thailand </div>

        </div>

        <div className="right-section">

          <div className="title">Nickname</div>
          <div className="right-description">

            <ul>
              <li>Co</li>
            </ul>


          </div>

          <div className="title">Education</div>
          <div className="right-description">
            <b>Bachelor's Degree</b>

            <ul>
              <li>Bachelor of Science (Information Technology), School of Information Technology.
                                             King Mongkut’s University of Technology Thonburi</li>
            </ul>


          </div>

          <div className="title">Work Experience</div>
          <div className="right-description">
            <b>Software Developer, CareerVisa Digital</b><br></br>
            <ul>
              <li>Responsible on CareerVisa Website and Application</li>
            </ul>

          </div>

          <div className="title">Extra Activity</div>
          <div className="right-description">
            <b>Workshop Leader</b><br></br>

            <ul>
              <li>“Graph Paper Programming” for Secondary students, Microsoft YouthSpark</li>
              <li>“Scratch Programming” for Primary students, Code Their Dreams Project, CDG House</li>
            </ul>




          </div>




        </div>

      </div>
    );
  }
}

export default App;

//import used technologies
import React from 'react';
import logo from './Logo.png';
//import CSS
import './Welcome.css';
//create Welcome Compo
class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  //render LandPage Compo
  render() {
    return (
      <div className='Welcome'>
        <section id='title'>
          <div>
            <h4>Welcome To</h4>
            <img src={logo} alt='test' />
            <h1>Raha Website</h1>
          </div>
        </section>
        <section id='home-info' className='bg-muted'>
          <div className='info-img'></div>
          <div className='info-content'>
            <h2>
              <span className='text-dark'>About Us</span>
            </h2>
            <p>
              To meet the needs of Colombo's dynamic business community, Royal
              Arcade, Colombo, is pleased to offer the largest and extensive
              hotel conference and event facilities in the region, which can
              cater to up to 2,000 guests.
            </p>
            <button type='button' className='btn btn-primary'>
              <a className='button' href='/about'>
                <span className='text-white'> Read More </span>
              </a>
            </button>
          </div>
        </section>
      </div>
    );
  }
}
//export compo
export default Welcome;

//Check and vaildate

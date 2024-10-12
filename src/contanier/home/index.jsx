import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import Tilt from 'react-parallax-tilt';
import avatar from '../../image/avatar.png';

const Home = () => {
  return (
    <section id='home' className='home'>
      <div className='home_text-wrapper'>
        <h1>
          Hello, I'm Mohit Sharma
          <br/>
          Frontend Developer
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}>
          <div className='home_contact_me'>
            <Link to='/contact'>
              <button>Hire Me</button>
            </Link>
          </div>
        </Animate>
      </div>
      <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}>
      <Link to='/about'>
        <Tilt className='image'>
          <img className="Avatar" src={avatar} alt="hi" />
      
        </Tilt>
      </Link>
      </Animate>
    </section>
  );
}

export default Home;

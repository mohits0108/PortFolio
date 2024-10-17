import React from 'react';
import PageHeaderContent from '../../components/pageheadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import './style.scss';

const Contact = () => {
  return (
    <div>
      <section id='contact' className='contact'>
        <PageHeaderContent
          headerText="Contact Me"
          icon={<BsInfoCircleFill size={40} />}
        />
        <div className='contact_content'>
          <h3 className='contact_content_header-text'>Reach Out</h3>
          <ul className='contact_info_list'>
            <li>
              <FaLinkedin size={20} color='yellow' />{' '}
              <a href="https://www.linkedin.com/in/mohitsharma34/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </li>
            <li>
              <FaGithub size={20} color='yellow'  />{' '}
              <a href="https://github.com/mohits0108" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </li>
            <li>
              <FaPhone size={20} color='yellow'  />{' '}
              <span className='number'>+91 8103772017</span>
            </li>
            <li>
              <FaEnvelope size={20} color='yellow'  />{' '}
              <a href="mailto:mohits0108@gmail.com">mohits0108@gmail.com</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;

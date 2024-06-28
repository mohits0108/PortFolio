import React from 'react'
import PageHeaderContent from '../../components/pageheadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './style.scss'
import { DiApple,DiAndroid } from 'react-icons/di'; 
import { FaDev,FaDatabase,FaLinkedin } from 'react-icons/fa';


const About = () => {
  const personalDetails=[
    {
      label:"Name:",
      value:"Mohit Sharma",
    },
    {
      label:"Age:",
      value:"21",
    },
    {
      label:"E-Mail:",
      value:"mohits0108@gmail.com",
    },
    {
      label:"Linkedin:",
      value:"linkedin.com/in/mohitsharma34",
    },
    {
      label:"Mobile No.:",
      value:"8103772017",
    },
  ];

  const jobSummary="Aspiring Frontend Developer with a solid foundation in web development technologies and a keen eye for detail. Proficient in creating responsive, user-friendly websites and applications using HTML, CSS, JavaScript, and modern frameworks like React. Eager to learn and apply new technologies and methodologies to enhance user experience and optimize performance. Strong problem-solving skills with a passion for crafting clean, efficient, and maintainable code."

  return (
    
      <section id='about' className='about'>
        <PageHeaderContent
        headerText="about Me"
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className='about_content'>
          <div className='about_content_personal'>    
            <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform:"translatex(-900px)",
          }}
          end={{
            transform:"translatex(0px)",
          }}>
          <h3>Front end Developer</h3>
          <p>{jobSummary}</p>

          </Animate>
          <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform:"translatex(500px)",
          }}
          end={{
            transform:"translatex(0px)",
          }}>
          <h3 className='personal'>Personal Information</h3>
          <ul>
            {
              personalDetails.map((item,i)=>(
                <li key={i}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>           
                </li>
              ))
            }
              
            
          </ul>
          </Animate>     
           </div>

           <div className='about_content_services'>
           <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform:"translatex(600px)",
          }}
          end={{
            transform:"translatex(0px)",
          }}>
            <div className='about_content_services_inner'>
            <div>
              <FaDev size={60} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
            <DiAndroid size={60} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
            <FaDatabase size={60} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
            <DiApple size={60} color='var(--yellow-theme-main-color)'/>
            </div>
            </div>
            </Animate>
            
            
           </div>
        
        </div>
      </section>
    
  )
}

export default About;

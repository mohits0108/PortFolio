import React from 'react'
import PageHeaderContent from '../../components/pageheadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './style.scss';
const contact = () => {
  return (
    <div>
      <section id='contact' className='contact'>
        <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className='contact_content'>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform:"translatex(-800px)",
          }}
          end={{
            transform:"translatex(0px)",
          }}>
            <h3
            className='contact_content_header-text'>Let's talk</h3>
                 </Animate>
          <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform:"translatex(200px)",
          }}
          end={{
            transform:"translatex(0px)",
          }}>
            
            <div className='contact_content_form'>
            <div className='contact_content_form_control'>
              <div >
                <input required className='inputName' type="text" name="name"/>
                <label htmlFor="name" className='nameLabel'>Name</label>
              </div>
              <div >
              <input required className='inputMail' type="email" name="email"/>
              <label htmlFor="email" className='emailLabel'>Email</label>
              </div>
              <div >
              <textarea required className='inputDescription' type="text" name="description" rows={5}/>
              <label htmlFor="description" className='descriptionlabel'>Description</label>
              </div>
              </div>
              <button>Submit</button>
            </div>
                 </Animate>
        </div>
      </section>
    </div>
  )
}

export default contact;

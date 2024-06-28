import React from 'react'
import PageHeaderContent from '../../components/pageheadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { skillsData } from './Utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './style.scss'
const Skills = () => {
  return (
    <div>
      <section id='skills' className='skills'>
        <PageHeaderContent
        headerText="Skills"
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className='skills_content'>
          {
            skillsData.map((item,i)=>(
              <div key={i} className='skills_content_inner'>
                <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: 'translateX(-400px)'
                }}
                end={{
                  transform: 'translateX(0px)'
                }}>
                  <h3 className='skills_content_inner_category'>{item.label}</h3>
                  <div>
                    {item.data.map((skillItem,j)=>(
                      <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity:1","opacity:0"]}
                      iterationCount={1}  >
                        <div className='progressbar' key={j}>
                          <p>{skillItem.skillname}</p>
                          <Line percent={skillItem.percentage}
                          strokeWidth={2}
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth={2}
                          strokeLinecap='square'/>
                          
                        </div>


                      </AnimateKeyframes>
                    ))}
                  </div>

                </Animate>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Skills;

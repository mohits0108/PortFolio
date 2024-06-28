import React from 'react';
import PageHeaderContent from '../../components/pageheadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { IoCodeDownload } from 'react-icons/io5';
import { Animate } from 'react-simple-animate';

import './style.scss';

const Resume = () => {
  const handleDownload = () => {
    const fileUrl = 'MohitSharmaResume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'MohitSharmaResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('PDF downloaded successfully');
  };

  return (
    <div>
      <section id="resume" className="resume">
        <PageHeaderContent headerText="Resume" icon={<BsInfoCircleFill size={40} />} />
      </section>
      
      <div className="content">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: 'translateX(-200px)' }}
          end={{ transform: 'translateX(300px)' }}
        >
          <button className="btn" onClick={handleDownload}>
            Download PDF <span><IoCodeDownload size={30} /></span>
          </button>
        </Animate>
        
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: 'translateX(600px)' }}
          end={{ transform: 'translateX(-200px)' }}
        >
          <img src="/rimg.png" alt="img" className="imgc" />
        </Animate>
      </div>
    </div>
  );
};

export default Resume;

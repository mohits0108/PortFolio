import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageheadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import imageOne from '../../image/image1.jpg';
import imageFive from '../../image/image2.jpeg';
import imageFour from '../../image/image4.png';
import imageTwo from '../../image/image2.jpg';
import imageThree from '../../image/image3.png';
import imagesix from '../../image/image5.webp';
import './style.scss';

const Portfolio = () => {
  const portfoliodata = [
    { id: 2, name: "NewsAPI", image: imageOne, link: 'https://github.com/mohits0108/NewsApi' },
    { id: 2, name: "Spotifyclone", image: imageTwo, link: 'https://github.com/mohits0108/SpotifyClone' },
    { id: 2, name: "tailwindLandingPage", image: imageThree, link: 'https://github.com/mohits0108/TailwindLandingPage' },
    { id: 3, name: "OnlineFoodDeliveryApp", image: imageFour, link: 'https://github.com/mohits0108/FoodDeliveryPage' },
    { id: 3, name: "TextEditor", image: imageFive, link: 'https://github.com/mohits0108/TextEditor' },
    { id: 2, name: "WhetherApp", image: imagesix, link: 'https://github.com/mohits0108/WheatherApp' },
  ];

  const filterData = [{ filterId: 1, label: 'Projects' }];
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    console.log(`Hovering over item index: ${index}`);
    setHoveredValue(index);
  }

  function handleLeave() {
    console.log(`Mouse left item`);
    setHoveredValue(null);
  }

  function handleVisit(link) {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  console.log("======================================================================================");
  console.log(hoveredValue);
  console.log("======================================================================================");

  const filteredItems = filteredValue === 1 ? portfoliodata : portfoliodata.filter(item => item.id === filteredValue);

  return (
    <div>
      <section id='portfolio' className='portfolio'>
        <PageHeaderContent headerText="Portfolio" icon={<BsInfoCircleFill size={40} />} />
        <div className='portfolio_content'>
          <ul className='portfolio_content_filter'>
            {filterData.map(item => (
              <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                {item.label}
              </li>
            ))}
          </ul>
          <div className='portfolio_content_cards'>
            {filteredItems.map((item, index) => (
              <div
                className='portfolio_content_cards_item'
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
              >
                <div className='portfolio_content_cards_item_img'>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt={item.name} />
                  </a>
                </div>
                {index === hoveredValue && (
                  <div className='overlay'>
                    <div className='overlay_content'>
                      <p>{item.name}</p>
                      <button onClick={() => handleVisit(item.link)}>Visit</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

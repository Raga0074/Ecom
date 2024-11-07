import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



function Hero() {
  return (
    <section className='w-[100%] overflow-hidden object-fill mt-8'>
        
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={1400}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-60-px">

    <div>
      <img src='/men.jpg'/>
    </div>
    <div>
      <img src='/people.jpg'/>
    </div>
    <div>
      <img src='/shoes.jpg'/>
    </div>
    <div>
      <img src='/watch.jpg'/>
    </div>
    <div>
      <img src='/go-pro.jpg'/>
    </div>
    <div>
      <img src='/sports.jpg'/>
    </div>
    <div>
      <img src='/brogue-shoes.jpg'/>
    </div>
  </Carousel> 
      </section>
  );
}

export default Hero;

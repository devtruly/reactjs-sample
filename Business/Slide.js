import React from 'react';
import { Slide }  from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    // {`${process.env.PUBLIC_URL}/img/business-${num}.png`}
    {
        url: `${process.env.PUBLIC_URL}/img/business-1.png`,
        caption: 'Slide 1'
    },
    {
        url: `${process.env.PUBLIC_URL}/img/business-2.png`,
        caption: 'Slide 2'
    },
    {
        url: `${process.env.PUBLIC_URL}/img/business-3.png`,
        caption: 'Slide 3'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                        <div>
                            <img src={slideImage.url} />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow;
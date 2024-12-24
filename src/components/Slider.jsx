import React, { useState, useRef, useEffect } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null); // Create a reference to the slider element

    const slides = [
        { id: 1, content: 'Slide 1' },
        { id: 2, content: 'Slide 2' },
        { id: 3, content: 'Slide 3' },
        { id: 4, content: 'Slide 4' },
        { id: 5, content: 'Slide 5' },
        { id: 6, content: 'Slide 6' },
        { id: 7, content: 'Slide 7' },
        { id: 8, content: 'Slide 8' },
        // Add more slides here
    ];

    const length = slides.length - 1;
    const handlePrevClick = () => {
        // console.log("prev=", currentSlide);
        // if (currentSlide > 1) {
        if (currentSlide >= length) {
            // console.log("greater or eq to 2");
            setCurrentSlide(length-1)
        }
        else if (currentSlide === 0) {
            setCurrentSlide(length)
        }
        else setCurrentSlide(currentSlide - 1);
        // console.log("after click prev=", currentSlide);
        // sliderRef.current.scrollLeft = currentSlide * 400; // Use the ref to access the slider element
    };

    const handleNextClick = () => {
        // console.log("next=", currentSlide);
        if(currentSlide === length) setCurrentSlide(0);
        else setCurrentSlide(currentSlide + 1);
        // console.log("after click next=", currentSlide);
        // sliderRef.current.scrollLeft = currentSlide * 400; // Use the ref to access the slider element
    };

    useEffect(() => {
        // console.log("after click prev=", currentSlide);
        sliderRef.current.scrollLeft = currentSlide * 440; // Use the ref to access the slider element
      }, [currentSlide, sliderRef]);

    return (
        <div className="slider-container">
            <div ref={sliderRef} className="slider flex flex-row gap-10 border border-red-200 w-[500px] overflow-x-hidden" >
                {slides.map((slide, index) => (
                    <div key={slide.id} className="slide border border-black h-[200px] min-w-[400px]">
                        {slide.content}
                    </div>
                ))}
            </div>
            <button className="prev border-4 border-red-200" onClick={handlePrevClick}>
                Prev
            </button>
            <button className="next border-4 border-green-200 " onClick={handleNextClick}>
                Next
            </button>
        </div>
    );
};

export default Slider;
import React from 'react';
import Goo from 'gooey-react'

const About = () => {

    return(
        <div className="about" style={{height: `100%`}}>
            <title>Inhye Choi</title>
            <Goo intensity="weak">
            <svg className="inhyeBgFilter">
                <defs>
                </defs>
            </svg>
            <div className="inhyeBgWrapper">
                <svg id="inhyeBg" width="100%" height="100%" xmlms="https://www.w3.org/TR/SVG/" viewBox="0 0 523.87 535.79">
                    <g className="inhyeBg-g">
                        <circle className="c-1" cx="50%" cy="50%" r="42" ></circle>
                        <circle className="c-2" cx="50%" cy="50%" r="36" ></circle>  
                        <circle className="c-3" cx="50%" cy="50%" r="30" ></circle>
                        <circle className="c-4" cx="50%" cy="50%" r="24" ></circle>
                    </g>
                </svg>
            </div>
            </Goo>
            <svg id="inhye-txt" width="100%" height="100%" xmlms="https://www.w3.org/TR/SVG/" viewBox="0 0 824.65 485.8">
                <foreignObject x="60%" y="70%" width="300" height="400" className="aboutHeader">
                    <div xmlns="https://www.w3.org/TR/SVG/">
                        <h1 className="title">
                            <span>👋Hi I’m Inhye </span>
                            <span></span>
                        </h1>
                        <h2 className="title">
                            <span>I like making</span>
                            <span>fun and interactive</span>
                            <span>things with code.</span>
                        </h2>
                    </div>
                </foreignObject>
            </svg>
        </div>
    );
}

export default About
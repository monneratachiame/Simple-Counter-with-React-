//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//import SimpleCounter from "./component/home.jsx";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//render your react application

function SimpleCounter(props){
    return (<div className="bigCounter">
    <div className="calendar">
        <i className="far fa-clock"></i>
    </div>
    <div className="six">{props.digitSix %10}</div>
    <div className="five">{props.digitFive %10}</div>
    <div className="four">{props.digitFour %10}</div>
    <div className="three">{props.digitThree %10}</div>
    <div className="two">{props.digitTwo %10}</div>
    <div className="one">{props.digitOne %10}</div>
</div>);
};

SimpleCounter.propTypes = {
    digitSix: propTypes.number,
    digitFive: propTypes.number,
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number
};

let counter = 0;
setInterval(function(){
    const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
    const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	
	counter++;
    ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
            digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

export default SimpleCounter;
 
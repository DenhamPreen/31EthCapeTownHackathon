import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThePressureCooker extends Component {

    constructor(props){
        super(props);

        this.state = {
            seconds : props.secondsToCountDown 
        };

        this.timer = 0;
    }

    componentDidMount() {
        this.startTimer();
    }


    startTimer = () => {
        if (this.timer == 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown = () => {        
        let seconds = this.state.seconds - 1;
        this.setState({
          seconds: seconds,
        });
        
        if (seconds == 0) { 
          clearInterval(this.timer);
        }
      }

    render() {
        const countDownTimerStyle = {
            borderRadius: '50%',
            backgroundColor: "white",
            width: '40px',
            height: '40px',
            position: 'absolute',
            top: 20,
            left: 20
        }

        return (
            <div style={countDownTimerStyle}>
                {this.state.seconds}                
            </div>
        );
    }
}

ThePressureCooker.propTypes = {
    secondsToCountDown: PropTypes.number.isRequired,
};

export default ThePressureCooker;
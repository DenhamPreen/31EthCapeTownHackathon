import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AnimalImageFile from './img/Rhino.png'

class AnimalImage extends Component {
    

    constructor(props){
        super(props);
    }

    render() {
        const imageStyle = {            
            borderTop: '1px solid white',
            width: '100%',
            height: '30vh',
            position: 'absolute',
            top: 0
        }

        return (
            <div style={imageStyle}>            
              <img src={AnimalImageFile} className='' alt='Endagered Animal' style={{width:'100%'}}/>
            </div>
        );
    }
}

AnimalImage.propTypes = {
    // winnings: PropTypes.number.isRequired,
};

export default AnimalImage;
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import FooterBarNav from './FooterBarNav'
import AnimalCard from './AnimalCard'

import Swiper from 'react-id-swiper';
import './App.css'

class AnimalCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStore: true,
            cards: [
                { id: 1, name: "Jon Jon", cardDisplay: 'block' }
                , { id: 2, name: "Zuckerberg", cardDisplay: 'block' }
                , { id: 3, name: "3rd", cardDisplay: 'block' }
                , { id: 4, name: "4th", cardDisplay: 'block' }
                , { id: 5, name: "5th", cardDisplay: 'block' }
                , { id: 6, name: "6th", cardDisplay: 'block' }
                , { id: 7, name: "7th", cardDisplay: 'block' }
                , { id: 8, name: "8th", cardDisplay: 'block' }
                , { id: 9, name: "9th", cardDisplay: 'block' }
            ]
        }
    }

    renderCards() {
        const cardStyle = {
            backgroundColor: "#2a3132",
            height: '80vh'
        }
        return this.state.cards.map((specificCard, index) => {
            return (
                <div>
                    <AnimalCard Rhino={specificCard}/>
                </div>
            );
        });
    }

    render() {

        const params = {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            }
        };

        const altBackgroundStore = 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)';
        const containerViewPort = {
            backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0
        }

        return (

            // <div style={containerViewPort}>
            <div>
                <Swiper {...params}>
                 {this.renderCards()}
                    {/* <div style={{ height: '100vh', width: '100px', backgroundColor: 'blue' }}></div>
                    <div style={{ height: '100vh', width: '100px', backgroundColor: 'pink' }}></div>
                    <div style={{ height: '100vh', width: '100px', backgroundColor: 'purple' }}></div>
                    <div style={{ height: '100vh', width: '100px', backgroundColor: 'yellow' }}></div>
                    <div style={{ height: '100vh', width: '100px', backgroundColor: 'blue' }}></div> */}
                </Swiper>
                <FooterBarNav />
            </div>
        );
    }
}

AnimalCardContainer.propTypes = {
    // someprop: PropTypes.object.isRequired,
};

export default AnimalCardContainer;
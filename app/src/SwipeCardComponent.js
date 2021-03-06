import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardWrapper } from 'react-swipeable-cards'
import PropTypes from 'prop-types'
import ThePressureCooker from './ThePressureCooker'
import AnimalImage from './AnimalImage'
import FooterBarNav from './FooterBarNav'

class SwipeCardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            showStore : true,
            cards : [
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

    onSwipeRight(data) {
        console.log(data.name + " Baby Im a gambling man");
    }

    renderCards() {
        const cardStyle = {
            backgroundColor: "#2a3132",
            height: '80vh'
        }
        return this.state.cards.map((specificCard, index) => {
            return (
                <Card
                    style={cardStyle}
                    key={specificCard.id}
                    onSwipeRight={this.onSwipeRight.bind(this)}     
                    removeCard={true}               
                    data={specificCard}>
                        <ThePressureCooker
                            secondsToCountDown = {10}
                        />
                        {specificCard.name}
                        <AnimalImage/>
                </Card>
            );
        });
    }

    render() {
        const altBackgroundStore = 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)';
        const wrapperStyle = {
            backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0
        }

        return (        
            <CardWrapper style={wrapperStyle}>
                {this.renderCards()}
                <FooterBarNav 
                    winnings = '100 000'
                />
            </CardWrapper>
        );
    }
}

SwipeCardComponent.propTypes = {
    // someprop: PropTypes.object.isRequired,
};

export default SwipeCardComponent;
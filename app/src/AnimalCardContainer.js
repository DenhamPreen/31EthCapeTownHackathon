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
                {   
                    id: 1, 
                    name: "Vitalik", // let user set this on first buy
                    age: 12,
                    lineage: "african",
                    weight : 900,
                    is_female: false,
                    img_source_url: "myurl",

                    // Values we will be pulling from chain
                    // hardcoding them for now...
                    price: 100,
                    current_owner: 0x348341035837599834,
                    time_held: 12, //must define if this is hours days etc...
                    highest_price: 12314,
                    revenue_generated: 9
                },
                {   
                    id: 2, 
                    name: "Andrew", // let user set this on first buy
                    age: 12,
                    lineage: "african",
                    weight : 900,
                    is_female: false,
                    img_source_url: "myurl",

                    // Values we will be pulling from chain
                    // hardcoding them for now...
                    price: 100,
                    current_owner: 0x348341035837599834,
                    time_held: 12, //must define if this is hours days etc...
                    highest_price: 12314,
                    revenue_generated: 9
                },
                {   
                    id: 3, 
                    name: "Simon", // let user set this on first buy
                    age: 12,
                    lineage: "african",
                    weight : 900,
                    is_female: true,
                    img_source_url: "myurl",

                    // Values we will be pulling from chain
                    // hardcoding them for now...
                    price: 100,
                    current_owner: 0x348341035837599834,
                    time_held: 12, //must define if this is hours days etc...
                    highest_price: 12314,
                    revenue_generated: 9
                },
                {   
                    id: 4, 
                    name: "Griff", // let user set this on first buy
                    age: 12,
                    lineage: "african",
                    weight : 900,
                    is_female: false,
                    img_source_url: "myurl",

                    // Values we will be pulling from chain
                    // hardcoding them for now...
                    price: 100,
                    current_owner: 0x348341035837599834,
                    time_held: 12, //must define if this is hours days etc...
                    highest_price: 12314,
                    revenue_generated: 9
                },
                {   
                    id: 5, 
                    name: "Anastasia", // let user set this on first buy
                    age: 12,
                    lineage: "african",
                    weight : 900,
                    is_female: true,
                    img_source_url: "myurl",

                    // Values we will be pulling from chain
                    // hardcoding them for now...
                    price: 100,
                    current_owner: 0x348341035837599834,
                    time_held: 12, //must define if this is hours days etc...
                    highest_price: 12314,
                    revenue_generated: 9
                },
                {   
                    id: 6, 
                    name: "Justin", // let user set this on first buy
                    age: 12,
                    lineage: "african",
                    weight : 900,
                    is_female: false,
                    img_source_url: "myurl",

                    // Values we will be pulling from chain
                    // hardcoding them for now...
                    price: 100,
                    current_owner: 0x348341035837599834,
                    time_held: 12, //must define if this is hours days etc...
                    highest_price: 12314,
                    revenue_generated: 9
                },
                {   
                    id: 7, 
                    name: "Michael", // let user set this on first buy
                    age: 12,
                    lineage: "african",
                    weight : 900,
                    is_female: false,
                    img_source_url: "myurl",

                    // Values we will be pulling from chain
                    // hardcoding them for now...
                    price: 100,
                    current_owner: 0x348341035837599834,
                    time_held: 12, //must define if this is hours days etc...
                    highest_price: 12314,
                    revenue_generated: 9
                },
                {   
                    id: 8, 
                    name: "Gustav", // let user set this on first buy
                    age: 12,
                    lineage: "african",
                    weight : 900,
                    is_female: true,
                    img_source_url: "myurl",

                    // Values we will be pulling from chain
                    // hardcoding them for now...
                    price: 100,
                    current_owner: 0x348341035837599834,
                    time_held: 12, //must define if this is hours days etc...
                    highest_price: 12314,
                    revenue_generated: 9
                },
                {   
                    id: 9, 
                    name: "George", // let user set this on first buy
                    age: 12,
                    lineage: "african",
                    weight : 900,
                    is_female: false,
                    img_source_url: "myurl",

                    // Values we will be pulling from chain
                    // hardcoding them for now...
                    price: 100,
                    current_owner: 0x348341035837599834,
                    time_held: 12, //must define if this is hours days etc...
                    highest_price: 12314,
                    revenue_generated: 9
                },
                {   
                    id: 10, 
                    name: "Sean", // let user set this on first buy
                    age: 12,
                    lineage: "african",
                    weight : 900,
                    is_female: false,
                    img_source_url: "myurl",

                    // Values we will be pulling from chain
                    // hardcoding them for now...
                    price: 100,
                    current_owner: 0x348341035837599834,
                    time_held: 12, //must define if this is hours days etc...
                    highest_price: 12314,
                    revenue_generated: 9
                },

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
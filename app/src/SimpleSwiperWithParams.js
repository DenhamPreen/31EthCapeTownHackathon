import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import './App.css'


export default class Navigation extends Component {
    render() {
        const params = {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            }
        };
        return (
            <Swiper {...params}>
                <div style={{ height: '100vh', width: '100px', backgroundColor: 'blue' }}></div>
                <div style={{ height: '100vh', width: '100px', backgroundColor: 'pink' }}></div>
                <div style={{ height: '100vh', width: '100px', backgroundColor: 'purple' }}></div>
                <div style={{ height: '100vh', width: '100px', backgroundColor: 'yellow' }}></div>
                <div style={{ height: '100vh', width: '100px', backgroundColor: 'blue' }}></div>
            </Swiper>
        )
    }
}
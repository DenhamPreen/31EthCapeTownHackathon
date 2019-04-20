import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardWrapper } from 'react-swipeable-cards';
import PropTypes from 'prop-types'

class HeadingComponent extends Component {
    onSwipe(data) {
        console.log(data.name + " was swiped.");
    }
    onSwipeLeft(data) {
        console.log(data.name + " Ill pass");
    }
    onSwipeRight(data) {
        console.log(data.name + " Baby Im a gambling man");
    }

    renderCards() {
        const cardStyle = {
            backgroundColor: "#059FFF"
        }
        let data = [{ id: 1, name: "First" }, { id: 2, name: "Second" }, { id: 3, name: "3rd" }, { id: 4, name: "4th" }, { id: 5, name: "5th" }];
        return data.map((d) => {
            return (
                <Card
                    style={cardStyle}
                    key={d.id}
                    onSwipe={this.onSwipe.bind(this)}
                    onSwipeLeft={this.onSwipeLeft.bind(this)}
                    onSwipeRight={this.onSwipeRight.bind(this)}
                    data={d}>
                    {d.name}
                </Card>
            );
        });
    }

    render() {
        const wrapperStyle = {
            backgroundColor: "#024773",
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0
        }

        return (
            <CardWrapper style={wrapperStyle}>
                {this.renderCards()}
            </CardWrapper>
        );
    }
}

HeadingComponent.propTypes = {
    // someprop: PropTypes.object.isRequired,
};

export default HeadingComponent;
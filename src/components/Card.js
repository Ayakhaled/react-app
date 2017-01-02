/**
 * Created by Aya on 12/30/2016.
 */
import React, { Component } from 'react';
import '../App.css';
class Card extends Component {
    render() {
        return (
            <div className="row card">
                <p>{this.props.thoughtDesc}</p>
            </div>
        );
    }
}

export default Card;

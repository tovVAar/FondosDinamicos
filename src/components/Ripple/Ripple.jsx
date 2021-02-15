import React, { Component } from 'react';
import './Ripple.css'

export default class Ripple extends Component {
    render() {
        return (
            <div class='ripple-background'>
                <div class='circle xxlarge shade1'></div>
                <div class='circle xlarge shade2'></div>
                <div class='circle large shade3'></div>
                <div class='circle mediun shade4'></div>
                <div class='circle small shade5'></div>
            </div>
        )
    }
}

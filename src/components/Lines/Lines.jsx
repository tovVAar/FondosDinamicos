import React, { Component } from 'react';
import './Lines.scss';

export default class Lines extends Component {
    linesGroup(ammount){
        let components = [];
        for(let i=0; i < ammount; i++){
            components.push(
                <div class="line"/>
            );
        }
        return components;
    }

    render() {
        return (
            <div class="lines">
                {this.linesGroup(3)}
            </div>
        )
    }
}

import React, { Component } from 'react';
import './Triangles.scss';

export default class Triangles extends Component {

triangleShapes(ammount) {
    let content = [];
    for(let i=0; i<ammount; i++){
        content.push(
            <svg id={i} class="shape" viewBox="0 0 100 115" preserveAspectRatio="xMidYMin slice">
                <polygon points="" fill="none" stroke="hsl(320,100%,70%)" stroke-width="5">
                <animate attributeName="points" repeatCount="indefinite" dur="4s" begin="0s" from="50 57.5, 50 57.5, 50 57.5" to="50 -75, 175 126, -75 126"></animate>
                </polygon>
                <polygon points="" fill="none" stroke="hsl(240,100%,70%)" stroke-width="5">
                <animate attributeName="points" repeatCount="indefinite" dur="4s" begin="1s" from="50 57.5, 50 57.5, 50 57.5" to="50 -75, 175 126, -75 126"></animate>
                </polygon>
                <polygon points="" fill="none" stroke="hsl(160,100%,70%)" stroke-width="5">
                <animate attributeName="points" repeatCount="indefinite" dur="4s" begin="2s" from="50 57.5, 50 57.5, 50 57.5" to="50 -75, 175 126, -75 126"></animate>
                </polygon>
                <polygon points="" fill="none" stroke="hsl(80,100%,70%)" stroke-width="5">
                <animate attributeName="points" repeatCount="indefinite" dur="4s" begin="3s" from="50 57.5, 50 57.5, 50 57.5" to="50 -75, 175 126, -75 126"></animate>
                </polygon>
            </svg>
        );
    }
    return content;
}

    render() {
        return (
            <div>
                <div class="overlay"></div>
                <div class="container">
                    {this.triangleShapes(70)}
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import './Hielitos.scss';

export default class Hielitos extends Component {
    cubitos(ammount) {
        let components = [];
        for(let i=0; i < ammount; i++){
            components.push(<li></li>);
        }
        return components;
    }

    render() {
        return (
            <div>
                <div class="context">
                    <h1></h1>
                </div>

                <div class="area" >
                    <ul class="circles">
                        {this.cubitos(30)};
                    </ul>
                </div >
            </div>
        )
    }
}

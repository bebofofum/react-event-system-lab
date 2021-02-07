// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {


    render() {
        return (
            <form>
                <input type="password" onKeyUp={() => console.log('Entering password...')} />
            </form>
        )
    }
}
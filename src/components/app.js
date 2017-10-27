import React, { Component } from 'react';

import InputComponent from './InputComponent';
import LabelComponent from './LabelComponent';
import ButtonComponent from './ButtonComponent';

class App extends Component {
    render() {
        return (
            <div className="center-container">
                <p><LabelComponent /></p>
                <p><InputComponent /></p>
                <p><ButtonComponent /></p>
            </div>
        );
    }
}

export default App;

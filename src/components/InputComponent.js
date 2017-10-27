import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { inputChange } from '../actions/index';

class InputComponent extends Component {
    handleOnChange = (e) => {
        this.props.inputChange(e.target.value);
    }

    render() {
        return (
            <input id="someText" onChange={(e) => this.handleOnChange(e)} type="text" />
        );
    }
}

InputComponent.PropTypes = {
    inputChange: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        inputChange,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(InputComponent);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class LabelComponent extends Component {
    render() {
        return (
            <label htmlFor="someText">{this.props.itemInLabel}</label>
        );
    }
}

LabelComponent.PropTypes = {
    itemInLabel: PropTypes.string,
};

function mapStateToProps(state) {
    return {
        itemInLabel: state.elements.itemInLabel,
    };
}

export default connect(mapStateToProps, null)(LabelComponent);

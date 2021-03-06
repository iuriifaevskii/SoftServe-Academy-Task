import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clickChange } from '../actions/index';


class ButtonComponent extends Component {
    onClick = () => {
        this.props.clickChange(this.props.item);
    }

    render() {
        return (
            <button
                disabled={this.props.isActive}
                onClick={this.onClick}
                className="btn btn-success"
            >
                Click
            </button>
        );
    }
}

ButtonComponent.PropTypes = {
    clickChange: PropTypes.func,
    isActive: PropTypes.bool,
    item: PropTypes.string,
};


function mapStateToProps(state) {
    return {
        item: state.elements.item,
        isActive: state.elements.isMoreThenFive,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        clickChange,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);

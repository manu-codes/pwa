import React from 'react';
import '../style.css';
export default class Col extends React.Component {
    render() {
        const padding = this.props.nopad ? '' : ' pad'
        const classNames = this.props.className + padding;
        return (
            <div className={classNames} style={this.props.style ? this.props.style : null}>
                {this.props.children}
            </div>
        );
    }
}
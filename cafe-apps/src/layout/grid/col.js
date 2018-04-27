import React from 'react';
import '../style.css';
export default class Col extends React.Component {
    render() {
        const classNames = this.props.className+' pad';
        return (
            <div className={classNames}>
                {this.props.children}
            </div>
        );
    }
}
import React from 'react';
import '../style.css';
export default class Row extends React.Component {
    render() {
        const otherClassNames = this.props.className ? this.props.className : '';
        return (
            <div className={'row ' + otherClassNames}>
                {this.props.children}
            </div>
        );
    }
}
import React, { Component } from 'react';

class Section extends Component {

    render() {
        const { body } = this.props;
        // console.log(body);
        return (
            <div className="container-fluid">
                {body}
            </div>
        );
    }
}
export default Section;


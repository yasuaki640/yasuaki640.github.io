import React from 'react';

class Content extends React.Component {

    render() {
        const contentTitle = this.props.contentTitle;
        return (
            <div className="content mb-5">
                <h3 className="mb-3" id={contentTitle}>{contentTitle}</h3>
                {this.sentence()}
            </div>
        );
    }

    sentence() {
        return (
            <>
            </>
        );

    }
}

export default Content;
import React from 'react';

class IframeVideo extends React.Component {

    render() {
        return(
            <iframe width="100%" height="100%" src={this.props.src}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>

        );
    }

}

export default IframeVideo;

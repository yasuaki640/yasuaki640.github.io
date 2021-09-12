import React from 'react';
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import IframeVideo from "./IframeVideo";

class Videos extends React.Component {

    render() {
        const contentTitle = 'Videos';
        return (
            <div className="content mb-5">
                <h3 className="mb-3" id={contentTitle}>{contentTitle}</h3>
                {this.sentence()}
            </div>
        );
    }

    sentence() {
        const youtubeVideo1 = 'https://www.youtube.com/embed/IvJm2414GjY';
        const youtubeVideo2 = 'https://www.youtube.com/embed/CMc1b4Ss2Fs';

        return (
            <>
                <Row>
                    <Col md={6}>
                        <IframeVideo key={youtubeVideo1} src={youtubeVideo1}/>
                    </Col>
                    <Col md={6}>
                        <IframeVideo key={youtubeVideo2} src={youtubeVideo2}/>
                    </Col>
                </Row>
            </>
        );
    }


}

export default Videos;

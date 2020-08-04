import React from 'react';
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import IframeVideo from "./IframeVideo";

class Videos extends React.Component {

    render() {
        const contentTitle = 'Videos (Playing drums)';
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
                <Row>
                    <Col md={6}>
                        <IframeVideo src="https://www.youtube.com/embed/IvJm2414GjY"/>
                    </Col>
                    <Col md={6}>
                        <IframeVideo src="https://www.youtube.com/embed/CMc1b4Ss2Fs"/>
                    </Col>
                </Row>
            </>
        );
    }


}

export default Videos;

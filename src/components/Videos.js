import React from 'react';
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

class Videos extends React.Component {
    render() {
        return (
            <div className="content mb-5">
                <h3 className="mb-3" id="Videos">Videos (playing drums)</h3>
                <Row>
                    <Col md={6}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IvJm2414GjY"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </Col>
                    <Col md={6}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pqDafN7U8B0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Videos;

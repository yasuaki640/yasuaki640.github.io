import React from 'react';

class MyaApp extends React.Component {

    sentence() {
        return (
            <>
                <p>
                    <a href="https://github.com/yasuaki640/yasuaki640.github.io"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        A portfolio site integrated by simple React (this site)
                    </a>
                </p>
                <p>
                    <a href="https://github.com/yasuaki640/news-api-app"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        A minimal news search app integrated by React and Node.js
                    </a>
                </p>
                <p>
                    <a href="https://github.com/yasuaki640/scraping_images"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        A tool for saving images automatically from Instagram.<br/>
                        (Please use at your own risk because it violates the rules.)
                    </a>
                </p>
                <p>
                    An number of people who attend events counting app for religious corporations<br/>
                    (Private for religious reasons.)
                </p>
                <p>
                    <a href="https://yasuaki640.github.io/Terlis-by-pureJS/"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        An tetris game integrated by vanilla JavaScript
                        <br/>(Not compatible with smartphones)
                    </a>
                </p>
                <p>
                    <a href="https://sns2-2020.s3-ap-northeast-1.amazonaws.com/login.html"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        Bulletin board with login function integrated by Vue.js, Node.js, and
                        AWS Lambda.
                    </a>
                </p>
            </>
        );
    }

    render() {
        const contentTitle = 'MyApps';
        return (
            <div className="content mb-5">
                <h3 className="mb-3" id={contentTitle}>{contentTitle}</h3>
                {this.sentence()}
            </div>
        );
    }


}

export default MyaApp;
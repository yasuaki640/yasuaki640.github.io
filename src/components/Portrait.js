import React from 'react';
import MyPortrait from './images/index/logo/myPortlait.jpg'
import GithubLogo from './images/index/logo/github_logo.png'
import TwitterLogo from './images/index/logo/twitter_logo.png'
import YoutubeLogo from './images/index/logo/youtube_logo.png'
import {Container} from "react-bootstrap";

class Portrait extends React.Component {
    render() {
        return (
            <Container>
                <img src={MyPortrait} className="rounded mx-auto d-block mb-3"/>
                <div className="row justify-content-center mb-5">
                    <a href="https://twitter.com/y640drums" target="_blank" rel="noopener"><img
                        src={TwitterLogo} className="mx-2" alt="Twitter log"/></a>
                    <a href="https://github.com/yasuaki640" target="_blank" rel="noopener"><img
                        src={GithubLogo} className="mx-2" alt="Github log"/></a>
                    <a href="https://www.youtube.com/channel/UC91Qyr8LcsyRx-7SyNiaGZw" target="_blank"
                       rel="noopener"><img
                        src={YoutubeLogo} className="mx-2" alt="Youtube log"/></a>
                </div>
            </Container>
        );
    }
}

export default Portrait;

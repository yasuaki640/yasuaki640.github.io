import React from 'react';
import MyPortrait from './images/index/logo/myPortlait.jpg'
import GithubLogo from './images/index/logo/github_logo.png'
import TwitterLogo from './images/index/logo/twitter_logo.png'
import YoutubeLogo from './images/index/logo/youtube_logo.png'
import {Container} from "react-bootstrap";

class Title extends React.Component {
    render() {
        this.changeColor();
        return (
            <Container className="text-center">
                <h5 className="mt-2">Here is a portfolio site of</h5>
                <h1 className="mt-3 mb-5" id="changingColor" style={{color: '#000000'}}>y640</h1>
            </Container>
        );
    };

    changeColor() {
        function setRandomColor() {
            let rValue = Math.floor(Math.random() * 255);
            let gValue = Math.floor(Math.random() * 255);
            let bValue = Math.floor(Math.random() * 255);
            document.getElementById("changingColor").style.color = `rgb(${rValue},${gValue},${bValue})`;
        };

        setInterval(setRandomColor, 100);
    };


}

export default Title;

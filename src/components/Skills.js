import React from 'react';

class Skills extends React.Component {

    render() {
        const contentTitle = 'Skills';
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
                <ul>
                    <li>Programing Language<ul>
                        <li>PHP -&gt; 0.5 year</li>
                        <li>Laravel -&gt; 1 yeaer</li>
                        <li>Javascript -&gt; 1 year</li>
                        <li>Vue -&gt; 0.5 year</li>
                        <li>Java -&gt; 1 year</li>
                        <li>Spring boot -&gt; 0.5 year</li>
                    </ul>
                    </li>
                </ul>
                <ul>
                    <li>Infrastructure<ul>
                        <li>Amazon Web Service -&gt; 1 year</li>
                        <li>Docker -&gt; 1 year</li>
                        <li>Circle CI -&gt; 0.5 year</li>
                    </ul>
                    </li>
                </ul>
            </>
        );

    }


}

export default Skills;
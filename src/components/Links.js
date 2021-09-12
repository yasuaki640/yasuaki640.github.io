import React from 'react';

class Links extends React.Component {

    render() {
        const contentTitle = 'Links';
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
                    <li><a href="https://lapras.com/public/7DALJ90">Lapras</a><ul>
                        <li>Almost all my output is aggregated.</li>
                    </ul>
                    </li>
                    <li><a href="https://qiita.com/yasuaki640">Qiita</a><ul>
                        <li>This is a collection of Japanese technical articles that I wrote.</li>
                    </ul>
                    </li>
                    <li><a href="https://github.com/yasuaki640">Github</a><ul>
                        <li>This is the place where my codes uploaded.</li>
                    </ul>
                    </li>
                    <li><a href="https://twitter.com/y640drums">Twitter</a></li>
                    <li><a href="https://www.youtube.com/channel/UC91Qyr8LcsyRx-7SyNiaGZw">Youtube</a></li>
                </ul>
            </>
        );

    }


}

export default Links;
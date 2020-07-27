import React from 'react';

class MyaApp extends React.Component {
    render() {
        return (
            <div className="content mb-5">
                <h3 className="mb-3" id="MyApps">My apps (made as a hobby)</h3>
                <p>
                    <a href="https://tetlis-by-pure-javascript.s3-ap-northeast-1.amazonaws.com/index.html"
                       target="_blank"
                       rel="noopener">生JavaScriptによるテトリスゲーム<br/>(スマホ操作非対応)</a>
                </p>
                <p>
                    <a href="https://sns2-2020.s3-ap-northeast-1.amazonaws.com/login.html" target="_blank"
                       rel="noopener">Node.js、AWS Lambdaによるログイン形式の掲示板</a>
                </p>
                <p>Laravelによる宗教法人向け人数集計アプリ<br/>
                    (※宗教上の理由で非公開)</p>
            </div>
        );
    }
}

export default MyaApp;
import React from 'react';

class Qualifications extends React.Component {

    render() {
        const contentTitle = 'Qualifications';
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
                <p>Oracle Java Silver 2019/11</p>
                <p>基本情報技術者試験 2019/10</p>
                <p>英検準一級 2018/10</p>
                <p>TOEIC 815 2017/10</p>
            </>
        );
    }


}

export default Qualifications;
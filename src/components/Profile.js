import React from 'react';

class Profile extends React.Component {

    render() {
        const contentTitle = 'Profile';
        const mailAddress = 'yasuaki640@gmail.com';
        return (
            <div className="content mb-5">
                <h3 className="mb-3" id={contentTitle}>{contentTitle}</h3>
                {this.sentence(mailAddress)}
            </div>
        );
    }

    sentence(mailAddress) {
        return (
            <>
                <p>I'm web developer writing PHP, Laravel, JS, Vue and more.</p>
                <p>I like to write programs and study information engineering as a hobby in my private life, and often
                    upload my codes to Github and blogs.</p>
                <p>I also recently started OSS contributions little by little.</p>
                <p>Other than programming, my hobby is playing drums, and I go to sessions regardless of genre, such as
                    jazz and rock.</p>
                <p>
                    For more detailed information on my work history,&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href={"mailto:" + mailAddress}>Please email to me</a>
                </p>
            </>
        );

    }


}

export default Profile;
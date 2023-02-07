import React from 'react'

const SubscriptionForm = () => {
    return (
        <div className="sub-form" id="subscribe-form">
            <div className="sub-form-top">
                <h1>Get your technical writing career off the ground.</h1>
            </div>
            <div className="sub-form-bottom">
                <p>
                    Join over <strong>1000+ subscribers just like you</strong>.
                    Every two weeks, I'll send you <strong>new articles and expert interviews</strong> published on the blog,
                    so you'd never miss out. I'll also send you a curated list of <strong>other valuable resources on
                    technical writing </strong> across the internet, as well as  <strong>fully-remote technical writing gigs/jobs </strong>
                    to help you land your dream job.
                </p>
                <div id="revue-embed" className="sub-form-input">
                   <iframe src="https://everythingtechnicalwriting.substack.com/embed" 
                           width="480" 
                           height="320" 
                           style="border:1px solid #EEE; background:white;" 
                           frameborder="0" 
                           scrolling="no">
                 </iframe>
            </div>
            </div>
        </div>


    )
}


export default SubscriptionForm

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
                <form action="https://www.getrevue.co/profile/_mslinda/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
                    <div className="revue-form-group">
                        <label htmlFor="member_email" className="visually-hidden">Email address</label>
                        <input className="revue-form-field" placeholder="Enter your email address..." type="email" name="member[email]" id="member_email"></input>
                    </div>
                    <div className="revue-form-actions">
                        <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">Subscribe</button>
                    </div>
                    <div className="revue-form-footer sub-form-footer visually-hidden">By subscribing, you agree with Revue’s
                        <a target="_blank" href="https://www.getrevue.co/terms"> Terms of Service</a> and
                        <a target="_blank" href="https://www.getrevue.co/privacy"> Privacy Policy</a>
                    </div>
                </form>
            </div>
            </div>
        </div>


    )
}


export default SubscriptionForm

import React from 'react'

const SubscriptionForm = () => {
    return (
        <div className="sub-form" id="subscribe-form">
            <div className="container"> 
            <div className="sub-form-half">
                <h2>Subscribe to the newsletter!</h2>
                <p>My goal with this blog is to connect the dots for people who want to either  <strong>build a 
                   career on technical writing</strong> or <strong>learn how to use content to scale their tech startups</strong>. 
                   You'll get early previews to upcoming posts and annoucements. No spam. Unsubcribe at anytime!
                </p>
            </div>
            <div id="revue-embed" className="sub-form-half">
                <form action="https://www.getrevue.co/profile/_mslinda/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
                    <div className="revue-form-group">
                        <label htmlFor="member_email" className="visually-hidden">Email address</label>
                        <input className="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email"></input>
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

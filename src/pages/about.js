import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const AboutPage = () => (
    <Layout>
        <div className="container aboutpage">
            <div className="aboutpage-image">
                <img src="../images/myself.jpeg"></img>
            </div>
            <div className="aboutpage-content">
                <h2>You don't have to be Shakespeare or Linus Torvalds to be a technical writer!</h2>
                <p>Hello, my name is Linda Ikechukwu <a href="https://twitter.com/_mslinda">(@_msLinda)</a> — the human behind everythingtechnicalwriting.com. </p>
                    
                <p>I used to be a full time frontend engineer before I somehow found myself in the world of technical 
                    writing — strategising on and creating written content for some of the world’s biggest tech startups.
                </p> 

                <h3>Ok, so why did I start this blog?</h3>

                {/* img src="../images/about-tweet.png"></img> */}

                <p>
                    I made this <a href="https://twitter.com/_MsLinda/status/1389893412669820929">tweet</a> sometime in May, and based on the questions and feedback I got, I realized
                    that most people did not even know that Technical Writing is a viable career path or that technical content marketing is a thing.
                </p>
                <p>
                I created this blog to change that narrative. I plan to write jargon-free, practical articles 
                (just like on  <a href="https://www.codewithlinda.com/">codewithlinda.com</a>, my frontend development blog) based on my own learnings and 
                experience creating technical content for startups, to help:
                </p>
                <ul>
                    <li>People who want to build a career in technical writing (either full-time or freelance)</li>
                    <li>People understand the intricacies of technical writing and technical content marketing</li>
                    <li>Tech startups who want to understand how to leverage written content to accelerate growth and connect with their target customers</li>
                </ul>
                <p> If you fit any of those profiles, stick around or subscribe. New content coming up soon!</p>
            </div>
        </div>
    </Layout>
)

export default AboutPage

import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const AboutPage = () => {

    const pageInfo = {
        title: "About",
        byline: "Your one stop blog for all things technical writing in the software industry."
    }

    return (
        <Layout isPage={true} pageInfo={pageInfo}>
            <div className="aboutpage">
                <div className="aboutpage-image">
                    <img src="images/me.jpeg"></img>
                </div>
                <div className="aboutpage-content">
                    <h2>Hello, my name is Linda Ikechukwu <a href="https://twitter.com/_mslinda">(@_msLinda)</a> </h2>

                    <p>I am the human behind everythingtechnicalwriting.com.</p>

                    <p>
                        I started my career in tech as a frontend developer.
                        However, I soon realized that I enjoyed educating and writing to simplify
                        the complex than writing production code.
                    </p>

                    <p>
                        That was how I found myself in the field of technical writing, focused on developer marketing and developer education.
                        During this time, I have worked with tech startups in the mobile CI/CD, data pipeline, no-code, and web3 education industries.
                    </p>

                    <h2>Why did I start this blog?</h2>
                    <p>
                        While transitioning from frontend developer to technical writer in the software industry, I discovered two things:
                    </p>
                    <ul>
                        <li>There wasn't much awareness that technical writing is a viable and lucrative career path, just like programming is.</li>
                        <li>There was a deficit of exhaustive resources on the techniques and intricacies of technical writing as a career in the software industry. </li>
                    </ul>
                    <p> So, I started this website to contribute my quota to fixing both narratives. With everythingtechnicalwriting.com, I will: </p>
                    <ul>
                        <li>Raise awareness on the viability and lucrative nature of various technical writing careers.</li>
                        <li>Write <b>articles that detail my learnings and experience as a technical writer</b> to build an exhaustive technical writing resource bank.</li>
                        <li>Bring you <b>interviews with seasoned technical writers</b> about how they got their start and overcame obstacles in their careers so you can stand on the shoulders of giants as you navigate your own career</li>
                        <li>Help you <b>become a better and sought-after technical writer</b>.</li>
                    </ul>
                    <p>So, if you're thinking of making a transition to become a technical writer, or you want to skill up in technical writing, then you're at the right place. </p>
                    <p>Browse through articles on the site, and <a className="gradient-text" href="#subscribe-form">SUBSCRIBE TO THE NEWSLETTER↓</a> for valuable career tips and curated remote technical writing jobs. </p>
                    <p>If you love what I do and would like to support me, <a href="https://www.buymeacoffee.com/lindaikechukwu">Buy me a coffee.</a></p>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage

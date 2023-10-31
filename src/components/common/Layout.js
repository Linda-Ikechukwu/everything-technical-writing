import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import { SubscriptionForm } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.scss'


/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome, isBlog, isPage, postInfo, pageInfo }) => {
    const site = data.allGhostSettings.edges[0].node

    const [shareBtnText, setShareBtnText] = useState('share this article');

    const handlePostShare = () => {
        if (navigator.share) {
            navigator.share({
                title: postInfo.title,
                url: postInfo.url,
            }).then(() => {
                setShareBtnText('Thanks for sharing!');
            })
                .catch(console.error);
        } else {
            navigator.clipboard.writeText(postInfo.url).then(() => {
                setShareBtnText('Article link copied to clipboard!');
            }).catch(
                setShareBtnText('Couldnt copy article link clipboard!')
            )
        }
    }

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">
                <div className="hero-bg">
                    <div className="container">
                        <header>
                            <div className="nav">
                                <div className="nav-logo">
                                    <Link to="/">
                                        <img src="/images/etw-logo.svg" alt={site.title} />
                                    </Link>
                                </div>
                                <nav>
                                    <Navigation data={site.navigation} navClass="nav-item" />
                                    <Link className="nav-item" to="/about">About</Link>
                                </nav>
                                <div className="nav-subscribe gradient-text">
                                    <a className="" href="#subscribe-form">Subsribe to the Newsletter ➔</a>
                                </div>
                                <div className="nav-subscribe gradient-text">
                                    <a className="" href="https://twitter.com/techwriting_">Follow us on Twiter ➔</a>
                                </div>
                            </div>
                            {isHome ?
                                <div className="page-heading">
                                    <div className="page-heading-main">
                                        <h1 className="page-heading-title">Your one stop blog for all things
                                            <span className="gradient-text"> technical writing</span>
                                        </h1>
                                        <p className="page-heading-byline">
                                            Read articles on tips, tricks and techniques that'll help you thrive as a technical writer in the software industry.
                                        </p>
                                        <div className="nav-subscribe gradient-text">
                                            <a className="" href="#subscribe-form">Subsribe to the Newsletter ➔</a>
                                        </div>
                                    </div>
                                </div>
                                :
                                isBlog ?
                                    <div className="page-heading">
                                        <div className="page-heading-main">
                                            {postInfo.category ?
                                                <div className="blog-feed-card-category"><span>{postInfo.category.name}</span></div> :
                                                <div className="blog-feed-card-category"><span>{"#General"}</span></div>
                                            }
                                            <h1 className="page-heading-title">{postInfo.title}</h1>
                                            <div className="author-bio">
                                                <div className="author-bio-avatar">
                                                    <img className="author-bio-image" src="../images/me.jpeg" />
                                                </div>
                                                <p className="page-heading-byline">
                                                    <a href={`/about`}>{postInfo.author.name}</a>
                                                </p>
                                                <p className="page-heading-byline">|</p>
                                                <p className="page-heading-byline">{postInfo.date}</p>
                                            </div>
                                        </div>
                                        <div className="page-heading-side">
                                            <div className="share-button" onClick={() => handlePostShare()}><span>{shareBtnText.toUpperCase()}</span></div>
                                        </div>
                                    </div>
                                    : isPage ?
                                        <div className="page-heading">
                                            <div className="page-heading-main">
                                                <h1 className="page-heading-title">{pageInfo.title}</h1>
                                                <p className="page-heading-byline">{pageInfo.byline}</p>
                                                <div className="nav-subscribe gradient-text">
                                                    <a className="" href="#subscribe-form">Subsribe to the Newsletter ➔</a>
                                                </div>
                                            </div>
                                        </div>
                                        : null
                            }

                        </header>
                    </div>
                </div>
                <main>
                    <div className="container">
                        {/* All the main content (posts and pagination) gets inserted here, index.js, post.js */}
                        {children}

                        <SubscriptionForm />

                        <footer className="footer">
                            <div className="footer-item">
                                <Link to="/">{site.title}</Link> © {new Date().getFullYear()}
                            </div>

                            <div className="footer-item">
                                Designed by <a href="https://twitter.com/LuluNwenyi"> Lulu Nwenyi</a>
                            </div>

                            <div className="footer-item">
                                Created by <a href="https://twitter.com/_MsLinda"> Linda Ikechukwu</a>
                            </div>

                            <div className="footer-item">
                                Built with Ghost & Gatsby
                            </div>
                        </footer>

                    </div>
                </main>

                {/* The main header section on top of the screen */}
                {/* <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
                        <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/">
                                        {site.logo ?
                                            <img className="site-logo" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                    </Link>
                                </div>
                                <div className="site-mast-right">
                                    {site.twitter && <a href={twitterUrl} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                    {site.facebook && <a href={facebookUrl} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                                    <a className="site-nav-item" href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`} target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                                </div>
                            </div>
                            {isHome ?:
                                null}
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    
                                    <Navigation data={site.navigation} navClass="site-nav-item" />
                                </div>
                                <div className="site-nav-right">
                                    <Link className="site-nav-button" to="/about">About</Link>
                                </div>
                            </nav>
                        </div>
                    </header>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js 
                        {children}
                    </main>

                </div>

                <div className="viewport-bottom">
                    <SubscriptionForm />
                    {/* The footer at the very bottom of the screen 
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © {new Date().getFullYear()}
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                            </div>
                        </div>
                    </footer>

                </div>*/}
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { Link } from 'gatsby'
import { MetaData } from '../components/common/meta'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location, pageContext }) => {
    const post = data.ghostPost;

    //For the previous and next blog post link
    const prev = pageContext.prev ?
        {
            url: `/${pageContext.prev.slug}/`,
            title: pageContext.prev.title,
            featureImage: pageContext.prev.feature_image,
            excerpt: pageContext.prev.excerpt
        }
        : null;

    const next = pageContext.next
        ? {
            url: `/${pageContext.next.slug}/`,
            title: pageContext.next.title,
            featureImage: pageContext.next.feature_image,
            excerpt: pageContext.next.excerpt
        }
        : null

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        {post.feature_image ?
                            <figure className="post-feature-image">
                                <img src={post.feature_image} alt={post.title} />
                            </figure> : null}
                        <section className="post-author-info">
                            <div className="post-card-footer-left">
                                <div className="post-card-avatar">
                                    {post.primary_author.profile_image ?
                                        <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name} /> :
                                        <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name} />
                                    }
                                </div>
                                <span><a href={`https://twitter.com/${post.primary_author.twitter}`}>{post.primary_author.name}</a></span>
                            </div>
                        </section>
                        <section className="post-full-content">
                            <h1 className="content-title">{post.title}</h1>

                            {/* The main post content */}
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />

                            <div className="post-share">
                                <div className="post-share-content">
                                    <div>Share:</div>
                                    <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${post.url}`}
                                        className="post-share-button" target="_blank" rel="noopener" aria-label="Twitter">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${post.url}`}
                                        className="post-share-button" target="_blank" rel="noopener" aria-label="Facebook">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </a>
                                </div>
                            </div>
                        </section>
                    </article>

                    {(prev || next) && (
                        <section>
                            <h2>You may also want to read: </h2>
                            <div className="post-more-articles">

                                {prev && (
                                    <div>
                                        <h3>Previous: </h3>
                                        <Link to={prev.url} className="post-card">
                                            <header className="post-card-header">
                                                {prev.featureImage &&
                                                    <div className="post-card-image" style={{
                                                        backgroundImage: `url(${prev.featureImage})`,
                                                    }}></div>}
                                                <h2 className="post-card-title">{prev.title}</h2>
                                            </header>
                                            <section className="post-card-excerpt">{prev.excerpt}</section>
                                        </Link>
                                    </div>
                                )}


                                {next && (
                                    <div>
                                        <h3>Next: </h3>
                                        <Link to={next.url} className="post-card">
                                            <header className="post-card-header">
                                                {next.featureImage &&
                                                    <div className="post-card-image" style={{
                                                        backgroundImage: `url(${next.featureImage})`,
                                                    }}></div>}
                                                <h2 className="post-card-title">{next.title}</h2>
                                            </header>
                                            <section className="post-card-excerpt">{next.excerpt}</section>
                                        </Link>
                                    </div>
                                )}



                            </div>
                        </section>
                    )}


                </div>

            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`

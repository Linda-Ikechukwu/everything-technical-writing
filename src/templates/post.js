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
const PostHeaderContent = () => {

}

const Post = ({ data, location, pageContext }) => {
    const post = data.ghostPost;
    console.log(post)
    //For the Page header Info
    const postInfo = {
        Title: post.title,
        Date: post.created_at_pretty,
        Category: post.primary_tag,
        Author: post.primary_author,
    }
    

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
            <Layout isBlog={true} postInfo={postInfo}>
                <div>
                    <article className="content">
                        {post.feature_image ?
                            <figure className="post-feature-image">
                                <img src={post.feature_image} alt={post.title} />
                            </figure> 
                        : null}
                        
                        <section className="post-full-content">
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
                            <h2>More articles you might like: </h2>
                            <div className="post-more-articles">

                                {prev && (
                                    <div>
                                        <h3>Previous: </h3>
                                        <Link to={prev.url} className="blog-feed-card">
                                            <h2 className="blog-feed-card-title">{post.title}</h2>
                                        </Link>
                                    </div>
                                )}

                                {next && (
                                    <div>
                                        <h3>Next: </h3>
                                        <Link to={next.url} className="blog-feed-card">
                                            <h2 className="blog-feed-card-title">{post.title}</h2>
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

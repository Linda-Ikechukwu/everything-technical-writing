import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { Link } from 'gatsby'
import { MetaData } from '../components/common/meta'
import { useEffect } from 'react'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/

const Post = ({ data, location, pageContext }) => {
    const post = data.ghostPost;
    console.log(post)

    //For the Page header Info
    const postInfo = {
        title: post.title,
        date: post.created_at_pretty,
        category: post.primary_tag,
        author: post.primary_author,
        url: post.url,
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

    useEffect(() => {
        let links = document.querySelectorAll('article a');
        links.forEach((link) => {
            link.setAttribute('target', '_blank');
            console.log(link);
        })
    })


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
                            <figure className="content-feature-image">
                                <img src={post.feature_image} alt={post.title} />
                            </figure>
                            : null}

                        <section className="content-full-content">
                            {/* The main post content */}
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>

                        <section className="content-footer">
                            <p>If you found this article helpful, here are a few ways you can support me:
                               <ul>
                                  <li>
                                   <span className="gradient-text">
                                    <a href="https://www.buymeacoffee.com/lindaikechukwu" target="_blank">Buy me a coffee </a> </span>
                                to help keep this site running.
                                  </li>
                                  <li>
                                    <span className="gradient-text">
                                    <a href="https://twitter.com/techwriting_" target="_blank">Follow us on Twitter </a></span> 
                                     for more technical writing, technical content marketing, and developer advocacy insights.
                                 </li>
                                 <li><span className="gradient-text">
                                         <a href="#subscribe-form">Subscribe to the newsletter below </a></span> 
                                         to receive more content like this directly in your inbox. 
                                </li>
                               </ul>
                            </p>
                        </section>
                    </article>

                    {(prev || next) && (
                        <section>
                            <h2>More articles you might like: </h2>
                            <div className="more-articles">

                                {prev && (
                                    <div>
                                        <h3>Previous: </h3>
                                        <Link to={prev.url} className="blog-feed-card">
                                            <h2 className="blog-feed-card-title">{prev.title}</h2>
                                        </Link>
                                    </div>
                                )}

                                {next && (
                                    <div>
                                        <h3>Next: </h3>
                                        <Link to={next.url} className="blog-feed-card">
                                            <h2 className="blog-feed-card-title">{next.title}</h2>
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

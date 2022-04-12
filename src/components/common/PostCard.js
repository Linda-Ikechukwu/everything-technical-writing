import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    console.log(post.primary_tag)
    const tagUrl = `/tag/${post.primary_tag.slug}/`

    return (
        <div className="blog-feed-card">
            {/* {post.feature_image &&
                    <div className="blog-feed-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}>
                    </div>
                } */}
            <Link to={tagUrl}>
                {post.primary_tag ?
                    <div className="blog-feed-card-category"><span>{`#` + post.primary_tag.name}</span></div> :
                    <div className="blog-feed-card-category"><span>{"#Introductory"}</span></div>
                }
            </Link>
            <Link to={url}><h2 className="blog-feed-card-title">{post.title}</h2></Link>

        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard

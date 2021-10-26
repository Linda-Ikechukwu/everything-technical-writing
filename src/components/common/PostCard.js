import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


const PostCard = ({ post }) => {
    const url = `/${post.slug}/`

    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {post.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></div>}
                {post.featured && <span>Featured</span>}
                <h2 className="post-card-title">{post.title}</h2>
            </header>
        </Link>
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

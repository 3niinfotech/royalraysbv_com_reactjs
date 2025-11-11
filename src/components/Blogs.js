import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchBlogData, generateSlug } from '../utils/blogDataFetcher';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blogs.css';

function Blogs() {
    const [blogPostsData, setBlogPostsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadBlogData = async () => {
            try {
                setLoading(true);
                const data = await fetchBlogData();
                setBlogPostsData(data || []);
            } catch (err) {
                console.error('Failed to load blog data:', err);
                setError(err.message || 'Failed to load blog posts');
                setBlogPostsData([]);
            } finally {
                setLoading(false);
            }
        };

        loadBlogData();
    }, []);

    if (loading) {
        return (
            <div className="blog-page text-center py-5">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading blog posts...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="blog-page text-center py-5">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    if (!blogPostsData || blogPostsData.length === 0) {
        return (
            <div className="blog-page text-center py-5">
                <div className="alert alert-info" role="alert">
                    No blog posts found.
                </div>
            </div>
        );
    }

    return (
        <div className="blog-page">
            <div className="container_1 blog-main-container">
                <div className="row">
                    {blogPostsData.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            className="col-lg-4 col-md-6 mb-4"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <div className="blog-card">
                                <div className="blog-image-container">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="blog-image"
                                        onError={(e) => {
                                            e.target.src = '/fallback-image.jpg';
                                        }}
                                    />
                                    <div className="blog-category-tag">{post.category}</div>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span className="blog-date">{post.date}</span>
                                        <span className="blog-read-time">{post.readTime}</span>
                                    </div>
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <div className="blog-footer">
                                        <span className="blog-author">By {post.author?.name || post.author}</span>
                                        <Link to={`/blog/${generateSlug(post.title)}`} className="learn-more-btn">
                                            Read Article <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
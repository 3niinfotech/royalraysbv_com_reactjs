import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchBlogPost, getRelatedPosts } from '../utils/blogDataFetcher';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogDetail.css';

function BlogDetail() {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        setLoading(true);
        const post = await fetchBlogPost(id);

        if (!post) {
          throw new Error('Blog post not found');
        }

        setBlogPost(post);

        if (post && post.relatedPosts) {
          const related = await getRelatedPosts(post);
          setRelatedPosts(related);
        }
      } catch (err) {
        setError(err.message || 'Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [id]);

  if (loading) {
    return (
      <div className="blog-detail-page">
        <div className="loading-wrapper">
          <div className="loading-content">
            <div className="spinner"></div>
            <p>Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="blog-detail-page">
        <div className="not-found-wrapper">
          <div className="not-found-content">
            <div className="not-found-icon">📄</div>
            <h2>{error || 'Blog post not found'}</h2>
            <Link to="/blog" className="btn-back">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container_1 blog-detail-page">
      <div className=" py-4 py-md-5">
        <div className="row gx-4 gx-lg-5">
          {/* Main Content */}
          <motion.div
            className="col-lg-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <article className="post-content bg-white   rounded shadow-sm">
              <header className="mb-3 mb-md-4">
                <motion.h1
                  className="mb-2 mb-md-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {blogPost.title}
                </motion.h1>

                <div className="post-meta d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 gap-md-3">
                  <div className="author-info d-flex align-items-center gap-2 gap-md-3">
                    <img
                      src={blogPost.author.image}
                      alt={blogPost.author.name}
                      className="author-avatar rounded-circle"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div>
                      <p className="author-name mb-0 mb-md-1 fw-semibold">By {blogPost.author.name}</p>
                      <p className="mb-0 text-muted small">{blogPost.date} • {blogPost.readTime}</p>
                    </div>
                  </div>

                  <span className="category-badge text-white px-2 px-md-3 py-1 rounded-pill small ms-md-auto mt-2 mt-md-0">
                    {blogPost.category}
                  </span>
                </div>
              </header>

              {/* Main Featured Image */}
              {blogPost.image && (
                <motion.div
                  className="main-featured-image mb-3 mb-md-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="img-fluid w-100 rounded shadow"
                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = '/fallback-image.jpg';
                      e.target.style.objectFit = 'contain';
                      e.target.style.padding = '1rem';
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                  />
                </motion.div>
              )}

              <div
                className="article-content mt-3 mt-md-4"
                style={{ lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </article>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="col-lg-4 mt-4 mt-lg-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="sidebar-sticky-wrapper">
              {/* Author Card */}
              <motion.div className="sidebar-card mb-3 mb-md-4" whileHover={{ y: -5 }}>
                <div className="sidebar-card-header">
                  <h4 className="mb-0">About the Author</h4>
                </div>
                <div className="sidebar-card-body">
                  <div className="author-profile text-center">
                    <img
                      src={blogPost.author.image}
                      alt={blogPost.author.name}
                      className="author-avatar rounded-circle mb-2 mb-md-3"
                      style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = '/fallback-avatar.jpg';
                        e.target.style.objectFit = 'contain';
                      }}
                    />
                    <h5 className="author-name mb-1 mb-md-2">{blogPost.author.name}</h5>
                    <p className="author-bio text-muted mb-0 small">{blogPost.author.bio}</p>
                  </div>
                </div>
              </motion.div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <motion.div className="sidebar-card" whileHover={{ y: -5 }}>
                  <div className="sidebar-card-header">
                    <h4 className="mb-0">Related Articles</h4>
                  </div>
                  <div className="sidebar-card-body p-2 p-md-3">
                    <div className="related-posts">
                      {relatedPosts.map((post) => (
                        <motion.div
                          key={post.id}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="mb-2 mb-md-3 pb-2 pb-md-3 border-bottom"
                        >
                          <Link
                            to={`/blog/${post.id}`}
                            className="related-post text-decoration-none text-dark"
                          >
                            <div className="d-flex align-items-center gap-2 gap-md-3">
                              {post.image && (
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="rounded"
                                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                  onError={(e) => {
                                    e.target.src = '/fallback-thumbnail.jpg';
                                    e.target.style.objectFit = 'contain';
                                    e.target.style.padding = '0.3rem';
                                    e.target.style.backgroundColor = '#f8f9fa';
                                  }}
                                />
                              )}
                              <div className="related-article-info flex-grow-1">
                                <h6 className="related-article-title fw-semibold mb-0 mb-md-1">
                                  {post.title}
                                </h6>
                                <div className="related-article-meta text-muted small">
                                  <span>{post.date}</span> • <span>{post.readTime}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
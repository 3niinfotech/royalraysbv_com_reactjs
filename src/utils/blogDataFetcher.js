/**
 * Blog Data Fetcher Utility
 * Fetches blog data from blogPosts.txt file
 * This allows editing blog content after build without rebuilding the app
 */

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache
let cachedData = null;
let cacheTimestamp = 0;

/**
 * Generates a URL-friendly slug from a title
 * @param {string} title - Blog post title
 * @returns {string} URL-friendly slug
 */
export const generateSlug = (title) => {
  if (!title) return '';
  // Take only the main title part (before colon if present)
  const mainTitle = title.split(':')[0].trim();
  // Convert to title case and replace spaces with hyphens
  return mainTitle
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('-')
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Fetches blog data from blogPosts.txt
 * @returns {Promise<Array>} Array of blog posts
 */
export const fetchBlogData = async () => {
  try {
    // Check if we have valid cached data
    const now = Date.now();
    if (cachedData && (now - cacheTimestamp) < CACHE_DURATION) {
      return cachedData;
    }

    // Add cache-busting parameter to ensure fresh data
    const cacheBuster = `?v=${now}`;
    const response = await fetch(`/blogPosts.txt${cacheBuster}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog data: ${response.status} ${response.statusText}`);
    }

    const textData = await response.text();
    
    // Parse JSON data
    const blogData = JSON.parse(textData);
    
    // Validate that we have an array
    if (!Array.isArray(blogData)) {
      throw new Error('Blog data is not in expected format');
    }

    // Cache the data
    cachedData = blogData;
    cacheTimestamp = now;

    return blogData;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    
    // Return fallback data or empty array
    return [];
  }
};

/**
 * Fetches a specific blog post by slug
 * @param {string} slug - Blog post slug
 * @returns {Promise<Object|null>} Blog post object or null if not found
 */
export const fetchBlogPost = async (slug) => {
  try {
    const blogData = await fetchBlogData();
    // Find post by matching slug generated from title
    const post = blogData.find(p => {
      const postSlug = generateSlug(p.title);
      return postSlug === slug;
    });
    return post || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

/**
 * Clears the cache to force fresh data fetch
 */
export const clearBlogCache = () => {
  cachedData = null;
  cacheTimestamp = 0;
};

/**
 * Gets related posts for a given blog post
 * @param {Object} post - Blog post object
 * @returns {Promise<Array>} Array of related blog posts
 */
export const getRelatedPosts = async (post) => {
  try {
    if (!post || !post.relatedPosts || !Array.isArray(post.relatedPosts)) {
      return [];
    }

    const blogData = await fetchBlogData();
    const related = post.relatedPosts
      .map(relatedId => blogData.find(p => p.id === relatedId))
      .filter(Boolean);

    return related;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
};

export default {
  fetchBlogData,
  fetchBlogPost,
  clearBlogCache,
  getRelatedPosts,
  generateSlug
};


import React from 'react';
import './InstagramSection.css'; // Ensure to create and import your custom styles

const InstagramSection = () => {
  const posts = [
    { id: 1, imageUrl: '/path/to/image1.jpg', shopLink: '/shop-link-1' },
    { id: 2, imageUrl: '/path/to/image2.jpg', shopLink: '/shop-link-2' },
    // Add more posts as needed
  ];

  return (
    <div className="instagram-gallery">
      <h2>Shop Our Instagram</h2>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post">
            <img src={post.imageUrl} alt="Instagram post" />
            <a href={post.shopLink} className="shop-button">Shop</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramSection;

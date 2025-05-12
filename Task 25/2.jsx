import React, { useState, useEffect } from 'react';

const FetchData = () => {
  // State to store fetched post data, loading state, and any error message
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetching data when the component mounts using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        // Parse the JSON data from the response
        const data = await response.json();
        setPost(data); // Update the state with the fetched data
      } catch (err) {
        setError('Failed to fetch data'); // Set error message if any issue occurs
      } finally {
        setLoading(false); // Set loading to false after fetching or on error
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array ensures this runs once on mount

  // Show loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if there's an issue fetching data
  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  // Display the fetched data once it is loaded
  return (
    <div style={{ padding: '20px' }}>
      <h2>Post Details</h2>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Body:</strong> {post.body}</p>
    </div>
  );
};

export default FetchData;

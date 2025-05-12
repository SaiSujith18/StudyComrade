import React, { Component } from 'react';

class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],       // To store the posts data
      loading: true,   // To track loading state
      error: ''        // To store any error message
    };
  }

  // Fetch data when the component mounts
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      // Making an API call
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse the JSON data
      const data = await response.json();

      // Set the first 5 posts in state
      this.setState({
        posts: data.slice(0, 5),
        loading: false
      });
    } catch (error) {
      // If an error occurs, update the state with the error message
      this.setState({
        error: error.message,
        loading: false
      });
    }
  };

  render() {
    const { posts, loading, error } = this.state;

    // Show loading message
    if (loading) {
      return <div>Loading...</div>;
    }

    // Show error message if an error occurs
    if (error) {
      return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h2>Post List</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '10px' }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchData;

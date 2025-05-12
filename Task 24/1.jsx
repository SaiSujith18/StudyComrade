import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      dob: '',
      contact: '',
      email: '',
      password: '',
      submitted: false,
      error: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: '', submitted: false });
  };

  validateForm = () => {
    const { name, age, dob, contact, email, password } = this.state;
    if (!name || !age || !dob || !contact || !email || !password) {
      this.setState({ error: 'Please fill in all fields.' });
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ submitted: true, error: '' });
    }
  };

  render() {
    const { name, age, dob, contact, email, password, submitted, error } = this.state;

    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>Signup Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" /><br /><br />
          <input type="number" name="age" value={age} onChange={this.handleChange} placeholder="Age" /><br /><br />
          <input type="date" name="dob" value={dob} onChange={this.handleChange} placeholder="DOB" /><br /><br />
          <input type="text" name="contact" value={contact} onChange={this.handleChange} placeholder="Contact Number" /><br /><br />
          <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" /><br /><br />
          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" /><br /><br />
          <button type="submit">Submit</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {submitted && <p style={{ color: 'green' }}>✅ Form is submitted</p>}
      </div>
    );
  }
}

export default SignupForm;

import React from 'react';

const NotFoundError = () => {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '6rem',
    color: '#dc3545',
    marginBottom: '10px',
    fontWeight: 'bold',
    overflow:'hidden'
  };

  const messageStyle = {
    fontSize: '1.5rem',
    color: '#343a40',
        overflow:'hidden'

  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404!</h1>
      <h5 style={messageStyle}>Page Not Found</h5>
    </div>
  );
};

export default NotFoundError;

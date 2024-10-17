import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
    defer; // Replace with the actual script URL
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once after component mounts

  return (
    <div>
      <h1>My React Component</h1>
    </div>
  );
};

export default MyComponent;

import React, { useEffect } from 'react';

const TurnstileComponent = () => {
  useEffect(() => {
    // Define the callback that would normally be assigned to window.onload
    window.onloadTurnstileCallback = function () {
      turnstile.render("#example-container", {
        sitekey: "<0x4AAAAAAAxk-WeCk1XKTTad>",
        callback: function (token) {
          console.log(`Challenge Success ${token}`);
        },
      });
    };

    // Trigger the callback manually if it's needed immediately after the component mounts
    if (window.onloadTurnstileCallback) {
      window.onloadTurnstileCallback();
    }
  }, []); // Empty dependency array ensures this runs only once after component mounts

  return <div id="example-container"></div>;
};

export default TurnstileComponent;

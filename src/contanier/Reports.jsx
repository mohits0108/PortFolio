import React, { useEffect } from 'react';

const Reports = () => {
  useEffect(() => {
    window.location.reload();
  }, []); // The empty dependency array ensures it runs only once when the component mounts

  return (
    <div>
      {/* Your content goes here */}
    </div>
  );
};

export default Reports;


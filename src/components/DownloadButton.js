import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    
    const fileUrl = 'MohitLatestResume.pdf';

   
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'MohitLatestResume.pdf';

    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download PDF
    </button>
  );
};

export default DownloadButton;
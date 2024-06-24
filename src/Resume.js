import React from 'react';

const ResumePage = () => {
  const handleDownloadResume = () => {
    // Replace 'path/to/your/resume.pdf' with the path to your resume file
    const downloadLink = document.createElement('a');
    downloadLink.href = 'path/to/your/resume.pdf';
    downloadLink.download = 'resume.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <h2>Resume</h2>
      <button onClick={handleDownloadResume}>Download Resume</button>
    </div>
  );
};

export default ResumePage;


import React from 'react';
import CsvReader from '../csvreader';
const CSV_Upload = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <p> You can upload your CSV File here  </p>
      <div> <CsvReader /> </div>
    </div>
  );
};
  
export default CSV_Upload;
import React from 'react';

export default function Maps() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%' }}>
      <iframe
        src="https://storage.googleapis.com/maps-solutions-vf3z0agced/neighborhood-discovery/0gvl/neighborhood-discovery.html"
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
        loading="lazy"
        
      ></iframe>
    </div>
  );
}

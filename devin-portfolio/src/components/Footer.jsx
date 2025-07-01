import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: '#eee', padding: '1rem', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} Devin Rost. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

import React from "react";
import ReactDom from "react-dom";

function Footer() {
  return (
    <div>
      <footer>
        <p className="footer"> Copyright {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
}

export default Footer;

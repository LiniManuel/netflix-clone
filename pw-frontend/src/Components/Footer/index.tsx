import React from "react";
import { AiFillHeart } from "react-icons/ai";

import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <footer>
        <p>
          Created by
          <AiFillHeart className="heartIcon" />
          <a href="https://github.com/LiniManuel" target="_blank">
            Manuel Lini
          </a>
        </p>
      </footer>
    </footer>
  );
};

export default Footer;

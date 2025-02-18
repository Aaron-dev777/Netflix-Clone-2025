import React from "react";
import styles from "./footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className={styles.footer_outer}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_icon}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className={styles.footer_list}>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Reference</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms Of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.service_code}>
          <p>Service Code</p>
        </div>
        <div className={styles.copy_write}>
          <p>&copy; 1997-2025 Netflix, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

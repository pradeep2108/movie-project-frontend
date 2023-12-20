import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./FooterDesign.css";

const FooterDesign = () => {
  return (
    <div className="footer-container">
      <div className="upper-footer">
        <div className="footer-logo">
          <img
            src={`${process.env.PUBLIC_URL}/reel-reivew-logo.png`}
            alt="logo"
            width={200}
            height={50}
          />
          <p className="footer-desc">
            Reel Review is the world's most popular and authoritative source for
            movie, TV and celebrity content.{" "}
          </p>
        </div>
        <div className="menu-footer">
          <a
            href="https://www.imdb.com/privacy?ref_=ft_pvc"
            className="menu-footer-link"
          >
            About Us
          </a>
          <a
            href="https://advertising.amazon.com/resources/ad-specs/imdb/"
            className="menu-footer-link"
          >
            Advertising
          </a>
          <a
            href="https://www.amazon.jobs/en/teams/imdb"
            className="menu-footer-link"
          >
            Jobs
          </a>
          <a href="https://help.imdb.com/imdb" className="menu-footer-link">
            Help
          </a>
        </div>
        <div className="menu-button-wrapper">
          <b className="button-info">Sign in for more access</b>
          <Link to="/signup">
            <button class="button-85">Sign Up</button>
          </Link>
        </div>
      </div>

      <div className="rectangle">
        <b className="follow-us">Follow Us</b>
        <div className="icons">
          <a href="https://www.facebook.com/imdb">
            <img src={`${process.env.PUBLIC_URL}/fb.png`}></img>
          </a>
          <a href="https://www.instagram.com/imdb">
            <img src={`${process.env.PUBLIC_URL}/insta.png`}></img>
          </a>
          <a href="https://twitter.com/imdb">
            <img src={`${process.env.PUBLIC_URL}/tweet.png`}></img>
          </a>
          <a href="https://www.youtube.com/imdb">
            <img src={`${process.env.PUBLIC_URL}/youtube.png`}></img>
          </a>
        </div>
      </div>
      <div className="copyrights-container">
        <p className="copyrights">© 2021 All Rights Reserved</p>
        <div className="footer-policy">
          <a href="https://www.imdb.com/privacy?ref_=ft_pvc">
            <p className="policy">Privacy Policy</p>
          </a>
          <a href="https://www.imdb.com/conditions?ref_=ft_cou">
            <p className="policy">Conditions of Use</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterDesign;

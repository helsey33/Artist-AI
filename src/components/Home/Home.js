/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";

const img1 = require("./../../assets/gallery/1.jpg"),
  img2 = require("./../../assets/gallery/2.jpg"),
  img3 = require("./../../assets/gallery/3.jpg"),
  img4 = require("./../../assets/gallery/4.jpg"),
  img5 = require("./../../assets/gallery/5.jpg"),
  img6 = require("./../../assets/gallery/6.jpg"),
  img7 = require("./../../assets/gallery/7.jpg"),
  img13 = require("./../../assets/gallery/13.jpg"),
  fb = require("./../../assets/svg/facebook.svg"),
  mg = require("./../../assets/svg/messenger.svg"),
  ln = require("./../../assets/svg/linkedin.svg");

export default function Home() {
  return (
    <div className="main">
      <div className="mobile">
        <h4>
          Sorry, but we are not available on phones as of now. Please open in a
          desktop.
        </h4>
      </div>
      <NavBar />
      <section id="landing">
        <div className="container">
          <div className="content">
            <div className="heading">AI ARTIST</div>
            <div className="sub">
              An AI to provide illustrations to your written content
            </div>
            <Link to="/demo" className="btn">
              <div className="button">DEMO</div>
            </Link>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="about_content">
            <div className="image" />
            <div className="content">
              <div className="head">Summarize</div>
              <div className="details">
                Whether you are a seasoned content writer or a casual blogger,
                our AI summarizes and understands the content that you have
                written.
              </div>
            </div>
          </div>
          <div className="about_content">
            <div className="content">
              <div className="head">Illustrate</div>
              <div className="details">
                We believe that great content needs equally great illustrations
                to bring your vision into life. Our AI provides illustrations
                and images to make your story more compelling.
              </div>
            </div>
            <div className="image" />
          </div>
          <div className="about_content">
            <div className="image" />
            <div className="content">
              <div className="head">Stylize</div>
              <div className="details">
                Our AI is no ordinary artist. Tell it to illustrate your content
                with your favourite artist’s style and it learns to do so.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        <div className="title">GALLERY</div>
        <div className="container">
          <div className="img_container1">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className="img_container2">
            <img src={img7} className="big_img" alt="" />
            <img src={img4} alt="" />
          </div>
          <div className="img_container3">
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img13} alt="" />
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="title">Contact Us</div>
        <div className="container">
          <a href="https://www.facebook.com/aiartist.io/" target="_blank">
            <img src={fb} alt="" />
          </a>
          <a href="https://www.messenger.com/t/aiartist.io" target="_blank">
            <img src={mg} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/aiartist/" target="_blank">
            <img src={ln} alt="" />
          </a>
        </div>
      </section>
      <div id="footer">
        © {new Date().getFullYear()} AiArtist. All rights reserved.
      </div>
    </div>
  );
}

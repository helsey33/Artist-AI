import React, { Component } from "react";
import axios from "axios";
import anime from "animejs";

const spinner = require("./../../assets/svg/spinner.svg");

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      loading: false,
      error: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.text === "") {
      this.setState({
        error: true
      });
      return;
    }
    this.setState({
      loading: true,
      error: false
    });
    const url =
      "https://3tsxy58s1l.execute-api.us-east-1.amazonaws.com/dev_ver2_april_2018/analyze-v3";
    const payload = {
      text: this.state.text
    };
    axios.post(url, payload).then(res => {
      this.setState({
        loading: false
      });
      this.animateDemo(res);
    });
  }

  animateDemo = res => {
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: "#demo .title,#demo .button,#demo #text",
        opacity: 0,
        scale: 0.9,
        delay: anime.stagger(50),
        duration: 500,
        update: anim => {
          if (Math.round(anim.progress) === 50) {
            this.props.history.push({
              pathname: "/summary",
              state: {
                images: res.data[0].image_links,
                tags: res.data[0].tags,
                story: this.state.text
              }
            });
          }
        }
      });
  };

  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div id="demo">
          <div className="title">Enter your story</div>
          <form className="container" onSubmit={this.onFormSubmit}>
            <textarea
              name="text"
              id="text"
              placeholder="Enter your story"
              onChange={this.onchange}
            />
            {this.state.error && (
              <label htmlFor="text">Please enter your story</label>
            )}
            {this.state.loading ? (
              <img src={spinner} alt="" style={{ width: 150 }} />
            ) : (
              <input type="submit" value="SUBMIT" className="button" />
            )}
          </form>
        </div>
      </div>
    );
  }
}

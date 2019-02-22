import React, { Component } from "react";
import Masonry from "react-masonry-component";
import axios from "axios";
import anime from "animejs";

import Stylize from "./Stylize";

const spinner = require("./../../assets/svg/spinner.svg");

export default class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: "",
      images: [],
      story: "",
      loading: false,
      selectedImage: "",
      styledImage: null
    };
  }

  searchBoxChange = e => {
    this.setState({
      phrase: e.target.value
    });
  };

  componentDidMount = () => {
    anime({
      targets: "#summary,.story,#summary .searchBar",
      opacity: [0, 1],
      scale: [0.9, 1],
      easing: "easeOutExpo",
      duration: 500,
      delay: anime.stagger(50)
    });
    this.setState({
      images: this.props.location.state.images,
      story: this.props.location.state.story
    });
  };

  onPhraseSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const url =
      "https://3tsxy58s1l.execute-api.us-east-1.amazonaws.com/dev_ver3_may_1_2018/get-images-for-sentence";
    const payload = {
      text: this.state.phrase
    };
    axios.post(url, payload).then(res => {
      this.setState(prevState => ({
        images: res.data.image_links,
        loading: false
      }));
    });
  };

  onImageSelect = e => {
    const image = this.state.images.find(el => el.thumbnail === e.target.src);
    this.setState({ selectedImage: image });
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: "#stylize .backdrop",
        opacity: 1,
        duration: 500,
        top: 0,
        begin: () => {
          document.querySelector("#stylize").style.display = "block";
          document.querySelector("body").style.overflow = "hidden";
        }
      })
      .add(
        {
          targets: "#stylize .style_container",
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 800
        },
        "-=500"
      );
  };

  closeStylize = () => {
    this.setState({ selectedImage: "", styledImage: null });
    anime
      .timeline({
        easing: "easeOutExpo"
      })
      .add({
        targets: "#stylize .style_container",
        opacity: 0,
        scale: 0.8,
        duration: 500
      })
      .add(
        {
          targets: "#stylize .backdrop",
          opacity: 0,
          duration: 800,
          update: anim => {
            if (Math.round(anim.progress) === 50) {
              document.querySelector("#stylize").style.display = "none";
              document.querySelector("body").style.overflow = "auto";
            }
          }
        },
        "-=500"
      );
  };

  onStyleSelect = e => {
    this.setState({ loading: true });
    document.querySelectorAll("#stylize .styles_wrapper .style").forEach(el => {
      el.style.border = "none";
    });
    e.target.style.border = "3px solid #4285F4";
    const style = e.target.getAttribute("data-value");
    if (style === "original") {
      this.setState({ styledImage: null, loading: false });
      return;
    }
    const url =
      "https://3tsxy58s1l.execute-api.us-east-1.amazonaws.com/dev_ver3_may_1_2018/stylize";
    const payload = {
      style,
      image: this.state.selectedImage
    };
    axios.post(url, payload).then(res => {
      this.setState({ styledImage: res.data.image, loading: false });
    });
  };

  render() {
    const { story, images, selectedImage, loading, styledImage } = this.state;
    const masonryOptions = {
      transitionDuration: 0
    };
    const childElements = images.map(function(element) {
      return (
        <img
          src={element.thumbnail}
          alt=""
          key={element.thumbnail}
          onClick={this.onImageSelect}
        />
      );
    }, this);

    return (
      <div>
        <div id="summary">
          <div className="story">
            <div className="story_container">{story}</div>
          </div>
          <div className="image_select">
            <form className="searchBar" onSubmit={this.onPhraseSubmit}>
              <input
                type="text"
                id="phrase"
                placeholder="Search your own phrase"
                className="searchBox"
                onChange={this.searchBoxChange}
              />
              {this.state.loading ? (
                <img src={spinner} alt="" style={{ width: 50 }} />
              ) : (
                <input type="submit" className="button" value="SEARCH" />
              )}
            </form>
            <div className="label_wrapper">
              {this.props.location.state.tags.map(el => (
                <div className="label">{el}</div>
              ))}
            </div>
            <div className="img_container">
              <div className="title">Choose an image </div>
              <Masonry
                className={"my-gallery-class"}
                elementType={"div"}
                options={masonryOptions}
              >
                {childElements}
              </Masonry>
            </div>
          </div>
        </div>
        <div id="stylize">
          <div className="backdrop" onClick={this.closeStylize} />
          <Stylize
            image={selectedImage}
            loading={loading}
            styledImage={styledImage}
            onStyleSelect={this.onStyleSelect}
          />
        </div>
      </div>
    );
  }
}

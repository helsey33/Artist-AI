import React, { Component } from "react";

const spinner = require("./../../assets/svg/spinner.svg");

export default class Stylize extends Component {
  download = () => {
    const url = this.props.styledImage || this.props.image.full;
    window.open(url);
  };

  render() {
    const styles = [
      {
        value: "original",
        name: "Original",
        url: require("./../../assets/styles/original.jpg")
      },
      {
        value: "smooth_ride",
        name: "Smooth Ride",
        url: require("./../../assets/styles/smooth_ride.jpg")
      },
      {
        value: "oily_mcoilface",
        name: "Oily McOilface",
        url: require("./../../assets/styles/oily_mcoilface.jpg")
      },
      {
        value: "crafty_painting",
        name: "Crafty Painting",
        url: require("./../../assets/styles/crafty_painting.jpg")
      },
      {
        value: "bright_sand",
        name: "Bright Sand",
        url: require("./../../assets/styles/bright_sand.jpg")
      },
      {
        value: "dark_soul",
        name: "Dark Soul",
        url: require("./../../assets/styles/dark_soul.jpg")
      },
      {
        value: "gan_vogh",
        name: "Gan Vogh",
        url: require("./../../assets/styles/gan_vogh.jpg")
      },
      {
        value: "sunday",
        name: "Sunday",
        url: require("./../../assets/styles/sunday.jpg")
      }
    ];

    return (
      <div className="style_container">
        <div className="wrapper">
          <div className="styles">
            <div className="title">Choose a style</div>
            <div className="styles_wrapper">
              {styles.map(style => (
                <div
                  className="style"
                  key={style.value}
                  data-value={style.value}
                  onClick={this.props.onStyleSelect}
                >
                  <img src={style.url} alt={style.name} />
                  <figcaption>{style.name}</figcaption>
                </div>
              ))}
            </div>
          </div>
          <div className="img_container">
            {this.props.loading ? (
              <div className="spinner">
                <img src={spinner} alt="Loading" />
              </div>
            ) : (
              <img
                src={this.props.styledImage || this.props.image.full}
                alt=""
                className="main_img"
              />
            )}
            <div className="button" onClick={this.download}>
              DOWNLOAD
            </div>
          </div>
        </div>
      </div>
    );
  }
}

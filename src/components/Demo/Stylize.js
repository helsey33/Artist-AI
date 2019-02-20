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
        value: "purple_storm",
        name: "Purple Storm",
        url: require("./../../assets/styles/purple_storm.jpg")
      },
      {
        value: "yellow_collage",
        name: "Yellow Collage",
        url: require("./../../assets/styles/yellow_collage.jpg")
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
        value: "post_modern",
        name: "Post Modern",
        url: require("./../../assets/styles/post_modern.jpg")
      },
      {
        value: "spagetti_accident",
        name: "Spagetti Accident",
        url: require("./../../assets/styles/spagetti_accident.jpg")
      },
      {
        value: "creativity",
        name: "Creativity",
        url: require("./../../assets/styles/creativity.jpg")
      },
      {
        value: "bright_sand",
        name: "Bright Sand",
        url: require("./../../assets/styles/bright_sand.jpg")
      },
      {
        value: "blue_granite",
        name: "Blue Granite",
        url: require("./../../assets/styles/blue_granite.jpg")
      },
      {
        value: "cinnamon_rolls",
        name: "Cinnamon Rolls",
        url: require("./../../assets/styles/cinnamon_rolls.jpg")
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
        value: "purple_pond",
        name: "Purple Pond",
        url: require("./../../assets/styles/purple_pond.jpg")
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
              <img src={spinner} alt="Loading" className="spinner" />
            ) : (
              <img
                src={this.props.styledImage || this.props.image.full}
                alt=""
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

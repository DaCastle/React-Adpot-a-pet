import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  //equates to passing in 'props', and setting : const media = props.media
  //another instance of destructuring
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }
  handleIndexClick = event => {
    this.setState({
      // using coercion to convert strign to number
      active: +event.target.dataset.index
    });
  };
  render() {
    // destructuring
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

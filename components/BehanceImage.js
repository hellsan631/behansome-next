import React from "react";

class BehanceImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      index: 115,
      imageUrl: props.covers[115],
      imageStyle: {
        backgroundImage: `url('${props.covers[115]}')`
      }
    };
  }

  handleImageLoaded() {
    if (this.state.index === 115) {
      this.setState({
        loading: false,
        index: 215,
        imageUrl: this.props.covers[404],
        imageStyle: {
          backgroundImage: `url('${this.props.covers[115]}')`
        }
      });
    } else {
      this.setState({
        loading: false,
        index: 404,
        imageUrl: this.props.covers[404],
        imageStyle: {
          backgroundImage: `url('${this.props.covers[404]}')`
        }
      });
    }
    
  }

  render() {
    let imageComponent;

    if (this.props.visable) {
      imageComponent = (
        <div style={this.state.imageStyle} className="card-image">
          <img
            className="loading-image"
            src={this.state.imageUrl}
            onLoad={this.handleImageLoaded.bind(this)}
          />

          <style jsx>{`
            .card-image {
              width: 100%;
              padding-top: 100%;
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
              overflow: hidden;
            }
            
            .loading-image {
              width: 10px;
              height: 10px;
              opacity: 0;
            }
          `}</style>
        </div>
      )
    } else {
      imageComponent = (
        <div className="card-image">
          <style jsx>{`
            .card-image {
              width: 100%;
              padding-top: 100%;
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
              overflow: hidden;
            }
            
            .loading-image {
              width: 10px;
              height: 10px;
              opacity: 0;
            }
          `}</style>
        </div>
      )
    }

    return (
      <div>
        {imageComponent}

        <style jsx>{`
          .card-image {
            width: 100%;
            padding-top: 100%;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            overflow: hidden;
          }

          .loading-image {
            width: 10px;
            height: 10px;
            opacity: 0;
          }
        `}</style>
      </div>
    );
  }
}
export default BehanceImage;
import StarRatingComponent from "react-star-rating-component";
import React from "react";
class Star extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.props.changeRating(nextValue);
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div className="star">
        <StarRatingComponent
          className="starElement"
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

class NotEditStar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rate,
    };
  }
  render() {
    return (
      <div>
        <StarRatingComponent
          className="starElement"
          name="rate2"
          starCount={5}
          editing={false}
          value={this.props.rate}
        />
      </div>
    );
  }
}
export { NotEditStar, Star };

import React from "react";
import { Star, NotEditStar } from "./Rating";
import "./Rating.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      customerId: "",
      fullName: "",
      ownerId: "",
      date: "",
      feedback: "",
      rating: "",
    };
  }

  componentDidMount() {
    // this.setState({ ownerId: this.props.OwnerId });
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log(decoded);
    this.setState({ customerId: decoded.id, fullName: decoded.fullName });
    // console.log(decoded.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.OwnerId !== this.props.OwnerId) {
      this.setState({ ownerId: nextProps.OwnerId });
      axios
        .get(`http://localhost:5000/AllComents/${nextProps.OwnerId}`)
        .then((res) => {
          console.log(res);
          this.setState({
            comments: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  changeRating = (starRate) => {
    this.setState({ rating: starRate });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  cancelCourse = () => {
    document.getElementById("commentInput").value = "";
  };

  AddComment = (e) => {
    e.preventDefault();
    var newValue = {
      date: today,
      fullName: this.state.fullName,
      feedback: this.state.feedback,
      rating: this.state.rating,
    };
    var joined = this.state.comments.concat(newValue);
    this.setState({ comments: joined, feedback: "" });
    this.cancelCourse();
    axios
      .post("http://localhost:5000/comment", {
        customerId: this.state.customerId,
        fullName: this.state.fullName,
        ownerId: this.state.ownerId,
        feedback: this.state.feedback,
        rating: this.state.rating,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  render() {
    const { comments } = this.state;
    return (
      <div id="commentsDiv" className="row bootstrap">
        <div className="col-md-6 col-md-offset-2 col-sm-12">
          <div className="comment-wrapper">
            <div className="panel panel-info">
              <div className="panel-heading">
                Customers Opinions About the the resort
              </div>
              <div className="panel-body">
                <Star changeRating={this.changeRating} />
                <textarea
                  id="commentInput"
                  name="feedback"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="write a comment..."
                  rows="3"
                ></textarea>
                <br />
                <button
                  type="button"
                  className="btn btn-info pull-right"
                  onClick={this.AddComment}
                >
                  Post
                </button>
                <div className="clearfix"></div>
                <hr />
                <ul className="media-list">
                  {comments.map((comment, index) => (
                    <li className="media" key={index}>
                      <div className="media-body">
                        <strong className="text-success">
                          {comment.fullName}
                        </strong>
                        <span className="text-muted pull-right">
                          <small className="text-muted">{comment.date}</small>
                        </span>
                        <NotEditStar rate={comment.rating} />
                        <p className="commentmessage">{comment.feedback}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Comment;

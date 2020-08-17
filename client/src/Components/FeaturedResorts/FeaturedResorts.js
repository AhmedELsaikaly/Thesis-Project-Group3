//import used technologies
import React from "react";
//import CSS
import "./FeaturedResorts.css";
import { NotEditStar } from "../Rating&Feedback/Rating";
import axios from "axios";
//import used files

//create NavBar Compo
class FeaturedResorts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SortedOwners: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/sortedOwners")
      .then((res) => {
        this.setState({ SortedOwners: res.data.result });
      })
      .catch((err) => {
        console.log("ERROR from AXIOS =>", err);
      });
  }
  render() {
    return (
      <div className= "Featured">
        <div className="pack">
          <hr />
          <h1>Featured SeaSide</h1>
        </div>
        <section id="packages">
          {this.state.SortedOwners.map((element, index) => (
            <div className="box" key={index}>
              <div className="content">
                <div className="featuredElement">
                  <h2>{element.placeName}</h2>
                  <p>{element.area}</p>
                  <a href={`resort/${element._id}`}>Read More</a>
                  <NotEditStar rate={element.ratingAvg} />
                </div>
              </div>
              <img src={element.licensePhoto} />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

//export compo
export default FeaturedResorts;

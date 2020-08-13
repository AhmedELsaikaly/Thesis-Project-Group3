//import used technologies
import React from "react";

//import used css
import "./About.css";

//import used files
import Navbar from "../../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
//create About Compo
class About extends React.Component {
  render() {
    return (
      <div className="wrapper row2">
        <Navbar />
        <h1>ABOUT US</h1>
        <div id="container" className="clear">
          <div id="about-us" className="clear">
            <section id="about-intro" className="clear">
              {/* <h2>About Us</h2> */}
              <img
                src={
                  "https://ca.slack-edge.com/TTW205AAU-U011K4W18A2-7ba92b624e7a-512"
                } /*add the web site photo */
                /*add the photo for the site */ alt=""
              />
              <p>{/* here write the pargraph */}</p>
            </section>
            <section id="team">
              <h2>Our Team</h2>
              <ul className="clear">
                <li className="one_third">
                  <figure>
                    <img
                      src={
                        "https://ca.slack-edge.com/TTW205AAU-U011N78GG2X-009fff14b590-512"
                      }
                      /*add the photo of the team members, I will try to get them from the slack */ alt=""
                    />
                    <figcaption>
                      <p className="team_name">Khaled Abousheik</p>
                      <p className="team_title">Scrum Master</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure>
                    <img
                      src={
                        "https://ca.slack-edge.com/TTW205AAU-U011P6C7U2Z-33cb31e82b63-512"
                      }
                      /*add the photo of the team members, I will try to get them from the slack */ alt=""
                    />
                    <figcaption>
                      <p className="team_name">Ahmed ELsaikaly</p>
                      <p className="team_title">Full Stack Developer</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure>
                    <img
                      src={
                        "https://ca.slack-edge.com/TTW205AAU-U011P6C6X61-e76293a06e06-512"
                      } //*add the photo of the team members, I will try to get them from the slack */
                      alt=""
                    />
                    <figcaption>
                      <p className="team_name">Yousif Yasin</p>
                      <p className="team_title">Full Stack Developer </p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third first">
                  <figure>
                    <img
                      src={
                        "https://ca.slack-edge.com/TTW205AAU-U011P6C8RGV-6ec64c4497de-512"
                      } //*add the photo of the team members, I will try to get them from the slack */
                      alt=""
                    />
                    <figcaption>
                      <p className="team_name">Wael Abutakiya</p>
                      <p className="team_title">Full Stack Developer </p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third first">
                  <figure>
                    {" "}
                    <img
                      src={
                        "https://ca.slack-edge.com/TTW205AAU-U011K4W18A2-7ba92b624e7a-512"
                      }
                      /*add the photo of the team members, I will try to get them from the slack */ alt=""
                    />
                    <figcaption>
                      <p className="team_name">Mohammed AbuShaaban</p>
                      <p className="team_title">Full Stack Developer</p>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
//render About Compo
export { About };

//Check and vaildate

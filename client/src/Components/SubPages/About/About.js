//import used technologies
import React from "react";

//import used css
import "./About.css";

//import used files
import Navbar from "../../Navbar/Navbar.js";
import InternalNav from "./../../InternalNav/InternalNav";

import Footer from "../Footer/Footer.js";
import one from "./one.jpg";
//create About Compo
class About extends React.Component {
  render() {
    return (
      <div>
        {localStorage.usertoken !== undefined ? <InternalNav /> : <Navbar />}

        {/* <h1>ABOUT US</h1> */}
        <div>
          <div>
            <section id="about-intro" className="clear">
              <img
                src={one} /*add the web site photo */
                /*add the photo for the site */ alt=""
                class="circle circle1"
              />
              <p id="prag">
                Every great city deserves a truly great international hotel - a
                special place that reflects the importance and the beauty of its
                location with world-class luxury and the very finest service.
                Royal Arcade Five-Star Hotel, Colombo is delighted to welcome
                you to the enchanting capital of Sri Lanka - a precious jewel in
                the Indian Ocean, with a glittering cultural heritage and a
                long, proud history. The hotel benefits from a prime location by
                the sea that is in the heart of the business district and
                buzzing social hotspot. A personal tropical sanctuary that is
                for escaping the city, it offers some of the finest, modern
                accommodation in the country, with 200 luxurious guest rooms and
                suites. An exciting new dining and social scene has come to life
                around the hotel's outstanding group of restaurants and bars,
                and the exclusive Horizon Club Lounge is the largest of its kind
                in Colombo. The Spa presents 7 private rooms and a soothing
                selection of traditional Sri Lankan and Asian treatments and
                therapies. The spa is complemented by a state-of-the-art,
                24-hour Health Club and one of the largest outdoor swimming
                pools in Colombo. To meet the needs of Colombo's dynamic
                business community, Royal Arcade Five-Star Hotel, Colombo, is
                pleased to offer the largest and extensive hotel conference and
                event facilities in the region, which can cater to up to 2,000
                guests. Colombo is the gateway city to discovering the rich
                culture, wildlife, mountains and beaches that make Sri Lanka so
                unique. Royal Arcade Five-Star Hotel, Colombo, looks forward to
                welcoming you soon.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </p>
            </section>
            <section id="visionMission">
              <div class="vision">
                <h2>Our Vision</h2>
                <p>
                  To be the first choice for guests, colleagues, shareholders
                  and business partners.
                </p>
              </div>
              <div class="mission">
                <h2>Our Mission</h2>
                <p>
                  To delight our guests every time by creating engaging
                  experiences straight from our heart.
                </p>
              </div>
            </section>

            <h2>Our Team</h2>
            <div class="row">
              <div class="column">
                <div class="card">
                  <img
                    src="https://ca.slack-edge.com/TTW205AAU-U011N78GG2X-009fff14b590-512"
                    alt="Jane"
                  />
                  <div class="container">
                    <h2>Khaled Abousheikh</h2>
                    <p class="title">Screm Master</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p>
                      <button class="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img
                    src="https://ca.slack-edge.com/TTW205AAU-U011P6C8RGV-6ec64c4497de-512"
                    alt="Mike"
                  />
                  <div class="container">
                    <h2>Wael Taqia</h2>
                    <p class="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p>
                      <button class="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img
                    src="https://ca.slack-edge.com/TTW205AAU-U011P6C7U2Z-33cb31e82b63-512"
                    alt="Ahmad"
                  />
                  <div class="container">
                    <h2>Ahmad El Saikaly</h2>
                    <p class="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p>
                      <button class="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <img
                    src="https://ca.slack-edge.com/TTW205AAU-U011P6C6X61-e76293a06e06-512"
                    alt="Yousif"
                  />
                  <div class="container">
                    <h2>Yousef Yasin</h2>
                    <p class="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p>
                      <button class="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <img src="https://ca.slack-edge.com/TTW205AAU-U011K4W18A2-7ba92b624e7a-512" />
                  <div class="container">
                    <h2>Mohammed AbuShaaban</h2>
                    <p class="title">Full stack developer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p>
                      <button class="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}
//render About Compo
export { About };

//Check and vaildate

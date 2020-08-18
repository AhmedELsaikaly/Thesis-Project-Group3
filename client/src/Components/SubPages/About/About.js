//import used technologies
import React from "react";

//import used css
import "./About.css";

//import used files
import Navbar from "../../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import one from "./one.jpg";
//create About Compo
class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <h1>ABOUT US</h1> */}
        <div>
          <div>
            <section
              id="about-intro"
              className="clear"
              style={{
                marginBottom: "20%",
                marginRight: "5%",
                fontSize: "22px",
              }}
            >
              <img
                src={one} /*add the web site photo */
                /*add the photo for the site */ alt=""
                class="circle circle1"
              />
              <div>
                <p id="prag" style={{ fontWeight: "700" }}>
                  <br />
                  <br />
                  RahaApp is a simple booking application. Allows you to book a
                  beach facility suits your need and show services you would to
                  have during your sea trip.
                  <br /> It Helps You Stick to Your Desires, Customers could
                  track their Requirements Which Can Reveal best match Trip
                  Needs It Helps them Meet Your Enjoying their Trip Objectives.
                  Owners could display his facilities , services and track
                  reservations. A single page app that will allow customers to
                  explore beach facilities according to whatever circumstances
                  you want without using traditional ways of booking. We will
                  display all information, details , services and even photos
                  concerning beach facilities while allowing customers to search
                  for the best choice meet their desires . If you like our idea,
                  Please send us your feedback anytime you like.
                </p>
              </div>
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
                <h2>Our Team</h2>
              </div>
            </section>

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
                    <p>Khaled.abousheikh@gmail.com</p>
                    <p>
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        target="_blanck"
                      >
                        <button class="button">Contact</button>
                      </a>
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
                    <p class="title">Full stack developer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>waealtaqia20152729@gmail.com</p>
                    <p>
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        target="_blanck"
                      >
                        <button class="button">Contact</button>
                      </a>
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
                    <p class="title">Full stack developer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>ahmedelsaikaly@gmail.com</p>
                    <p>
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        target="_blanck"
                      >
                        <button class="button">Contact</button>
                      </a>
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
                    <p class="title">Full stack developer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>Yossefyasssen@gmail.com</p>
                    <p>
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        target="_blanck"
                      >
                        <button class="button">Contact</button>
                      </a>
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
                    <p>mohammad.d.h.2000@gmail.com</p>
                    <p>
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        target="_blanck"
                      >
                        <button class="button">Contact</button>
                      </a>
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

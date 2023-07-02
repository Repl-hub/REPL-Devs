import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import Navbar from "./Navbar";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import Comming from "./Comming";
import FeedBack from './FeedBack';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Lottie from "react-lottie";
import * as cycle from "./json/cycle-animation.json";
import * as success from "./json/success.json";
import Hackathron from "./Hackathron";
// import Ticket from "./Ticket.jsx";

const logo = "https://i.ibb.co/s6NCmyM/REPL.png";
const bird1 = "https://i.ibb.co/c1ncXZf/bird1.png";
const bird2 = "https://i.ibb.co/JnNY4Fy/bird2.png";
const forest = "https://i.ibb.co/1J7GkVV/forest.png";
const rocks = "https://i.ibb.co/jwDcS34/rocks.png";
const water = "https://i.ibb.co/bvGmqsp/water.png";
const sourav = "https://i.ibb.co/qkNwc4j/sourav-karmakar.jpg";
const argha = "https://i.ibb.co/Hrr4LwT/Arghadeep.jpg";
const sumit = "https://i.ibb.co/H2v7QRH/Sumit-srkr.jpg";
const pushpa = "https://i.ibb.co/chV28BZ/1613664803212.jpg";
const sudhnashu = "https://i.ibb.co/qrJ6P8y/sudhanshu.jpg";
const suman = "https://i.ibb.co/pnrj583/Suman-Ojha.png";
const embrahim = "https://i.ibb.co/SQctM8b/ebrahim.jpg";
const aman = "https://i.ibb.co/YtpRrXh/aman-Sharma.jpg";


const defaultOption1 = {
  loop: true,
  autoplay: true,
  animationData: cycle.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOption2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      fetch(
        bird1 &&
          bird2 &&
          forest &&
          rocks &&
          water &&
          logo &&
          sourav &&
          argha &&
          sumit &&
          pushpa &&
          sudhnashu &&
          suman &&
          embrahim &&
          aman
      )
        .then((response) => response.ok)
        .then((outBuff) => {
          setData(outBuff);
          setLoading(true);
          setTimeout(() => {
            setCompleted(true);
          }, 1100);
        });
    }, 2000);
  }, [data]);
  return (
    <div className="App">
      {!completed ? (
        !loading ? (
          <Lottie
            options={defaultOption1}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            height={300}
            width={300}
          />
        ) : (
          <Lottie
            options={defaultOption2}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            height={300}
            width={300}
          />
        )
      ) : (
        <div className="page">
          <Router>
            <Navbar logo={logo} />
            <Switch>
              <Route exact path="/comming" component={Comming} />
              <Route exact path="/membership_form" component={Hackathron} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/project" component={Project} />
              <Route exact path="/about" component={About} />
              {/* <Route exact path="/ticket" component={Ticket} /> */}
              <Route exact path="/feedback" component={FeedBack} />
              <Route exact path="/">
                <Home
                  bird1={bird1}
                  bird2={bird2}
                  forest={forest}
                  rocks={rocks}
                  water={water}
                />
              </Route>
              <Redirect to="/" />
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

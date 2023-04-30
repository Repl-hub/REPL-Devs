import React from "react";
import Lottie from "react-lottie";
import * as underConstraction from "./json/under-construction.json";
import Footer from "./Footer.jsx";

const animation = {
  loop: true,
  autoplay: true,
  animationData: underConstraction.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Comming() {
  return (
    <div className="conatiner-fluid">
      <div className="row">
        <div className="col-md-12 col-12" style={{ width: "100vw" }}>
          <Lottie options={animation} />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default Comming;

import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

import "./Figma.css";
// import {BrowserRouter, Link, Routes} from "react-router-dom"

import logoimage from "./assets/logo (2).png";
import icon from "./assets/icon.png";
import notification from "./assets/Notify.png";
import LogoD from "./assets/logoD.png";
import image1 from "./assets/image_FRAME3.png";

function App() {
  const [openTab1, setopenTab1] = useState(true);
  const [openTab2, setopenTab2] = useState(false);
  const [openTab3, setopenTab3] = useState(false);
  const Tab1Handler = () => {
    setopenTab1(true);
    setopenTab2(false);
    setopenTab3(false);
  };

  const Tab2Handler = () => {
    setopenTab1(false);
    setopenTab2(true);
    setopenTab3(false);
  };

  const Tab3Handler = () => {
    setopenTab1(false);
    setopenTab2(false);
    setopenTab3(true);
  };

  return (
    <div className="Main_Container">
      <div className="Main_div">
        <div className="logo">
          <img className="logoimage" src={logoimage} alt="" />
        </div>
        <div className="headline">
          <h6 className="heading">eSolar Plant Monitoring System</h6>
        </div>
        <div class="dropdown">
          <dt
            class=" btn-Dashboard"
            type="text"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img className="icon" src={icon} alt="" />
            Dashboard
          </dt>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Dashboard1
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dashboard2
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <dt
            class="btn-Dashboard"
            type="text"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img className="icon" src={icon} alt="" />
            Analysis
          </dt>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Analysis1
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Analysis2
              </a>
            </li>
          </ul>
        </div>
        <div className="bt">
          <dt className="event">
            <img className="icon" src={icon} alt="" />
            PV Monitoring
          </dt>
        </div>
        <div className="bt">
          <dt className="event">
            <img className="icon" src={icon} alt="" />
            WMS
          </dt>
        </div>
        <div className="bt">
          <dt className="event">
            <img className="icon" src={icon} alt="" /> Energy Reporting
          </dt>
        </div>
        <div className="bt">
          <dt className="event">
            <img className="icon" src={icon} alt="" />
            Event Log Reports
          </dt>
        </div>
        <div className="bt">
          <dt className="event">
            <img className="icon" src={icon} alt="" />
            Plant Total Power Curve
          </dt>
        </div>
        <div className="bt">
          <dt className="event">
            <img className="icon" src={icon} alt="" />
            Outage
          </dt>
        </div>
        <div className="bt">
          <dt className="event">
            <img className="icon" src={icon} alt="" />
            User Details
          </dt>
        </div>
        <div className="bt">
          <dt className="event">
            <img className="icon" src={icon} alt="" />
            Logout
          </dt>
        </div>
      </div>
      <div className="Main_div2">
        <div className="Frame1">
          <div className="FM1">
            <h5>
              <img className="icon" src={icon} alt="" /> Dashboard
            </h5>
          </div>

          <div className="FM2">
            <h6 className="H6">Last log time : 21/10/2023</h6>

            <h6 className="H7 ">03:45AM</h6>

            <h6 className="H8"> 00:00:00 </h6>

            <img className="H9" src={notification} alt="" />

            <img className="H10" src={LogoD} alt="" />
          </div>
        </div>
        <div className="Frame2">
          <div class=" box"> ms </div>

          <div>
            <marquee>
              Industrial Energy Management System &nbsp;&nbsp;&nbsp; Flow Meter
              & Ground Water Monitoring &nbsp;&nbsp;&nbsp; Smart Metering and
              DLMS Solution &nbsp;&nbsp;&nbsp;Industrial Energy Management
              System &nbsp;&nbsp;&nbsp; Flow Meter & Ground Water Monitoring
              &nbsp;&nbsp;&nbsp; Smart Metering and DLMS Solution
              &nbsp;&nbsp;&nbsp;
            </marquee>
          </div>
        </div>

        <div className="Frame3">
          <div className="G1">
            <dt className="dt">Gulati oil India Pvt Ltd</dt>
            <dt className="dt ">Plant Capacity : 500.30 kwp</dt>
          </div>
          <div className="G2">
            <dt className="dt">Plant Commisioned by</dt>
            <dt className="dt">PV Tech Engineering</dt>
          </div>
          <div className="G3">
            <img src={image1} alt="" />
          </div>
        </div>

        {/* <div className="Frame4">
          <div className="UN">
            <h6>Dashboard/Default</h6>
          </div> */}

        <nav>
          <div
            class="nav nav-tabs flex-row-reverse  "
            id="nav-tab"
            role="tablist"
          >
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              onClick={Tab3Handler}
            >
              Tab3
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              onClick={Tab2Handler}
            >
              Tab2
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
              onClick={Tab1Handler}
            >
              Tab1
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {" "}
            {openTab3 && <Tab3 />}
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {openTab2 && <Tab2 />}
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            {openTab1 && <Tab1 />}
          </div>
        </div>
        {/* <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={Tab1Handler}>Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  {openTab1 && <Tab1 />}
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div> */}
      </div>

      <div></div>
    </div>
    // </div>
  );
}

export default App;

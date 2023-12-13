import React from "react";
import "./Figma.css";
import date from "./assets/Date.png";
import Cloud from "./assets/Cloud.png";
import Thermo from "./assets/Themomether.png";
import drop from "./assets/Droplet.png";
import Navimage from "./assets/Nav+circle.png";
import Chart_Nav from "./assets/Frame117.png";
import Chart_Nav1 from "./assets/Chart1.png";
import { Chart } from "./Chart";
import { ChartComponent } from "./ChartComponent";
import {Vertical} from "./Vertical"




function Tab2() {
  return (
    <div className="Tab111">
      <div className="Frame5_11">
        <dt className="FOR">
          <img src={date} alt="" /> 10:27 AM Saturday, October 21,2023
        </dt>
        <dt className="FOR">
          <img src={Cloud} alt="" /> Cureen Weather
        </dt>
        <dt className="FOR">
          <img src={Thermo} alt="" />
          Today AVG PR:21 Oct
        </dt>
        <dt className="FOR">
          <img src={Thermo} alt="" /> Temperature:25.4C
        </dt>
        <dt className="FOR">
          <img src={drop} alt="" /> Humadity:38%
        </dt>
      </div>
      <div className="FRAME67">
      <div className="Frame61">
        <div className="frame1_1">
            {/* <div className="Nav_bar_1">
              <h6 className="h6">Inverter Wise Capacity[kWp]</h6>
              <img src={Navimage} alt="" />
            </div> */}
             <div className="Nav_bar_1">
              <h6 className="h7">Inverter Wise Capacity[kWp]</h6>
              <img src={Navimage} alt="" />
            </div>
            <div className="Circle1">

              <Chart/>
              
            </div>
            
          </div>
          <div className="frame2_1">

            <div className="Navbar">
             <img className="Nav1" src={Chart_Nav1} alt/>

            </div>
            <div className="Chart">
            <ChartComponent/>
           

            </div>

          </div>

        </div>
        <div className="Frame71">

       <div className="frame3_1">
       <img className="Nav1" src={Chart_Nav} alt/>
       </div>
       <div className="frame4_1">

         <Vertical/>
       </div>

       </div>

      </div>
    </div>
  );
}

export default Tab2;

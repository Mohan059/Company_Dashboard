import React from "react";
import "./Figma.css";
import date from "./assets/Date.png";
import Cloud from "./assets/Cloud.png";
import Thermo from "./assets/Themomether.png";
import drop from "./assets/Droplet.png";
// import Navimage from "./assets/Nav+circle.png";
// import Chart_Nav from "./assets/Frame117.png";
// import Chart_Nav1 from "./assets/Chart1.png";
// import { Chart } from "./Chart";
// import { ChartComponent } from "./ChartComponent";
// import {Vertical} from "./Vertical"

function Tab2() {
  return (
    <div className="Tab111">
      <div className="Frame5_1">
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
        <div className="Frame6_1">
          <div className="Text">
            <h6>Plant Performance</h6>
          </div>
          <div className="Excel">
            <div className="Excel1">
              <h6 className="Excel2">Excel</h6>
            </div>
            <div className="PDF">
              <h6 className="PDF1"> PDF</h6>
            </div>
          </div>
        </div>

        <div className="Frame7_1">
          <div className="Active-tabs">
            <ul class="nav nav-tabs">
              <li class="nav-item1">
                <a class="nav-link " aria-current="page" href="#">
                  Sort by:
                </a>
              </li>
              <li class="nav-item2">
                <a class="nav-link " href="#">
                  Day Reports
                </a>
              </li>
              <li class="nav-item3">
                <a class="nav-link" href="#">
                  Month Reports
                </a>
              </li>
              <li class="nav-item4">
                <a class="nav-link" href="#">
                  Year Reports
                </a>
              </li>
            </ul>
          </div>

          <div className="Index">
            <div className="index1">
              <h6 className="Name1">21 Oct 2023</h6>
            </div>
            <div className="index2">
              <h6 className="Name2">27 Oct 2023 </h6>
            </div>
            <div className="index3">
              <h6 className="Name3"> Search</h6>
            </div>
          </div>
        </div>

        <div className="Container">
          <div class="table-responsive">
            <table class=" table table-striped table-hover table-bordered ">
              <thead>
                <tr className="Date">
                  <td scope="col ">Date</td>
                  <td scope="col">Total Investor</td>
                  <td scope="col">Total Gen[KWh]</td>
                  <td scope="col">Plant CUF</td>
                  <td scope="col">PlantPR</td>
                  <td scope="col">Specific Yield</td>
                  <td scope="col">Solar Insolation</td>
                  <td scope="col">Expected Generation</td>
                  <td scope="col">Peak Radlation</td>
                  <td scope="col">Peak Radlation Time</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">21/09/2023</td>
                  <td>1</td>
                  <td>465.70</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                </tr>
                <tr>
                  <td scope="row">21/09/2023</td>
                  <td>1</td>
                  <td>465.70</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                </tr>
                <tr>
                  <td scope="row">21/09/2023</td>
                  <td>1</td>
                  <td>465.70</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                </tr>
                <tr>
                  <td scope="row">21/09/2023</td>
                  <td>1</td>
                  <td>465.70</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                </tr>
                <tr>
                  <td scope="row">21/09/2023</td>
                  <td>1</td>
                  <td>465.70</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                </tr>
                <tr>
                  <td scope="row">21/09/2023</td>
                  <td>1</td>
                  <td>465.70</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                </tr>
                <tr>
                  <td scope="row">21/09/2023</td>
                  <td>1</td>
                  <td>465.70</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                </tr>
                <tr>
                  <td scope="row">21/09/2023</td>
                  <td>1</td>
                  <td>465.70</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                </tr>
                <tr>
                  <td scope="row">21/09/2023</td>
                  <td>1</td>
                  <td>465.70</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                </tr>
                <tr>
                  <td scope="row">21/09/2023</td>
                  <td>1</td>
                  <td>465.70</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                  <td>39.593</td>
                </tr>
              </tbody>
              
            </table>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Tab2;

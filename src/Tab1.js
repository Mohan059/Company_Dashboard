import React from 'react'
import "./Figma.css";
import date from "./assets/Date.png";
import Cloud from "./assets/Cloud.png";
import Thermo from "./assets/Themomether.png";
import drop from "./assets/Droplet.png";
import solar from "./assets/solar.png";
import Navimage from "./assets/Nav+circle.png";
import Chart_Nav from "./assets/Chart_Nav.png";
import { Circle } from "./Circle";
import {ChartComponent} from "./ChartComponent"
// import {Chart}  from  "./Chart"
// import Tab1 from './Tab1';


function Tab1(){

    return(
      <div className='Tab111'>
      <div className="Frame5">
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
      <div className='FRAME67'>
      <div className="Frame6">
          <div className="frame1">
            <img className="Solar" src={solar} alt="" />
          </div>
          <div className="frame2">
            <div className="uppar">
              <div className="class1">
                <div className="DC">
                  <h6 className="h6">Capacity</h6>
                </div>
                <dt className="AC">
                  
                  AC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
                <dt className="AC">
                
                  DC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
                <dt className="AC">
                  
                  AC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
              </div>
              <div className="class2">
                <div className="DC">
                  <h6 className="h6">Capacity</h6>
                </div>
                <dt className="AC">
                  
                  AC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
                <dt className="AC">
                  
                  DC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
                <dt className="AC">
                  
                  AC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
              </div>
            </div>
            <div className="lower">
              <div className="class3">
                <div className="DC">
                  <h6 className="h6">Capacity</h6>
                </div>
                <dt className="AC">
                  
                  AC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
                <dt className="AC">
                  
                  DC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
                <dt className="AC">
                  
                  AC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
              </div>
              <div className="class4">
                <div className="DC">
                  <h6 className="h6">Capacity</h6>
                </div>
                <dt className="AC">
                  
                  AC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
                <dt className="AC">
                  
                  DC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
                <dt className="AC">
                  
                  AC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;650.3(kWp)
                </dt>
              </div>
            </div>
          </div>

      </div>
      <div className='Frame7'>
        <div className="frame3">
            <div className="Nav_bar">
              <h6 className="h7">Inverter Wise Capacity[kWp]</h6>
              <img src={Navimage} alt="" />
            </div>
            <div className="Circle">

              <Circle/>
            </div>
            
          </div>
          <div className="frame4">

            <div className="Navbar">
             <img className="Nav1" src={Chart_Nav} alt/>

            </div>
            <div className="Chart">
            <ChartComponent/>
           

            </div>

          </div>

        </div>
      
        </div>
       
      </div>
        
      


    );
}

export default Tab1;
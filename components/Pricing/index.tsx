"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";

// RecentProjects.js
import Image from "next/image";


const RecentProjects = () => {
  return (
    
    <div className="section events" id="events">
      <div className="container">
        <div className="row">
       <title>Recent Projects </title>
          {/* Project 1 */}
          <div className="col-lg-4 col-md-4" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">   <div className="item">
              <div className="row">
                <div className="col-lg-3">
                  <div className="image">
                    <img src="/images/2.png" alt=""width={300} height={200} />

                  </div>
                </div>
                <div className="col-lg-9 project-details">
                  <ul>
                    <li>
                      <span className="category">Point of Sale System</span>
                      <h4>BlueNote Cafe Pub & Grill</h4>
                    </li>
                    <li>
                      <span>Start Date:</span>
                      <h6>9th September 2023</h6>
                    </li>
                    <li>
                      <span>Duration:</span>
                      <h6>One Month</h6>
                    </li>
                  </ul>
                  <a href="#">
                    <i className="fa fa-television" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-lg-4 col-md-4" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">   <div className="item">
              <div className="row">
                <div className="col-lg-3">
                  <div className="image">
                    <img src="/images/4.png" alt="" width={300} height={200} />

                  </div>
                </div>
                <div className="col-lg-9 project-details">
                  <ul>
                    <li>
                      <span className="category">E-commerce Web Application</span>
                      <h4>Wila Wane Toy Store</h4>
                    </li>
                    <li>
                      <span>Start Date:</span>
                      <h6>15 November 2023</h6>
                    </li>
                    <li>
                      <span>Duration:</span>
                      <h6>One Month Two Weeks</h6>
                    </li>
                  </ul>
                  <a href="#">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-lg-4 col-md-4" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">   <div className="item">
              <div className="row">
                <div className="col-lg-3">
                  <div className="image">
                    <img src="/images/3.png" alt=""width={300} height={200} />

                  </div>
                </div>
                <div className="col-lg-9 project-details">
                  <ul>
                    <li>
                      <span className="category">Website</span>
                      <h4>Wila Wane Toy Store</h4>
                    </li>
                    <li>
                      <span>Start Date:</span>
                      <h6>1 November 2023</h6>
                    </li>
                    <li>
                      <span>Duration:</span>
                      <h6>Three Weeks</h6>
                    </li>
                  </ul>
                  <a href="#">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-lg-4 col-md-4" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">   <div className="item">
              <div className="row">
                <div className="col-lg-3">
                  <div className="image">
                    <img src="/images/5.png" alt=""width={300} height={200} />

                    
                  </div>
                </div>
                <div className="col-lg-9 project-details">
                  <ul>
                    <li>
                      <span className="category">Website</span>
                      <h4>Silver Maple College HS</h4>
                    </li>
                    <li>
                      <span>Date:</span>
                      <h6>20 May 2022</h6>
                    </li>
                    <li>
                      <span>Duration:</span>
                      <h6>3 Weeks</h6>
                    </li>
                  </ul>
                  <a href="#">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;

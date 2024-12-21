// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Nav from './Components/Nav.jsx'
import Hero from './Components/hero.jsx'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing Carousel
import Carousel  from './Carousel'

// DIVIDER LINE IMPORT
import divider from './assets/images/6.png'

// Importing caraousel images
import bImage0 from './assets/images/lg_icon0.png'
import bImage1 from './assets/images/lg_icon1.png'
import bImage2 from './assets/images/lg_icon2.png'
import bImage3 from './assets/images/lg_icon3.png'
import bImage4 from './assets/images/lg_icon4.png'
import bImage5 from './assets/images/lg_icon5.png'
import bImage6 from './assets/images/lg_icon6.png'
import bImage7 from './assets/images/lg_icon7.png'
import bImage8 from './assets/images/lg_icon8.png'
import bImage9 from './assets/images/lg_icon9.png'
import bImage10 from './assets/images/lg_icon10.png'
import bImage11 from './assets/images/lg_icon11.png'

import lImage0 from './assets/images/sm_icon0.png'
import lImage1 from './assets/images/sm_icon1.png'
import lImage10 from './assets/images/sm_icon10.png'
import lImage11 from './assets/images/sm_icon11.png'
import lImage2 from './assets/images/sm_icon2.png'
import lImage3 from './assets/images/sm_icon3.png'
import lImage4 from './assets/images/sm_icon4.png'
import lImage5 from './assets/images/sm_icon5.png'
import lImage6 from './assets/images/sm_icon6.png'
import lImage7 from './assets/images/sm_icon7.png'
import lImage8 from './assets/images/sm_icon8.png'
import lImage9 from './assets/images/sm_icon9.png'

const navImgs = [
  <svg className='size-12 p-2 bg-[#F6670B] rounded-full' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 9V15M6.5 12H12.5M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
      
      <svg className='size-12 p-2 bg-[#F6670B] rounded-full' fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7,9.45a4.235,4.235,0,0,0,.3.3V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.752a4.235,4.235,0,0,0,.3-.3,4,4,0,0,0,.731-3.456L20.97,1.758A1,1,0,0,0,20,1H4a1,1,0,0,0-.97.758L1.972,5.994A4,4,0,0,0,2.7,9.45ZM13,21H11V16h2Zm6,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v6H5V10.9A3.989,3.989,0,0,0,8.914,9.61c.026.03.053.059.08.089A4.086,4.086,0,0,0,12.041,11a4.039,4.039,0,0,0,2.965-1.3c.027-.03.054-.059.08-.089A3.989,3.989,0,0,0,19,10.9ZM3.911,6.479,4.781,3H19.219l.87,3.479A2.029,2.029,0,0,1,18.12,9,2.041,2.041,0,0,1,16.1,7.14l-.042-.5a1,1,0,0,0-1.993.166v0a2.006,2.006,0,0,1-.529,1.539A2.059,2.059,0,0,1,11.959,9,2.029,2.029,0,0,1,9.937,6.806v0a1,1,0,0,0-.914-1.079.989.989,0,0,0-1.079.913l-.042.5A2.041,2.041,0,0,1,5.88,9,2.029,2.029,0,0,1,3.911,6.479Z"/></svg>
      ,
      <svg  xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" fill="none" stroke="#000" /><rect x="14" y="18" width="4" height="2" fill="#000" /><circle cx="12" cy="10.5" r="1.5" fill="#000" /><path d="M9 14.25c0-0.998 1.999-1.5 3-1.5s3 0.502 3 1.5V15H9v-0.75z" fill="#000" /><circle cx="15.75" cy="11.25" r="1.125" fill="#000" /><path d="M15.75 13.313c-0.75 0-2.25 0.376-2.25 1.124V15h4.5v-0.563c0-0.748-1.5-1.124-2.25-1.124z" fill="#000" /><circle cx="8.25" cy="11.25" r="1.125" fill="#000" /><path d="M8.25 13.313c-0.75 0-2.25 0.376-2.25 1.124V15h4.5v-0.563c0-0.748-1.5-1.124-2.25-1.124z" fill="#000" /></svg>
      ,
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 512 512" fill="#000"><g><path d="M278.172,297.375l-51.203,51.188c0.016,0.594,0.031,1.188,0.031,1.781c0,8.406-1.594,16.781-4.766,24.625c-3.203,7.813-7.922,15.156-14.375,21.563l-33.672,33.719c-6.453,6.438-13.766,11.156-21.609,14.344c-7.859,3.188-16.219,4.781-24.609,4.781c-8.375,0-16.75-1.594-24.594-4.75c-7.844-3.219-15.156-7.938-21.625-14.375c-6.438-6.438-11.156-13.75-14.344-21.594s-4.781-16.219-4.781-24.625c0-8.375,1.594-16.75,4.781-24.594s7.906-15.156,14.344-21.625l33.719-33.688c6.438-6.406,13.734-11.156,21.594-14.344c7.828-3.188,16.219-4.781,24.594-4.781c0.594,0,1.188,0.031,1.766,0.063l51.203-51.234c-1.594-0.734-3.203-1.422-4.844-2.078c-15.422-6.25-31.781-9.375-48.125-9.375s-32.719,3.125-48.125,9.375c-15.422,6.25-29.906,15.688-42.359,28.094l-33.688,33.719c-12.438,12.406-21.859,26.906-28.109,42.344S0,367.688,0,384.031s3.125,32.719,9.375,48.156c6.25,15.406,15.672,29.906,28.109,42.313c12.422,12.469,26.922,21.906,42.344,28.125c15.438,6.281,31.797,9.375,48.141,9.375c16.359,0,32.719-3.094,48.141-9.375c15.422-6.219,29.922-15.656,42.344-28.125l33.703-33.656c12.422-12.469,21.844-26.938,28.109-42.344c6.266-15.469,9.359-31.813,9.375-48.156c-0.016-16.313-3.109-32.688-9.375-48.156C279.594,300.594,278.891,298.969,278.172,297.375z"/><path d="M502.625,79.844c-6.25-15.438-15.672-29.938-28.109-42.359c-12.422-12.422-26.922-21.859-42.359-28.109C416.734,3.125,400.375,0,384.031,0s-32.719,3.125-48.141,9.375s-29.922,15.688-42.344,28.109l-33.703,33.703C247.422,83.594,238,98.094,231.734,113.531c-6.266,15.406-9.359,31.781-9.359,48.141c0,16.344,3.094,32.703,9.359,48.141c0.672,1.625,1.359,3.219,2.094,4.828l51.203-51.203c-0.016-0.578-0.031-1.156-0.031-1.766c0-8.391,1.594-16.781,4.781-24.609c3.188-7.844,7.906-15.156,14.359-21.625l33.672-33.688c6.453-6.406,13.766-11.141,21.625-14.344c7.813-3.156,16.203-4.781,24.594-4.781c8.406,0,16.75,1.625,24.625,4.781c7.813,3.203,15.141,7.938,21.594,14.344c6.438,6.469,11.156,13.781,14.344,21.625c3.156,7.844,4.781,16.219,4.781,24.594c0,8.391-1.625,16.75-4.781,24.625c-3.188,7.844-7.906,15.156-14.344,21.594l-33.688,33.688c-6.438,6.438-13.766,11.156-21.625,14.344c-7.828,3.188-16.203,4.781-24.594,4.781c-0.594,0-1.188-0.016-1.766-0.031l-51.203,51.219c1.594,0.719,3.203,1.422,4.813,2.063c15.453,6.281,31.813,9.406,48.156,9.406s32.719-3.125,48.125-9.406c15.422-6.25,29.906-15.672,42.359-28.094l33.688-33.703c12.438-12.422,21.859-26.922,28.109-42.359c6.25-15.406,9.375-31.781,9.375-48.125S508.875,95.25,502.625,79.844z"/><path d="M160.219,351.781c12.234,12.25,32.063,12.25,44.281,0L351.781,204.5c12.219-12.219,12.25-32.031,0-44.281c-12.234-12.219-32.063-12.219-44.281,0L160.219,307.531C148,319.75,148,339.563,160.219,351.781z"/></g></svg>
      ,
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="21 16 21 21 3 21 3 14 9 14 9 10 15 10 15 16 21 16"
          style={{
            fill: "none",
            stroke: "rgb(0, 0, 0)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
        <polygon
          points="12.46 3.94 13.5 4.09 12.75 4.82 12.93 5.85 12 5.37 11.07 5.85 11.25 4.82 10.5 4.09 11.54 3.94 12 3 12.46 3.94"
          style={{
            fill: "none",
            stroke: "rgb(44, 169, 188)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
      </svg>
      ,
      <svg width="800px" height="800px" viewBox="0 0 32 32" id="OBJECT" xmlns="http://www.w3.org/2000/svg"><defs><style>{".cls-1{fill:#b2b2b2;}"}</style></defs><title>OBJECT</title><path d="M30.87,26l-10-17.32a1,1,0,0,0-.61-.47,1,1,0,0,0-.76.1l-6.06,3.5a1,1,0,0,0-.37,1.37l10,17.32a1,1,0,0,0,.87.5h0a1,1,0,0,0,.86-.5l1.74-3,3.46,0a1,1,0,0,0,.87-.5A1,1,0,0,0,30.87,26Z"/><path d="M18.56,11.81,12.5,8.31a1.05,1.05,0,0,0-.76-.1,1,1,0,0,0-.61.47L1.13,26a1,1,0,0,0,0,1,1,1,0,0,0,.87.5l3.46,0,1.74,3a1,1,0,0,0,.86.5h0a1,1,0,0,0,.87-.5l10-17.32A1,1,0,0,0,18.56,11.81Z"/><circle className="cls-1" cx="16" cy="13" r="12"/><path d="M23,10.33a1,1,0,0,0-.8-.68l-3.63-.53L16.9,5.81a1,1,0,0,0-1.8,0L13.48,9.12l-3.63.53a1,1,0,0,0-.55,1.71l2.63,2.58-.62,3.64a1,1,0,0,0,.4,1,1,1,0,0,0,1,.07L16,16.92l3.24,1.71a1,1,0,0,0,.47.12,1,1,0,0,0,.58-.19,1,1,0,0,0,.4-1l-.62-3.64,2.63-2.58A1,1,0,0,0,23,10.33Z"/></svg>
      ,
      
      <svg width="800px" height="800px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ,
      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C2.44772 5 2 5.44771 2 6V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5H3ZM0 6C0 4.34315 1.34314 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34315 21 0 19.6569 0 18V6ZM6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12C6.67157 12 6 11.3284 6 10.5ZM10.1756 12.7565C10.69 12.1472 11 11.3598 11 10.5C11 8.567 9.433 7 7.5 7C5.567 7 4 8.567 4 10.5C4 11.3598 4.31002 12.1472 4.82438 12.7565C3.68235 13.4994 3 14.7069 3 16C3 16.5523 3.44772 17 4 17C4.55228 17 5 16.5523 5 16C5 15.1145 5.80048 14 7.5 14C9.19952 14 10 15.1145 10 16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16C12 14.7069 11.3177 13.4994 10.1756 12.7565ZM13 8C12.4477 8 12 8.44772 12 9C12 9.55228 12.4477 10 13 10H19C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8H13ZM14 12C13.4477 12 13 12.4477 13 13C13 13.5523 13.4477 14 14 14H18C18.5523 14 19 13.5523 19 13C19 12.4477 18.5523 12 18 12H14Z" fill="#000000"/>
      </svg>
      ,
      <svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H0V6C1.10457 6 2 6.89543 2 8C2 9.10457 1.10457 10 0 10V14H16V10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6V2ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="#000000"/>
      </svg>
      ,
      <svg width="800px" height="800px" viewBox="0 -1 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
          
          <title>briefcase</title>
          <desc>Created with Sketch Beta.</desc>
          <defs>
      
      </defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
              <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-206.000000, -206.000000)" fill="#000000">
                  <path d="M224,222 C224,221.634 223.895,221.296 223.723,221 L220.277,221 C220.105,221.296 220,221.634 220,222 C220,223.104 220.896,224 222,224 C223.104,224 224,223.104 224,222 L224,222 Z M226,222 C226,224.209 224.209,226 222,226 C219.791,226 218,224.209 218,222 C218,221.652 218.054,221.319 218.141,221 L206,221 L206,232 C206,234.209 207.791,236 210,236 L234,236 C236.209,236 238,234.209 238,232 L238,221 L225.859,221 C225.946,221.319 226,221.652 226,222 L226,222 Z M226,210 L218,210 L218,209 C218,208.448 218.448,208 219,208 L225,208 C225.552,208 226,208.448 226,209 L226,210 L226,210 Z M234,210 L228,210 L228,208 C228,206.896 227.104,206 226,206 L218,206 C216.896,206 216,206.896 216,208 L216,210 L210,210 C207.791,210 206,211.791 206,214 L206,219 L238,219 L238,214 C238,211.791 236.209,210 234,210 L234,210 Z" id="briefcase" sketch:type="MSShapeGroup">
      
      </path>
              </g>
          </g>
      </svg>
      ,
      <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="goal" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line"><polygon id="secondary" points="15 6 15 9 18 9 21 6 18 6 18 3 15 6" style={{ fill: "rgb(44, 169, 188)", strokeWidth: 2 }}></polygon><path id="primary" d="M15,9l-2.5,2.5M15,6V9h3l3-3H18V3Z" style={{ fill: "none", stroke: "rgb(0, 0, 0)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }}></path><path id="primary-2" data-name="primary" d="M12.33,3H12a9,9,0,1,0,9,9c0-.11,0-.22,0-.33" style={{ fill: "none", stroke: "rgb(0, 0, 0)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }}></path><path id="primary-3" data-name="primary" d="M16.9,13A5,5,0,1,1,11,7.1" style={{ fill: "none", stroke: "rgb(0, 0, 0)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }}></path></svg>
      ,
      
      <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          
          <title>profile_round [#1342]</title>
          <desc>Created with Sketch.</desc>
          <defs>
      
      </defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#1342]">
      
      </path>
                  </g>
              </g>
          </g>
      </svg>];


function App() {
const data = [
    {
      icon: navImgs[0],
      Title: "CREATE",
      divider: {divider},
      text: `<span style="color: #F7670B;">U</span>TRADIE Create lets you share your <span style="color: #F7670B">hard-earned skills</span> through <span style="color: #F7670B">mini-courses</span> and <span style="color: #F7670B">guides</span>. Don't sit on your expertise-others are already <span style="color: #F7670B">teaching</span> and <span style="color: #F7670B">getting noticed</span>. Step up, grow your <span style="color: #F7670B">reputation</span>, and become the <span style="color: #F7670B">expert</span> everyone learns from.`
    },
    {
      icon: navImgs[1],
      Title: "MARKETPLACE",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE Marketplace is your trade <span style="color: #F7670B">skills shop</span>. Browse courses made by <span style="color: #F7670B">industry pros</span>, covering everything from <span style="color: #F7670B">gardening</span> to <span style="color: #F7670B">auto repair</span>. Learn <span style="color: #F7670B">what</span> you need, <span style="color: #F7670B">when</span> you need it. Get <span style="color: #F7670B">ahead</span>, stay <span style="color: #F7670B">competitive</span>, and keep your trade game <span style="color: #F7670B">strong</span>.` 
    },
    {
      icon: navImgs[2],
      Title: "LEARN",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE LEARN focuses on <span style="color: #F7670B">hands-on-skills</span> that get you <span style="color: #F7670B">results</span>. Master trades like <span style="color: #F7670B">plumbing</span> and <span style="color: #F7670B">electrical</span> work. Skip the fluff and focus on <span style="color: #F7670B">practical skills</span> that work for you on the <span style="color: #F7670B">job</span>. Get <span style="color: #F7670B">better</span>, faster, and <span style="color: #F7670B">stay ahead</span> with courses that are built to make a <span style="color: #F7670B">difference</span>.`
    },
    {
      icon: navImgs[3],
      Title: "CONNECTIONS",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE Connections is where tradies <span style="color: #F7670B">link up</span>. Connect with <span style="color: #F7670B">mentors</span> swap <span style="color: #F7670B">tips</span>, and learn <span style="color: #F7670B">together</span> in a community designed for <span style="color: #F7670B">growth</span>. Don't miss the chance to build your <span style="color: #F7670B">network</span> and <span style="color: #F7670B">level up</span> with real <span style="color: #F7670B">support</span> from others in the trade.` 
    },
    {
      icon: navImgs[4],
      Title: "LEADERBOARDS",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE Leaderboards puts your <span style="color: #F7670B">skills</span> in the <span style="color: #F7670B">spotlight</span>. See how you rank against others in your trade with <span style="color: #F7670B">real-time</span> leaderboards. Measure your <span style="color: #F7670B">progess</span>, push your <span style="color: #F7670B">limits</span>, and prove <span style="color: #F7670B">you're at the top</span>. Stay <span style="color: #F7670B">sharp</span> and keep <span style="color: #F7670B">improving</span>.` 
    },
    {
      icon: navImgs[5],
      Title: "COMPETITIONS",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE Competitionsn makes upskilling a <span style="color: #F7670B">race</span>. Compete with others, push your limits, and see how far you can go. Don't get left <span style="color: #F7670B">behind</span>-join the <span style="color: #F7670B">race</span>, stay <span style="color: #F7670B">ahead</span>, and integrate with <span style="color: #F7670B">U</span>TRADIE Leaderboards for even more ways to see where you <span style="color: #F7670B">stand</span>.`
    },
    {
      icon: navImgs[6],
      Title: "DASHBOARD",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE Dashboard makes learning <span style="color: #F7670B">simple</span> and <span style="color: #F7670B">engaging</span>. With its easy-to-use design, you can track your <span style="color: #F7670B">progess</span> and easily view <span style="color: #F7670B">key stats</span> about your <span style="color: #F7670B">journey</span>, helping you stay <span style="color: #F7670B">on top of your skills</span>-all while keeping it <span style="color: #F7670B">fun</span> and <span style="color: #F7670B">straightforward</span>.` 
    },
    {
      icon: navImgs[7],
      Title: "PASSPORT",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE Passport puts your <span style="color: #F7670B">career</span> in your <span style="color: #F7670B">pocket</span>. Store your <span style="color: #F7670B">skills</span>, <span style="color: #F7670B">achievements</span>, and <span style="color: #F7670B">certifications</span> in <span style="color: #F7670B">one place</span>. So you're always <span style="color: #F7670B">ready</span> to show your values to <span style="color: #F7670B">clients</span> or <span style="color: #F7670B">employers</span>. If you're not keeping track, you're missing the change to <span style="color: #F7670B">stand out</span>.`
    },
    {
      icon: navImgs[8],
      Title: "EVENTS",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE Events keeps you <span style="color: #F7670B">connected</span> to the latest <span style="color: #F7670B">trade-related happenings</span>. Browse upcoming <span style="color: #F7670B">workshops</span>, <span style="color: #F7670B">conferences</span>, and more and easily <span style="color: #F7670B">RSVP</span> to those that <span style="color: #F7670B">align</span> with your <span style="color: #F7670B">career goals</span>. These events help you <span style="color: #F7670B">grow</span>, so it's best to <span style="color: #F7670B">stay in the loop</span>.`
    },
    {
      icon: navImgs[9],
      Title: "JOBS",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE Jobs is your <span style="color: #F7670B">go-to</span> place for the latest <span style="color: #F7670B">job opportunities</span> in the <span style="color: #F7670B">trade world</span>. Browse open <span style="color: #F7670B">positions</span>, get all the <span style="color: #F7670B">details</span> you need, and apply directly to the roles that <span style="color: #F7670B">match your skills</span>. Staying <span style="color: #F7670B">up-to-date</span> means <span style="color: #F7670B">staying ahead</span> in your career-so don't let opportunities <span style="color: #F7670B">slip by</span>.` 
    },
    {
      icon: navImgs[10],
      Title: "GOALS",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE Goals help you set <span style="color: #F7670B">clear targets</span> and track your <span style="color: #F7670B">progress</span> every <span style="color: #F7670B">step of the way</span>. Update your <span style="color: #F7670B">gaols</span> as you go, stay <span style="color: #F7670B">focused</span>, and see your career growth in <span style="color: #F7670B">real time</span>. Without <span style="color: #F7670B">goals</span>, you're just <span style="color: #F7670B">drifting</span>-so make sure you're <span style="color: #F7670B">staying on track</span>.` 
    },
    {
      icon: navImgs[11],
      Title: "PROFILES",
      divider: {divider},
      text: `<span style="color: #F7670B">U</span>TRADIE Profile for businesses lets you manage employee <span style="color: #F7670B">progress</span>, set <span style="color: #F7670B">team goals</span>, and <span style="color: #F7670B">access</span> all <span style="color: #F7670B">U</span>TRADIE features as a <span style="color: #F7670B">Manager</span>. Monitor your team's <span style="color: #F7670B">development</span>, track <span style="color: #F7670B">skills</span>, and <span style="color: #F7670B">lead the way</span> in growth.` 
    },
  ]

  const navIcons = [
    lImage0,lImage1,lImage2,lImage3,lImage4,lImage5,lImage6,lImage7,lImage8,lImage9,lImage10,lImage11
  ]  


    // return (
    //   <Router>
    //     <div className='overflow-x-hidden'>
    //       <Nav />
    //       <Routes>
    //         <Route path="/" element={
    //           <>
    //             <Hero />
    //             <div className='w-full h-12 bg-gradient-to-b from-[#97A4AF] to-[#11364D]'></div>
    //             <Carousel>
    //               {data.map((dataSet, index) => (
    //                 <div key={index} className='bg-[#0F334B] w-fit flex-shrink-0 rounded-2xl border-[#1F435B] border-2 py-8'>
    //                   <img src={dataSet.icon} alt={dataSet.Title} className="w-32 h-32 mx-auto mb-8" />
    //                   <h2 className='text-white text-4xl font-bold mb-8 text-center'>{dataSet.Title}</h2>
    //                   <img src={divider} className='w-[67%] h-1 mx-auto mb-16' alt="" />
    //                   <p className='text-3xl mt-12 px-8 text-center mx-auto tracking-wide text-white' dangerouslySetInnerHTML={{__html: dataSet.text}}></p>
    //                 </div>
    //               ))}
    //               {navIcons.map((icon, index) => (
    //                 <img key={index} src={icon} alt={`Nav Icon ${index}`} className="w-16 h-16" />
    //               ))}
    //             </Carousel>
    //             <div className='w-full h-12 bg-gradient-to-b from-[#11364D] to-white'></div>
    //             {/* Pricing cards */}
    //             <div className='flex justify-center text-white text-center bg-[#FFFFFF] flex-wrap gap-2 mt-40 mb-20'>
    //               {/* ... (your pricing cards JSX) */}
    //             </div>
    //           </>
    //         } />
    //         <Route path="/growth-learning" element={<h1>Growth & Learning</h1>} />
    //         <Route path="/growth-learning/create" element={<h1>Create</h1>} />
    //         <Route path="/growth-learning/learn" element={<h1>Learn</h1>} />
    //         <Route path="/growth-learning/goals" element={<h1>Goals</h1>} />
    //         <Route path="/communication-social" element={<h1>Communication & Social</h1>} />
    //         <Route path="/communication-social/message" element={<h1>Message</h1>} />
    //         <Route path="/communication-social/connection" element={<h1>Connection</h1>} />
    //         <Route path="/communication-social/events" element={<h1>Events</h1>} />
    //         <Route path="/communication-social/competitions" element={<h1>Competitions</h1>} />
    //         <Route path="/opportunities" element={<h1>Opportunities</h1>} />
    //         <Route path="/opportunities/jobs" element={<h1>Jobs</h1>} />
    //         <Route path="/opportunities/marketplace" element={<h1>Market Place</h1>} />
    //         <Route path="/opportunities/affiliate" element={<h1>Affiliate</h1>} />
    //         <Route path="/account-settings" element={<h1>Account & Setting</h1>} />
    //         <Route path="/account-settings/message" element={<h1>Message</h1>} />
    //         <Route path="/account-settings/connection" element={<h1>Connection</h1>} />
    //         <Route path="/account-settings/events" element={<h1>Events</h1>} />
    //         <Route path="/account-settings/competitions" element={<h1>Competitions</h1>} />
    //       </Routes>
    //     </div>
    //   </Router>
    // )

  
  return (
    <Router>
    {/* Routes for the react router */}

      <div className='overflow-x-hidden'>
      <Nav />
      <Routes>
        {/* Root route */}
        <Route path="/" element={
          <>
             <Hero />
             <div className='w-full h-12 bg-gradient-to-b from-[#97A4AF] to-[#11364D]'></div>
             <Carousel>
              {[data.map(dataSet => {
                return(
                  <div className='bg-[#0F334B] w-fit flex-shrink-0 rounded-2xl border-[#1F435B] border-2 py-8'>
                    {/* <img src={dataSet.icon} className='mx-auto w-36' alt="" /> */}
                    <div className='mx-auto'>
                      {React.cloneElement(dataSet.icon, {
                        className: 'h-40 w-40 mx-auto',
                        // style: {fill: 'white !important', stroke: 'white !important'}
                      })}
                    </div>
                    {/* <div className='mt-8 w-fit flex flex-col items-center justify-center mx-auto'>
                      <h1 id="dynamic-title" className='text-[#F6670B] text-8xl font-bold font-Arvo text-bold'>{dataSet.Title}
                      </h1>
                      <img id="dynamic-divider" src={divider} className=' h-1' alt="" />
                      </div> */}
                    {/* <div className='mt-8 max-w-fit flex flex-col items-center justify-center mx-auto'>
                    <h1 className='text-[#F6670B] text-8xl font-bold font-Arvo text-center flex-grow-0'>
                    {dataSet.Title}
                    </h1>
                    <img
                    src={divider}
                    className='w-[35%] h-1 mt-4 mx-auto flex-grow-0'
                    alt=""
                    />
                    </div> */}
                    <div className='mt-8 max-w-fit flex flex-col items-center justify-center mx-auto'>
                      <h1 className='relative text-[#F6670B] text-8xl font-bold font-Arvo text-center flex-grow-0 whitespace-nowrap'>
                        {dataSet.Title}
                      </h1>
                      <img
                        src={divider}
                        className='w-[50%] h-1 mt-4 mx-auto flex-grow-0'
                        alt=""
                        />
                    </div>


                    <p className='text-3xl mt-12 px-8 text-center mx-auto tracking-wide' dangerouslySetInnerHTML={{__html: dataSet.text}}></p>
                  </div>
                )
              }),
              navIcons    
            ]}  
         </Carousel> 
         <div className='w-full h-12 bg-gradient-to-b from-[#11364D] to-white'></div>
      {/* Cards wrapper */}
      <div className='flex justify-center text-white text-center bg-[#FFFFFF] flex-wrap gap-2 mt-40 mb-20'>
        {/* Pricing card */}
        <div className='hover:bg-[#F6670B] duration-500 rounded-3xl'>
          <div className='bg-[#03243B] max-w-[26rem] max-h-fit px-10 pt-12 pb-8 rounded-xl min-h-[920px] flex flex-col m-3'>
            <h3 className='font-Arvo font-bold text-5xl uppercase mb-10'>Lite</h3>
            <img src={divider} className='w-[67%] h-1 mx-auto mb-16' alt="" />
            <p className='text-center text-3xl mb-8'>School Students, Apprentices, Job Seekers, Parents.</p>
            <ul className='text-2xl text-left pl-8' style={{listStyle: "circle"}}>
              <li>My Dashboard</li>
              <li>Passport</li>
              <li>Messages</li>
              <li>Learn</li>
              <li>Jobs</li>
              <li>Events</li>
              <li>Goals</li>
            </ul>
            <a href="#" className='text-2xl mt-auto text-[#03243B] px-8 py-5 bg-white hover:bg-[#F6670B] hover:text-white duration-300 rounded-2xl flex-none'>Create Account</a>
          </div>
        </div>
        <div className='hover:bg-[#F6670B] duration-500 rounded-3xl'>
          <div className='bg-[#03243B] max-w-[26rem] px-10 pt-12 pb-8 m-3 rounded-xl min-h-[920px] flex flex-col'>
            <h3 className='font-Arvo font-bold text-5xl uppercase mb-10'>Personal</h3>
            <img src={divider} className='w-[67%] h-1 mx-auto mb-16' alt="" />
            <p className='text-center text-3xl mb-8'>Trades Workers, Tradies, Managers, Business Owners, Support People.</p>
            <ul className='text-2xl text-left pl-8' style={{listStyle: "circle"}}>
              <li>My Dashboard</li>
              <li>Passport</li>
              <li>Messages</li>
              <li>Create (3x courses)</li>
              <li>Learn</li>
              <li>Marketplace</li>
              <li>Connect</li>
              <li>Jobs</li>
              <li>Events</li>
              <li>Goals</li>
            </ul>
            <a href="#" className='text-2xl mt-auto text-[#03243B] px-8 py-5 bg-white hover:bg-[#F6670B] hover:text-white duration-300 rounded-2xl'>Create Account</a>
          </div>
        </div>
        <div className='hover:bg-[#F6670B] duration-500 rounded-3xl'>
          <div className='bg-[#03243B] max-w-[26rem] px-10 pt-12 pb-8 m-3 rounded-xl min-h-[920px] flex flex-col'>
            <h3 className='font-Arvo font-bold text-5xl uppercase mb-10'>Business</h3>
            <img src={divider} className='w-[67%] h-1 mx-auto mb-16' alt="" />
            <p className='text-center text-3xl mb-8'>Trade Businesses, Content Creators, Paid Mentors, Trade Brands/Sponsers.</p>
            <ul className='text-2xl text-left pl-8' style={{listStyle: "circle"}}>
              <li>My Dashboard</li>
              <li>Profile</li>
              <li>Messages</li>
              <li>Create (50x courses)</li>
              <li>Learn</li>
              <li>Marketplace</li>
              <li>Connect</li>
              <li>Jobs</li>
              <li>Events</li>
              <li>Goals</li>
              <li>Affliate</li>
              <li>Control Panel (Manage your user's features)</li>
            </ul>
            <a href="#" className='text-2xl mt-auto text-[#03243B] px-8 py-5 bg-white hover:bg-[#F6670B] hover:text-white duration-300 rounded-2xl'>Create Account</a>
          </div>
        </div>
        <div className='hover:bg-[#F6670B] duration-500 rounded-3xl'>
          <div className='bg-[#03243B] max-w-[26rem] px-10 pt-12 pb-8 m-3 rounded-xl min-h-[920px] flex flex-col'>
            <h3 className='font-Arvo font-bold text-5xl uppercase mb-10 '>NON-FOR-PROFIT</h3>
            <img src={divider} className='w-[67%] h-1 mx-auto mb-16' alt="" />
            <p className='text-center text-3xl mb-8'>Job Service Organizations, Industry Associations, Apprenticeship Organizations.</p>
            <ul className='text-2xl text-left pl-8' style={{listStyle: "circle"}}>
              <li>Contact us to build better industries.</li>
            </ul>
            <a href="#" className='text-2xl mt-auto text-[#03243B] px-8 py-5 bg-white hover:bg-[#F6670B] hover:text-white duration-300 rounded-2xl'>Create Account</a>
          </div>
        </div>
      </div>

          </>
        } />
        <Route path="/growth-learning" element={<h1>Growth & Learning</h1>} />
        <Route path="/growth-learning/create" element={<h1 className='mt-32 text-7xl'>Create</h1>} />
        <Route path="/growth-learning/learn" element={<h1 className='mt-32 text-7xl'>Learn</h1>} />
        <Route path="/growth-learning/goals" element={<h1 className='mt-32 text-7xl'>Goals</h1>} />
        
        <Route path="/communication-social" element={<h1 className='mt-32 text-7xl'>Communication & Social</h1>} />
        <Route path="/communication-social/message" element={<h1 className='mt-32 text-7xl'>Message</h1>} />
        <Route path="/communication-social/connection" element={<h1 className='mt-32 text-7xl'>Connection</h1>} />
        <Route path="/communication-social/events" element={<h1 className='mt-32 text-7xl'>Events</h1>} />
        <Route path="/communication-social/competitions" element={<h1 className='mt-32 text-7xl'>Competitions</h1>} />
        
        <Route path="/opportunities" element={<h1 className='mt-32 text-7xl'>Opportunities</h1>} />
        <Route path="/opportunities/jobs" element={<h1 className='mt-32 text-7xl'>Jobs</h1>} />
        <Route path="/opportunities/marketplace" element={<h1 className='mt-32 text-7xl'>Market Place</h1>} />
        <Route path="/opportunities/affiliate" element={<h1 className='mt-32 text-7xl'>Affiliate</h1>} />
        
        <Route path="/account-settings" element={<h1 className='mt-32 text-7xl'>Account & Setting</h1>} />
        <Route path="/account-settings/message" element={<h1 className='mt-32 text-7xl'>Message</h1>} />
        <Route path="/account-settings/connection" element={<h1 className='mt-32 text-7xl'>Connection</h1>} />
        <Route path="/account-settings/events" element={<h1 className='mt-32 text-7xl'>Events</h1>} />
        <Route path="/account-settings/competitions" element={<h1 className='mt-32 text-7xl'>Competitions</h1>} />
      </Routes>
        </div>
      </Router>
  )
}

export default App

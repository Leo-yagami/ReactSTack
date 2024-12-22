import {ChevronLeft, ChevronRight} from 'react-feather';
import { useState } from 'react';
import React from 'react';
// import {ReactComponent} from 'react';

// Importing images
// import { ReactComponent as LImage0 } from './assets/_1.svg';
// import { ReactComponent as LImage1 } from './assets/_2.svg';
// import { ReactComponent as LImage2 } from './assets/_3.svg';
// import { ReactComponent as LImage3 } from './assets/_4.svg';
// import { ReactComponent as LImage4 } from './assets/_5.svg';
// import { ReactComponent as LImage5 } from './assets/_6.svg';
// import { ReactComponent as LImage6 } from './assets/_7.svg';
// import { ReactComponent as LImage7 } from './assets/_8.svg';
// import { ReactComponent as LImage8 } from './assets/_9.svg';
// import { ReactComponent as LImage9 } from './assets/_10.svg';
// import { ReactComponent as LImage10 } from './assets/_11.svg';
// import { ReactComponent as LImage11 } from './assets/_12.svg';
// console.log(LImage0);
// import lImage0 from './assets/_1.svg'
// import lImage1 from './assets/_2.svg'
// import lImage2 from './assets/_3.svg'
// import lImage3 from './assets/_4.svg'
// import lImage4 from './assets/_5.svg'
// import lImage5 from './assets/_6.svg'
// import lImage6 from './assets/_7.svg'
// import lImage7 from './assets/_8.svg'
// import lImage8 from './assets/_9.svg'
// import lImage9 from './assets/_10.svg'
// import lImage10 from './assets/_11.svg'
// import lImage11 from './assets/_12.svg'


export default function Corousel({children: images}){
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

const navImgsRE =[
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m18 15h-4v-4h-2v4h-4v2h4v4h2v-4h4z"/><path d="m21 26h-17a2.0023 2.0023 0 0 1 -2-2v-16a2.0023 2.0023 0 0 1 2-2h17a2.0023 2.0023 0 0 1 2 2v4.0566l5.4189-3.87a.9995.9995 0 0 1 1.5811.8134v14a.9995.9995 0 0 1 -1.5811.8135l-5.4189-3.8701v4.0566a2.0023 2.0023 0 0 1 -2 2zm-17-18v16.001l17-.001v-6a.9995.9995 0 0 1 1.5811-.8135l5.4189 3.8701v-10.1132l-5.4189 3.87a.9995.9995 0 0 1 -1.5811-.8134v-6z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.7,9.45a4.235,4.235,0,0,0,.3.3V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.752a4.235,4.235,0,0,0,.3-.3,4,4,0,0,0,.731-3.456L20.97,1.758A1,1,0,0,0,20,1H4a1,1,0,0,0-.97.758L1.972,5.994A4,4,0,0,0,2.7,9.45ZM13,21H11V16h2Zm6,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v6H5V10.9A3.989,3.989,0,0,0,8.914,9.61c.026.03.053.059.08.089A4.086,4.086,0,0,0,12.041,11a4.039,4.039,0,0,0,2.965-1.3c.027-.03.054-.059.08-.089A3.989,3.989,0,0,0,19,10.9ZM3.911,6.479,4.781,3H19.219l.87,3.479A2.029,2.029,0,0,1,18.12,9,2.041,2.041,0,0,1,16.1,7.14l-.042-.5a1,1,0,0,0-1.993.166v0a2.006,2.006,0,0,1-.529,1.539A2.059,2.059,0,0,1,11.959,9,2.029,2.029,0,0,1,9.937,6.806v0a1,1,0,0,0-.914-1.079.989.989,0,0,0-1.079.913l-.042.5A2.041,2.041,0,0,1,5.88,9,2.029,2.029,0,0,1,3.911,6.479Z"/></svg>,
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="none"  stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"><rect height="31.2" rx="2" width="39" x="4.5" y="8.4"/><rect height="23.2" rx="1" width="31" x="8.5" y="12.4"/><path d="m29.68 33.41h6.62v2.19h-6.62z"/><path d="m25.84 19a2.6 2.6 0 0 0 -3.68 0 2.61 2.61 0 1 0 4.46 1.86 2.54 2.54 0 0 0 -.8-1.86z"/><path d="m22 25.53h4a3 3 0 0 1 3 3v1.21a0 0 0 0 1 0 0h-10a0 0 0 0 1 0 0v-1.21a3 3 0 0 1 3-3z"/><path d="m17.42 21.47a2 2 0 0 0 -2.84 0 2 2 0 1 0 3.42 1.44 2 2 0 0 0 -.6-1.43z"/><path d="m19.34 27.14a2 2 0 0 0 -1.47-.65h-3.74a2 2 0 0 0 -2 2v1.25h6.87"/><path d="m33.42 21.47a2 2 0 0 0 -2.84 0 2 2 0 1 0 3.42 1.44 2 2 0 0 0 -.6-1.43z"/><path d="m29 29.74h6.86v-1.25a2 2 0 0 0 -2-2h-3.73a2 2 0 0 0 -1.47.65"/></g></svg>,
    <svg viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="m1311.326 891.546-61.666-61.666 107.294-107.407-159.698-159.698-107.52 107.633-61.553-60.311 384.338-384.904 282.127 281.45zm-419.463 417.884-383.323 384.902-283.143-281.45 384.339-384.903 61.214 61.214-110.005 109.892 159.699 159.699 110.117-110.005 61.102 60.65zm962.484-961.92-283.03-283.03c-88.546-86.288-231.19-85.95-317.93 1.016l-384.903 384.902c-87.53 87.642-87.53 230.061 0 317.704l61.666 61.778-99.502 99.502-60.31-60.198c-42.127-43.144-98.372-67.087-158.57-67.426h-1.355c-60.197 0-116.894 23.605-159.812 66.41l-384.903 385.016c-87.642 87.642-87.642 230.061 0 317.704l283.142 283.142c43.822 43.821 101.309 65.732 158.909 65.732 57.487 0 115.087-21.91 158.908-65.732l384.903-384.903c43.257-43.257 66.862-100.518 66.523-161.168-.452-60.197-24.396-116.442-66.523-157.665l-61.214-61.102 99.614-99.614 61.666 61.78c43.821 43.707 101.309 65.618 158.909 65.618 57.487 0 115.087-21.91 158.795-65.732l385.016-384.903c86.852-86.852 87.304-229.497 0-318.833z" fill-rule="evenodd"/></svg>
    ,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g ><path d="m6.67 14h-2.67c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h3.67c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"/><path d="m13.3302 10h-2.67c-1.10004 0-2.00004.9-2.00004 2v9c0 .55.45 1 1 1h4.67004c.55 0 1-.45 1-1v-9c0-1.1-.89-2-2-2z"/><path d="m20.0001 17h-2.67c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3.67c.55 0 1-.45 1-1v-2c0-1.1-.9-2-2-2z"/><path d="m15.0095 4.85047c.31-.31.43-.68.33-1s-.41-.55-.85-.62l-.96-.16c-.04 0-.13-.07-.15-.11l-.53-1.06c-.4-.81-1.31-.81-1.71 0l-.53 1.06c-.01.04-.1.11-.14.11l-.96005.16c-.44.07-.74.3-.85.62-.1.32.02.69.33 1l.74.75c.04.03.07.15.06.19l-.21.92c-.16.69.1 1 .27 1.12.17005.12.54005.28 1.15005-.08l.9-.53c.04-.03.17-.03.21 0l.89.53c.28.17.51.22.69.22.21 0 .36-.08.45-.14.17-.12.43-.43.27-1.12l-.21-.92c-.01-.05.02-.16.06-.19z"/></g></svg>
    ,<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M902.75 858.688L775.11 644.895c60.047-64.158 96.925-150.65 96.925-245.755 0-198.832-161.186-360.018-360.018-360.018S152 200.308 152 399.14c0 94.24 36.21 180.025 95.476 244.197l-.222-.243L118.53 858.752c-2.123 3.513-3.38 7.756-3.38 12.293 0 5.048 1.556 9.733 4.216 13.6l-.053-.08c4.453 6.363 11.748 10.473 20.002 10.473 1.312 0 2.6-.104 3.855-.304l-.14.018 96-15.688 35.033 89.688c3.37 8.446 11.168 14.453 20.448 15.182l.084.005 1.812.063c8.832-.013 16.547-4.784 20.72-11.887l.06-.113 126.27-218.733c20.523 4.28 44.108 6.73 68.265 6.73 23.457 0 46.373-2.31 68.535-6.715l-2.226.37 126.034 218.28c4.252 7.212 11.973 11.98 20.81 12h.002l1.812-.064c9.37-.742 17.17-6.744 20.505-15.025l.058-.162 35-89.687 96 15.687c1.174.203 2.526.32 3.904.32 13.255 0 24-10.746 24-24 0-4.55-1.265-8.803-3.463-12.427l.06.107zM300.594 904.75l-23.936-61.247c-3.634-9.002-12.3-15.238-22.422-15.238-1.34 0-2.655.11-3.936.32l.14-.02-64.22 10.5 96.525-161.737c32.008 26.557 69.46 47.95 110.265 62.2l2.524.77zM200 400c0-172.313 139.687-312 312-312s312 139.687 312 312-139.687 312-312 312c-172.23-.205-311.795-139.77-312-311.98V400zm570.816 428.5c-1.184-.207-2.547-.326-3.937-.326-10.1 0-18.74 6.255-22.257 15.102l-.057.162-23.872 61.248-94.46-163.572c43.446-14.778 81.032-35.97 113.79-62.833l-.632.504L835.06 839zM512 168c-128.13 0-232 103.87-232 232s103.87 232 232 232 232-103.87 232-232c-.14-128.073-103.927-231.86-231.987-232H512zm0 416c-101.62 0-184-82.38-184-184s82.38-184 184-184 184 82.38 184 184c-.11 101.576-82.424 183.89-183.99 184H512zm85.312-227.156h-47.75l-14.75-45.343c-3.97-8.824-12.686-14.858-22.812-14.858s-18.842 6.034-22.75 14.702l-.062.157-14.75 45.344h-47.717c-13.25.013-23.985 10.757-23.985 24.01 0 7.94 3.855 14.98 9.795 19.35l.066.047 38.625 28.063-14.75 45.344c-.75 2.224-1.185 4.786-1.185 7.45 0 13.245 10.738 23.982 23.983 23.982 5.303 0 10.205-1.722 14.176-4.637l-.067.047 38.625-28.03 38.625 28.03c3.902 2.858 8.798 4.572 14.093 4.572 13.262 0 24.013-10.75 24.013-24.013 0-2.646-.428-5.192-1.218-7.572l.05.17-14.782-45.344 38.656-28.062c6.006-4.417 9.86-11.457 9.86-19.398 0-13.252-10.736-23.996-23.985-24.01zm-76.72 63.562c-2.55-1.01-5.503-1.594-8.593-1.594s-6.045.585-8.758 1.65l.163-.056c.02-.38.034-.82.034-1.267 0-5.75-2.03-11.026-5.41-15.15l.033.042c5.866-1.59 10.72-5.192 13.88-10.004l.057-.09c3.22 4.903 8.07 8.506 13.77 10.055l.168.04c-3.348 4.082-5.377 9.357-5.377 15.107 0 .446.013.89.037 1.328l-.003-.06z"/></svg>
    ,<svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h48v48h-48z" fill="none"/><path d="m20 30h-12a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10a2 2 0 0 0 -2-2z"/><path d="m20 4h-12a2 2 0 0 0 -2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-18a2 2 0 0 0 -2-2z"/><path d="m40 4h-12a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10a2 2 0 0 0 -2-2z"/><path d="m40 22h-12a2 2 0 0 0 -2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-18a2 2 0 0 0 -2-2z"/></svg>
    ,<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m5 6c-1.644531 0-3 1.355469-3 3v14c0 1.644531 1.355469 3 3 3h22c1.644531 0 3-1.355469 3-3v-14c0-1.644531-1.355469-3-3-3zm0 2h22c.566406 0 1 .433594 1 1v14c0 .566406-.433594 1-1 1h-22c-.566406 0-1-.433594-1-1v-14c0-.566406.433594-1 1-1zm6 2c-2.199219 0-4 1.800781-4 4 0 1.113281.476563 2.117188 1.21875 2.84375-1.332031.902344-2.21875 2.4375-2.21875 4.15625h2c0-1.667969 1.332031-3 3-3s3 1.332031 3 3h2c0-1.71875-.886719-3.253906-2.21875-4.15625.742188-.726562 1.21875-1.730469 1.21875-2.84375 0-2.199219-1.800781-4-4-4zm7 1v2h8v-2zm-7 1c1.117188 0 2 .882813 2 2 0 1.117188-.882812 2-2 2-1.117187 0-2-.882812-2-2 0-1.117187.882813-2 2-2zm7 3v2h8v-2zm0 4v2h5v-2z"/></svg>
    ,<svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="m128 160h320v192h-320zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48h-480c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24h-336c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24z"/></svg>
    ,<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48h-192v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48v-144h-192zm144-208h-80v-48c0-25.6-22.4-48-48-48h-160c-25.6 0-48 22.4-48 48v48h-80c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0h-128v-32h128z"/></svg>
    ,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22.0957 12.5998c0-.5523-.4477-1-1-1s-1 .4477-1 1zm-10.6-8.6c.5523 0 1-.44771 1-1 0-.55228-.4477-1-1-1zm5.8 8.6c0-.5523-.4477-1-1-1s-1 .4477-1 1zm-5.8-3.8c.5523 0 1-.44771 1-1 0-.55228-.4477-1-1-1zm4.9497.07098c.3906-.39053.3906-1.02369 0-1.41421-.3905-.39053-1.0237-.39053-1.4142 0zm-5.6568 2.82842c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0zm11.3157-6.50528.7071.7071c.2679-.26783.3614-.664.2416-1.02333-.1198-.35934-.4323-.62016-.8073-.67372zm-3.8184 3.81837-.3162.94869c.3593.11982.7555.02625 1.0233-.24158zm-3.3941-3.39411-.7071-.70711c-.2678.26784-.3613.664-.2416 1.02334zm3.8184-3.81838.99-.14142c-.0536-.37496-.3144-.68748-.6738-.807259-.3593-.119778-.7555-.026255-1.0233.241579zm-2.9698 6.36397-.9487.31622c.0995.29861.3338.53292.6324.63246zm3.3941-3.39412-.99.14142c.0629.43998.4086.78568.8485.84853zm.9612 7.83015c0 4.7497-3.8504 8.6-8.6 8.6v2c5.8542 0 10.6-4.7458 10.6-10.6zm-8.6 8.6c-4.74966 0-8.60001-3.8503-8.60001-8.6h-1.999999c0 5.8542 4.745779 10.6 10.600009 10.6zm-8.60001-8.6c0-4.74964 3.85035-8.6 8.60001-8.6v-2c-5.85423 0-10.600009 4.74579-10.600009 10.6zm12.40001 0c0 2.0987-1.7013 3.8-3.8 3.8v2c3.2032 0 5.8-2.5967 5.8-5.8zm-3.8 3.8c-2.09869 0-3.80001-1.7013-3.80001-3.8h-2c0 3.2033 2.59675 5.8 5.80001 5.8zm-3.80001-3.8c0-2.0987 1.70132-3.8 3.80001-3.8v-2c-3.20326 0-5.80001 2.59675-5.80001 5.8zm7.33551-5.14323-4.2426 4.24263 1.4142 1.4142 4.2426-4.24262zm6.366-2.96976-3.8184 3.81838 1.4142 1.41421 3.8184-3.81838zm-5.7983 1.83848 3.8184-3.81838-1.4142-1.41421-3.8184 3.81837zm3.0033 1.73832-2.5456-.84853-.6325 1.89737 2.5456.84853zm-1.9132-.21607-.8485-2.54559-1.8974.63246.8486 2.54558zm1.0313-5.90631.4242 2.96984 1.9799-.28284-.4242-2.96985zm1.2727 3.81837 2.9699.42427.2828-1.9799-2.9698-.42427z"/></svg>
    ,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2a10 10 0 0 0 -7.35 16.76 10 10 0 0 0 14.7 0 10 10 0 0 0 -7.35-16.76zm0 18a8 8 0 0 1 -5.55-2.25 6 6 0 0 1 11.1 0 8 8 0 0 1 -5.55 2.25zm-2-10a2 2 0 1 1 2 2 2 2 0 0 1 -2-2zm8.91 6a8 8 0 0 0 -3.91-3.38 4 4 0 1 0 -6 0 8 8 0 0 0 -3.91 3.38 7.92 7.92 0 0 1 -1.09-4 8 8 0 0 1 16 0 7.92 7.92 0 0 1 -1.09 4z"/></svg>
  ]


    // Define current image state
    const [curr,setCurr] = useState(0);
    console.log(images)
    console.log(images[1])
    // Define prev and next functions
    const prev = () => setCurr((curr) =>  curr == 0? images[0].length - 1: curr - 1); 
    const next = () => setCurr((curr) => curr == images[0].length - 1 ? 0: curr + 1); 
    return (
        // FUll body of carousel 
        <div className="bg-[#032D46] py-24 text-white px-56 relative">
            <div className="mx-32  overflow-hidden">
                <div className='flex transition-all duration-300 ease-out' style={{transform: `translateX(-${curr * 100}%)`}}>
                    {images[0]}
                </div> 
            {/* Right and left icons */}
            {/* <div className='absolute inset-0 flex items-center justify-between p-1 '>
                <button onClick={prev} className='bg-transparent border-none hover:bg-[#ffffff6a] hover:text-black p-[1vw] rounded-full transition-all duration-300'>
                    <ChevronLeft size={48} / >
                </button>
                <button onClick={next} className='bg-transparent border-none hover:bg-[#ffffff6a] hover:text-black p-[1vw] rounded-full transition-all duration-300'>
                    <ChevronRight size={48} />
                </button>
            </div> */}
            <div className="absolute inset-0 flex items-center justify-between px-64 pb-24">
                <button
                    onClick={prev}
                    className="bg-transparent border-none hover:bg-[#ffffff6a] hover:text-black p-[1vw] rounded-full transition-all duration-300 "
                >
                    <ChevronLeft size={48} />
                </button>
                <button
                    onClick={next}
                    className="bg-transparent border-none hover:bg-[#ffffff6a] hover:text-black p-[1vw] rounded-full transition-all duration-300 "
                >
                    <ChevronRight size={48} />
                </button>
            </div>
            </div>
            {/* <div className='mx-16 bg-[#0F334B] rounded-2xl border-[#1F435B] border-2 mt-6 py-5 px-8'>
                <div className='flex items-center justify-center gap-14'>
                    {navImgs.map((img, i) =>(
                        <div className='${i == curr? "bg-[#F6670B]" : "bg-none"} size-10'>
                            <img key={i} src={img} className={`transition-all duration-300
                                ${i == 5 || i == 8 || i == 10 || i == 11? "min-w-7" : "w-10"}
                                ${i == curr? "bg-[#F6670B]" : "duration-300"}
                            `} />
                        </div>
                    ))}
                </div>
            </div> */}
            <div className=' bg-[#0F334B] rounded-2xl border-[#1F435B] border-2 mt-12 py-5 px-6 mx-32'>
                <div className='flex items-center justify-center gap-14'>
                    {navImgsRE.map((img, i) => (
                        <div
                            key={i}
                            className={`duration-200 ease-linear p-2 flex items-center justify-center rounded-full cursor-pointer ${
                                i === curr ? "bg-[#F6670B]" : "bg-transparent"
                            }
                            
                            `}
                            style={{ aspectRatio: "1 / 1" }} // Ensures a perfect circle
                        >
                            {React.cloneElement(img, {
                                className: i === curr? 'fill-white h-6 w-6 duration-300' : 'fill-gray-500 h-6 w-6 duration-300'
                            })}
                        </div>
                    ))}
                </div>  
            </div> 
            {/* <div className="bg-[#0F334B] rounded-2xl border-[#1F435B] border-2 mt-6 py-5 px-6 mx-32">
                <div className="flex items-center justify-center gap-14">
                    {navImgs.map((Icon, i) => (
                    <div
                        key={i}
                        className={`transition-all duration-300 p-2 flex items-center justify-center rounded-full ${
                        i === curr ? "bg-[#F6670B]" : "bg-transparent"
                        }`}
                        style={{ aspectRatio: "1 / 1" }} // Ensures a perfect circle
                    >
                        <Icon
                        width={32} // Control the size
                        height={32}
                        fill={i === curr ? "#FFFFFF" : "#7E7F7E"} // Control fill color
                        stroke={i === curr ? "#FFFFFF" : "#7E7F7E"} // Control stroke color
                        />
                    </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
} 

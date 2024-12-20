// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Nav from './Components/Nav.jsx'
import Hero from './Components/hero.jsx'

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


function App() {
const data = [
    {
      icon: bImage0,
      Title: "CREATE",
      divider: {divider},
      text: `<span style="color: orange;">U</span>TRADIE Create lets you share your hard-earned skills through mini-courses and guides. Don't sit on your expertise-others are already teaching and getting notices. Step up, grow your reputation, and become the expert everyone learns from.`
    },
    {
      icon: bImage1,
      Title: "MARKETPLACE",
      divider: {divider},
      text: "UTRADIE Marketplace is your trade skills shop. Browse courses made by industry pros, covering everything from gardening to auto repair. Learn what you need, when you need it. Get ahead, stay competitive, and keep your trade game strong." 
    },
    {
      icon: bImage2,
      Title: "LEARN",
      divider: {divider},
      text: "UTRADIE LEARN focuses on hands-on-skills that get you results. Master trades like plumbing and electrical work. Skip the fluff and focus on practical skills that work for you on the job. Get better, faster, and stay ahead with courses that are built to make a difference."
    },
    {
      icon: bImage3,
      Title: "CONNECTIONS",
      divider: {divider},
      text: "UTRADIE Connections is where tradies link up. Connect with mentors swap tips, and learn together in a community designed for growth. Don't miss the chance to build your network and level up with real support from others in the trade." 
    },
    {
      icon: bImage4,
      Title: "LEADERBOARDS",
      divider: {divider},
      text: "UTRADIE Leaderboards puts your skills in the spotlight. See how you rank against others in your trade with real-time leaderboards. Measure your progess, push your limits, and prove you're at the top. Stay sharp and keep improving." 
    },
    {
      icon: bImage5,
      Title: "COMPETITIONS",
      divider: {divider},
      text: "UTRADIE Competitionsn makes upskilling a race. Compete with others, push your limits, and see how far you can go. Don't get left behind-join the race, stay ahead, and integrate with UTRADIE Leaderboards for even more ways to see where you stand." 
    },
    {
      icon: bImage6,
      Title: "DASHBOARD",
      divider: {divider},
      text: "UTRADIE Dashboard makes learning simple and engaging. With its easy-to-use design, you can track your progess adn easily view key stats about your journey, helping you stay on top of your skills-all while keeping it fun and straightforward." 
    },
    {
      icon: bImage7,
      Title: "PASSPORT",
      divider: {divider},
      text: "UTRADIE Passport puts your career in your pocket. Store your skills, achievements, and certifications in one place. So you're always ready to show your values to clients or employers. If you're not keeping track, you're missing the change to stand out."
    },
    {
      icon: bImage8,
      Title: "EVENTS",
      divider: {divider},
      text: "UTRADIE Events keeps you connected to the latest trade-related happenings. Browse upcoming workshops, conferences, and more and easily RSVP to those that align with your career goals. These events help you grow, so it's best to stay in the loop." 
    },
    {
      icon: bImage9,
      Title: "JOBS",
      divider: {divider},
      text: "UTRADIE Jobs is your go-to place for the latest job opportunities in the trade world. Browse open positions, get all the details you need, and apply directly to the roles that match your skills. Staying up-to-date means staying ahead in your career-so don't let opportunities slip by." 
    },
    {
      icon: bImage10,
      Title: "GOALS",
      divider: {divider},
      text: "UTRADIE Goals help you set clear targets and track your progress every step of the way. Update your gaols as you go, stay focused, and see your career growth in real time. Without goals, you're just drifting-so make sure you're staying on track." 
    },
    {
      icon: bImage11,
      Title: "PROFILES",
      divider: {divider},
      text: "UTRADIE Profile for businesses lets you manage employee progress, set team goals, and access all UTRADIE features as a Manager. Monitor your team's development, track skills, and lead the way in growth." 
    },
  ]

  const navIcons = [
    lImage0,lImage1,lImage2,lImage3,lImage4,lImage5,lImage6,lImage7,lImage8,lImage9,lImage10,lImage11
  ]  



  
  return (
    <>
      <div className=''>
        <Nav/>
        <Hero />
        <div className='w-full h-12 bg-gradient-to-b from-[#97A4AF] to-[#11364D]'></div>
        <Carousel>
              {[data.map(dataSet => {
                return(
                  <div className='bg-[#0F334B] w-fit flex-shrink-0 rounded-2xl border-[#1F435B] border-2 py-8 px-12'>
                    <img src={dataSet.icon} className='mx-auto w-36' alt="" />
                    <div className='mt-8 w-fit flex flex-col items-center justify-center mx-auto'>
                      <h1 className='text-[#F6670B] text-8xl font-bold font-Arvo text-bold'>{dataSet.Title}</h1>
                      <img src={divider} className='w-[35%] h-1 mx-auto' alt="" />
                    </div>
                    <p className='text-3xl mt-12 text-left mx-auto tracking-wide' dangerouslySetInnerHTML={{__html: dataSet.text}}></p>
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
      </div>
    </>
  )
}

export default App



// export default function Nav(){
//     return(
//         <>
//             {/* The navigation is split into two: the left side with the logo */}
//             {/* Thr right side with the account and setting */}
//             {/* Main wrapper */}
//             {/* Colors */}
//             <div className="bg-[#032C47] p-4 pb-6 relative flex justify-between text-white text-lg">
//                 {/* Logo + nav links */}
//                 <div className="flex items-center">
//                     {/* Logo */}
//                     <div className="mr-12">
//                         {/* Insert logo here */}
//                         <h1 className="font-Arvo font-extrabold rounded-lg px-1 py-1.5 hover:text-white text-bge text-2xl"><span className="text-[#F86709]">U</span>TRADIE</h1>
//                     </div>
//                     {/* Divider line */}
//                     <div className="bg-white w-0.5 h-full"></div>
//                     {/* Nav links */}
//                     <nav className="flex gap-8 ml-12 transition-all">
//                         <div className="group relative">
//                             <a href="#" className="rounded-full group-hover:bg-[white] group-hover:text-[#032C47]  px-5 py-2">Growth & Learning<span className="inline-block ml-2 group-hover:rotate-180 group-hover:translate-y-0.5 duration-300">&#x25BC;</span></a>
//                             <div className="absolute left-2 hidden mt-2 space-y-2 bg-white z-20 shadow-lg group-hover:block w-48 rounded-lg p-4">
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>🎥</span> {/* Icon for "Create" */}
//                                     <span>Create</span>
//                                 </a>
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>📚</span> {/* Icon for "Learn" */}
//                                     <span>Learn</span>
//                                 </a>
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>🎯</span> {/* Icon for "Goals" */}
//                                     <span>Goals</span>
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="relative group">
//                             <a href="#" className="rounded-full group-hover:bg-[white] group-hover:text-[#032C47] px-5 py-2">Communication & Social<span className="inline-block ml-2 group-hover:rotate-180 group-hover:translate-y-0.5 duration-300">&#x25BC;</span></a>
//                             <div className="absolute z-20 hidden left-4 mt-2 spacy-y-2 bg-white shadow-lg group-hover:block w-52     rounded-lg p-4 ">
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Message</span>
//                                     <span></span>
//                                 </a>
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Connection</span>
//                                     <span></span>
//                                 </a>
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Events</span>
//                                     <span></span>
//                                 </a>
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Competitions</span>
//                                     <span></span>
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="relative group">
//                             <a href="#" className="rounded-full  group-hover:bg-[white] group-hover:text-[#032C47] px-5 py-2">Opportunities<span className="inline-block ml-2 group-hover:rotate-180 group-hover:translate-y-0.5 duration-300">&#x25BC;</span></a>
//                             <div className="absolute z-20 hidden left-1 mt-2 spacy-y-2 bg-white shadow-lg group-hover:block w-40 rounded-lg p-4 ">
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Jobs</span>
//                                     <span></span>
//                                 </a>
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Market Place</span>
//                                     <span></span>
//                                 </a>
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Affiliate</span>
//                                     <span></span>
//                                 </a>
//                             </div>
//                         </div>
//                     </nav>
                    
//                 </div>
//                 {/* Account setting and User name */}
//                 <div className="flex items-center pr-4">
//                     <div className="mr-8 group relative">
//                         <a href="#" className="rounded-full  group-hover:bg-[white] group-hover:text-[#032C47] px-5 py-2">Account & Setting<span className="inline-block ml-2 group-hover:rotate-180 group-hover:translate-y-0.5 duration-300">&#x25BC;</span></a>
//                         <div className="absolute z-30 hidden left-2 mt-2 spacy-y-2 bg-white shadow-lg group-hover:block w-48 rounded-lg p-4 ">
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Message</span>
//                                     <span></span>
//                                 </a>
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Connection</span>
//                                     <span></span>
//                                 </a>
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Events</span>
//                                     <span></span>
//                                 </a>
//                                 <a href="#" className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]">
//                                     <span>Competitions</span>
//                                     <span></span>
//                                 </a>
//                             </div>
//                     </div>
//                     <div className="bg-white w-0.5 h-full"></div>
//                     <p className="ml-8">Amir Getnet</p>
//                 </div>
//             </div>
//         </>
//     )
// }

import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      {/* The navigation is split into two: the left side with the logo */}
      {/* The right side with the account and setting */}
      {/* Main wrapper */}
      {/* Colors */}
      <div className="bg-[#032C47] p-4 pb-6 relative flex justify-between text-white text-lg">
        {/* Logo + nav links */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-12">
            <h1 className="font-Arvo font-extrabold rounded-lg px-1 py-1.5 hover:text-white text-bge text-2xl">
              <span className="text-[#F86709]">U</span>TRADIE
            </h1>
          </div>
          {/* Divider line */}
          <div className="bg-white w-0.5 h-full"></div>
          {/* Nav links */}
          <nav className="flex gap-8 ml-12 transition-all relative z-50">
            {/* Growth & Learning Dropdown */}
            <div className="group relative">
              <Link
                to="/growth-learning"
                className="rounded-full group-hover:bg-[white] group-hover:text-[#032C47] px-5 py-2"
              >
                Growth & Learning
                <span className="inline-block ml-2 group-hover:rotate-180 group-hover:translate-y-0.5 duration-300">&#x25BC;</span>
              </Link>
              <div className="absolute left-2 hidden mt-2 space-y-2 bg-white z-50 shadow-lg group-hover:block w-48 rounded-lg p-4">
                <Link
                  to="/growth-learning/create"
                  className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
                >
                  <span>🎥</span> <span>Create</span>
                </Link>
                <Link
                  to="/growth-learning/learn"
                  className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
                >
                  <span>📚</span> <span>Learn</span>
                </Link>
                <Link
                  to="/growth-learning/goals"
                  className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
                >
                  <span>🎯</span> <span>Goals</span>
                </Link>
              </div>
            </div>

            {/* Communication & Social Dropdown */}
            <div className="relative group">
              <Link
                to="/communication-social"
                className="rounded-full group-hover:bg-[white] group-hover:text-[#032C47] px-5 py-2"
              >
                Communication & Social
                <span className="inline-block ml-2 group-hover:rotate-180 group-hover:translate-y-0.5 duration-300">&#x25BC;</span>
              </Link>
              <div className="absolute z-20 hidden left-4 mt-2 space-y-2 bg-white shadow-lg group-hover:block w-52 rounded-lg p-4">
                <Link
                  to="/communication-social/message"
                  className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
                >
                  <span>Message</span>
                </Link>
                <Link
                  to="/communication-social/connection"
                  className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
                >
                  <span>Connection</span>
                </Link>
                <Link
                  to="/communication-social/events"
                  className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
                >
                  <span>Events</span>
                </Link>
                <Link
                  to="/communication-social/competitions"
                  className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
                >
                  <span>Competitions</span>
                </Link>
              </div>
            </div>

            {/* Opportunities Dropdown */}
            <div className="relative group">
              <Link
                to="/opportunities"
                className="rounded-full group-hover:bg-[white] group-hover:text-[#032C47] px-5 py-2"
              >
                Opportunities
                <span className="inline-block ml-2 group-hover:rotate-180 group-hover:translate-y-0.5 duration-300">&#x25BC;</span>
              </Link>
              <div className="absolute z-20 hidden left-1 mt-2 space-y-2 bg-white shadow-lg group-hover:block w-40 rounded-lg p-4">
                <Link
                  to="/opportunities/jobs"
                  className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
                >
                  <span>Jobs</span>
                </Link>
                <Link
                  to="/opportunities/marketplace"
                  className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
                >
                  <span>Market Place</span>
                </Link>
                <Link
                  to="/opportunities/affiliate"
                  className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
                >
                  <span>Affiliate</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Account setting and User name */}
        <div className="flex items-center pr-4">
          <div className="mr-8 group relative">
            <Link
              to="/account-settings"
              className="rounded-full group-hover:bg-[white] group-hover:text-[#032C47] px-5 py-2"
            >
              Account & Setting
              <span className="inline-block ml-2 group-hover:rotate-180 group-hover:translate-y-0.5 duration-300">&#x25BC;</span>
            </Link>
            <div className="absolute z-30 hidden left-2 mt-2 space-y-2 bg-white shadow-lg group-hover:block w-48 rounded-lg p-4">
              <Link
                to="/account-settings/message"
                className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
              >
                <span>Message</span>
              </Link>
              <Link
                to="/account-settings/connection"
                className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
              >
                <span>Connection</span>
              </Link>
              <Link
                to="/account-settings/events"
                className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
              >
                <span>Events</span>
              </Link>
              <Link
                to="/account-settings/competitions"
                className="flex items-center space-x-2 text-gray-800 rounded-lg px-1 py-1.5 hover:text-white hover:bg-[#F86709]"
              >
                <span>Competitions</span>
              </Link>
            </div>
          </div>
          <div className="bg-white w-0.5 h-full"></div>
          <p className="ml-8">Amir Getnet</p>
        </div>
      </div>
    </>
  );
}

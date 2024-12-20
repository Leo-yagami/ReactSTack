import {ChevronLeft, ChevronRight} from 'react-feather';
import { useState } from 'react';

// Importing images
import lImage0 from './assets/images/sm_icon0.png'
import lImage1 from './assets/images/sm_icon1.png'
import lImage2 from './assets/images/sm_icon2.png'
import lImage3 from './assets/images/sm_icon3.png'
import lImage4 from './assets/images/sm_icon4.png'
import lImage5 from './assets/images/sm_icon5.png'
import lImage6 from './assets/images/sm_icon6.png'
import lImage7 from './assets/images/sm_icon7.png'
import lImage8 from './assets/images/sm_icon8.png'
import lImage9 from './assets/images/sm_icon9.png'
import lImage10 from './assets/images/sm_icon10.png'
import lImage11 from './assets/images/sm_icon11.png'


export default function Corousel({children: images}){
    const navImgs = [lImage0,lImage1,lImage2,lImage3,lImage4,lImage5,lImage6,lImage7,lImage8,lImage9,lImage10,lImage11];
    // Define current image state
    const [curr,setCurr] = useState(0);
    console.log(images)
    console.log(images[1])
    // Define prev and next functions
    const prev = () => setCurr((curr) =>  curr == 0? images[0].length - 1: curr - 1); 
    const next = () => setCurr((curr) => curr == images[0].length - 1 ? 0: curr + 1); 
    return (
        // FUll body of carousel 
        <div className="bg-[#032D46] py-24 text-white px-72">
            <div className="overflow-hidden mx-32 relative">
                <div className='flex transition-all duration-300 ease-out' style={{transform: `translateX(-${curr *100}%)`}}>
                    {images[0]}
                </div> 
            {/* Right and left icons */}
            <div className='absolute inset-0 flex items-center justify-between p-1 '>
                <button onClick={prev} className='bg-transparent border-none hover:bg-[#ffffff6a] hover:text-black p-[1vw] rounded-full transition-all duration-300'>
                    <ChevronLeft size={48} / >
                </button>
                <button onClick={next} className='bg-transparent border-none hover:bg-[#ffffff6a] hover:text-black p-[1vw] rounded-full transition-all duration-300'>
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
            <div className=' bg-[#0F334B] rounded-2xl border-[#1F435B] border-2 mt-6 py-5 mx-32'>
                <div className='flex items-center justify-center gap-14'>
                    {navImgs.map((img, i) => (
                        <div
                            key={i}
                            className={`transition-all duration-300 w-12 flex items-center justify-center rounded-full ${
                                i === curr ? "bg-[#F6670B]" : "bg-transparent"
                            }
                            
                            `}
                            style={{ aspectRatio: "1 / 1" }} // Ensures a perfect circle
                        >
                            <img
                                src={img}
                                className="max-w-full max-h-full object-contain"
                                alt={`Icon ${i}`}
                            />
                        </div>
                    ))}
                </div>  
            </div> 
        </div>
    )
} 

import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
 
 export default function Hero(){
    return(
        <section id="Hero" className="relative flex items-center pl-8 bg-gradient-to-b from-white to-[#91A3AF] min-h-[calc(100vh-4.5rem)]">
        {/* The hero has two sections, the text and images section */}
        {/* Text section */}
        <div className='-mt-16'>
            <h1 className="text-8xl text-[#000000] font-Arvo font-bold">Shaping Futures.</h1>
            <h1 className="text-8xl mt-4 text-[#F86709] font-Arvo font-bold">Building Trades<span className="text-[#000000]">.</span></h1>
            <p className="text-3xl max-w-4xl mt-6 ">Empowering the Future of Trades: Connect, Learn, and Build with <span className="text-[#F86709]">U</span>TRADIE - Where Opportunities Meet Skilled Hands</p>
            {/* Button group */}
            <div className="mt-8 flex gap-6 text-white">
                <button className="py-4 px-11 bg-[#032C47] rounded-full text-3xl shadow-xl hover:shadow-2xl active:translate-y-1 duration-300">Sign Up</button>
                <button className="py-4 px-11 bg-[#E97132] rounded-full text-3xl shadow-xl hover:shadow-2xl active:translate-y-1 duration-300">Log In</button>
            </div>
        </div>
        {/* Hard Part: Images Section */}
        <div className='relative h-[700px] w-[1000px] mt-16 -mx-12'>
            <div>
                <img src={image1} alt="" className='absolute w-[250px] h-[250px] z-20 top-[2rem] left-[10rem] hover:-translate-y-2 duration-300'/>
            </div>
            <div className='overflow-hidden'>
                <img src={image2} alt="" className='absolute w-[550px] h-[550px] z-20 -top-[5.5rem] -right-[1rem] hover:-translate-y-2 duration-300'/>
            </div>
            <div>
                <img src={image3} alt="" className='absolute w-[300px] h-[300px] z-20 bottom-[1rem] left-[8rem] hover:-translate-y-2 duration-300'/>
            </div>
            <div>
                <img src={image4} alt="" className='absolute w-[250px] h-[250px] z-20 right-[11rem] bottom-[0rem] hover:-translate-y-2 duration-300'/>
            </div> 
            <div>
                <img src={image5} alt="" className='absolute w-[450px] h-[450px] z-10 top-[calc(12rem-4.5rem)] left-[calc(20rem-4.5rem)] '/>
            </div>
        </div>
        </section>
    )
 }
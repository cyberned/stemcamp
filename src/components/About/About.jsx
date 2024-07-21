// import { useRef, useState } from "react";
// import { IconCirclePause, IconPlayCircle } from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import herobg from "..//..//assets/videos/herobg.mp4";

const About = () => {
    // const[isPlaying,  setIsPlaying] = useState(true)
    // const video = useRef(null)

    // function handlClick(){
    //     if(isPlaying){
    //         video.current.pause()
    //         setIsPlaying(prev => !prev)
    //     }
    //     else{
    //         video.current.play()
    //         setIsPlaying(prev => !prev)
    //     }
        
    // }
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 lg:px-16 md:px-10 px-5 py-20" id="about">
      <div>
        <h1 className="sm:text-[35px] text-[30px] font-bold mb-2">A Summer of Innovation</h1>
        <p>
        Welcome to our Summer of Innovation, where creativity meets cutting-edge technology! 
        This summer, we invite you to dive into the exciting realms of the Internet of Things (IoT), 
        3D printing, and embedded systems. For children ages 10 to 18, this program is designed 
        to inspire, educate, and innovate.
          <br />
          <br />
          Our Summer of Innovation is a comprehensive program that combines hands-on workshops, 
          expert-led training, and collaborative projects. Participants will have the opportunity 
          to learn from industry professionals, gain practical experience, and develop skills that 
          are essential for the future of technology.
          <br />
          <br />
          The Summer of Innovation is more than just a learning experience; it’s a journey into the 
          future of technology. By participating, you’ll not only acquire new skills but also ignite 
          your passion for innovation and creativity. Join us for an unforgettable summer and be part 
          of the next generation of tech pioneers!
          
        </p>
      </div>
      <div>
        <div className="relative h-[350px] w-full flex items-center justify-center">
          <video
            id="video"
            className=" absolute -z-10 right-0 bottom-0 w-full h-full object-cover"
            loop
            autoPlay
            muted
            // ref={video}
          >
            <source src={herobg} type="video/mp4" />
          </video>
          {/* <button className="text-white text-[80px]" onClick={handlClick}>{isPlaying ? <IconCirclePause/>  : <IconPlayCircle/>}</button> */}
        </div>
        <div className="flex flex-col items-center gap-5 mt-7">
          <h2 className="font-semibold text-lg text-center">Register to Attend our Summer Camp</h2> 
          <Link to="/register"><button className="border mb-10 bg-black px-7 py-3 text-white font-medium text-[16px] rounded hover:bg-[#F7CB0D] hover:text-black hover:border-black transition-all">Regsiter Here</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;

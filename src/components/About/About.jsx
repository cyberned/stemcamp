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
        <h1 className="sm:text-[35px] text-[30px] font-bold mb-2">About STEM AFRICA FEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          eaque harum sunt corporis ad culpa vel magni. Dignissimos, aliquid
          voluptas, rerum quidem voluptate ipsum cumque quos rem quis provident
          fuga.
          <br />
          <br />
          Neque tenetur aperiam fugiat. Quibusdam officiis quis ullam,
          architecto aspernatur facere vero dignissimos enim error iste qui
          eveniet! A enim minima qui, ut saepe labore aspernatur. Perferendis
          delectus doloribus dolore?
          <br />
          <br />
          Nesciunt nam quisquam facilis numquam suscipit dicta nulla vel
          doloremque esse illo explicabo, eveniet aliquid sapiente possimus
          itaque, perferendis obcaecati minima ipsum eius alias voluptates
          mollitia! Deserunt quaerat nam repellendus.
          <br />
          <br />
          Vitae perspiciatis eius inventore aperiam, atque delectus quisquam,
          odit dolore rem vero laudantium quo amet obcaecati labore, impedit
          velit consectetur at ducimus est fugiat! Placeat repellat corrupti
          ratione autem quod!
          <br />
          <br />
          Nisi repellendus consequatur eius minus aperiam impedit animi hic et
          dicta fugit deserunt quae natus quisquam laudantium eligendi ratione
          quibusdam saepe, beatae blanditiis sequi? Ducimus quia debitis dolorum
          libero incidunt.
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
          <h2 className="font-semibold text-lg text-center">Register to Attend STEM AFRICA FEST 2024</h2> 
          <Link to="/register"><button className="border mb-10 bg-black px-7 py-3 text-white font-medium text-[16px] rounded hover:bg-[#F7CB0D] hover:text-black hover:border-black transition-all">Regsiter Here</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;

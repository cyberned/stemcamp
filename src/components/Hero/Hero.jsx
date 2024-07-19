import { useState, useRef } from "react";
import herobg from "..//..//assets/videos/herobg.mp4";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [timedays, setDays] = useState("00")
  const [timehours, setHours] = useState("00")
  const [timeminutes, setMinutes] = useState("00")
  const[timeFinished, setTimeFinished] = useState(false)

  let counter = useRef()
  useEffect(()=>{
    startTimer()
    return()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(counter.current)
    }
  })
  function startTimer (){
  //Set Date we're counting down to
    const countDownDate = new Date("Aug 5, 2024 09:00:00").getTime();

    counter = setInterval(()=>{
      const now = new Date().getTime();

      // Find the timeLeft between now and the count down date
      let timeLeft = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      // const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


      let d = days < 10 ? "0"+ days : days
      let h = hours < 10 ? "0"+ hours : hours
      let m = minutes < 10 ? "0"+ minutes : minutes


      // If the count down is finished
      if (timeLeft <= 0) {
        clearInterval(counter.current);
        setDays("00")
        setHours("00")
        setMinutes("00")
        setTimeFinished(true)
      }
      else{
        setDays(d)
        setHours(h)
        setMinutes(m)
      }
    }, 1000)
  }
    

  return (
    <header className="relative text-white text-center after:content[''] after:w-full after:absolute after:top-0 after:right-0 after:bg-slate-900 after:-z-10 after:h-full after:opacity-60" id="home">
      <video
        className="absolute -z-20 right-0 bottom-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
      >
        <source src={herobg} type="video/mp4" />
      </video>
      <Navbar />
      <div className="sm:px-5 px-3 sm:w-[500px] w-full mx-auto py-9">
        <h2 className="md:text-[35px] sm:text-[30px] text-[25px] font-medium mb-5">
          Abuja: Mon August 5th 2024
        </h2>
        <h2 className="md:text-[35px] sm:text-[30px] text-[25px] font-medium mb-1">9:00 AM</h2>
        <hr />
      </div>
      <div className="lg:text-[65px] md:text-[60px] px-2 sm:text-[50px] text-[40px] font-semibold md:w-[700px] w-full mx-auto mb-5">
        <h2>IGNITING CHANGE THROUGH CLEANTECH AND STEAM</h2>
      </div>
      {timeFinished ? 
        <div className="text-center mb-5">
          <h1 className="font-semibold text-[40px] text-[#F7CB0D] uppercase">It&apos;s Here !!!!!!!!!!!!!!!!!!</h1>
        </div>
       :
        <div className="flex items-center gap-20 justify-center mb-5">
          <div>
            <h2 className="lg:text-[65px] md:text-[60px] text-[50px] text-[#F7CB0D] font-medium">{timedays}</h2>
            <h3>Days</h3>
          </div>
          <div>
            <h2 className="lg:text-[65px] md:text-[60px] text-[50px] text-[#F7CB0D] font-medium">{timehours}</h2>
            <h3>Hours</h3>
          </div>
          <div>
            <h2 className="lg:text-[65px] md:text-[60px] text-[50px] text-[#F7CB0D] font-medium">{timeminutes}</h2>
            <h3>Minutes</h3>
          </div>
        </div>
      }
      <Link to="/register"><button className="border mb-10 bg-white px-7 py-3 text-black font-medium sm:text-[16px] text-[15px] rounded hover:bg-transparent hover:text-white hover:border-white transition-all">Register Here</button></Link>
      
    </header>
  );
};

export default Hero;

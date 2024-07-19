import { useState } from "react"
import { IconFacebook, IconInstagram, IconLinkedin, IconTwitter } from "../../assets/icons/icons"
import logo from "..//..//assets/images/logoimg.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { useEffect } from "react"

const Navbar = () => {
    const [fixed, setFixed] = useState(false) //state to manage sticky navbar
    useEffect(()=>{
        function Fixed(){
            if(window.scrollY >= 110){
                setFixed(true)

            }
            else{
                setFixed(false)
            }
        }
        window.addEventListener("scroll" , Fixed)
    },[setFixed])
  return (
    <nav className={fixed ?"fixed top-0 w-full bg-transparent backdrop-blur-lg z-40  shadow-lg after:content[''] after:w-full after:absolute after:top-0 after:right-0 after:bg-slate-900 after:-z-10 after:h-full after:opacity-60" : "bg-transparent text-white " }>
        <div className="flex items-center justify-between lg:gap-5 gap-2 lg:px-20 sm:px-5 px-2 py-2">
            <div><a href="/"><img src={logo} alt="Logo" className="sm:w-[140px] w-[120px]" /></a></div>
            <div>
                <ul className="md:flex hidden items-center gap-5">
                    <li className="hover:text-[#F7CB0D] font-medium transition-all"><AnchorLink href="#home">Home</AnchorLink></li>
                    <li className="hover:text-[#F7CB0D] font-medium transition-all"><AnchorLink href="#about">About</AnchorLink></li>
                    <li className="hover:text-[#F7CB0D] font-medium transition-all"><AnchorLink href="#pricing">Pricing</AnchorLink></li>
                    <li className="hover:text-[#F7CB0D] font-medium transition-all"><AnchorLink href="#faq">FAQs</AnchorLink></li>
                </ul>
            </div>
            <div className="flex items-center sm:gap-4 gap-2">
                <a href="/"><div className="flex items-center justify-center rounded-full bg-transparent border px-2 py-2 text-[17px] hover:bg-white hover:text-blue-600 transition-all"><IconFacebook/></div></a>
                <a href="/"><div className="flex items-center justify-center rounded-full bg-transparent border px-2 py-2 text-[17px] hover:bg-white hover:text-blue-600 transition-all"><IconInstagram/></div></a>
                <a href="/"><div className="flex items-center justify-center rounded-full bg-transparent border px-2 py-2 text-[17px] hover:bg-white hover:text-blue-600 transition-all"><IconTwitter/></div></a>
                <a href="/"><div className="flex items-center justify-center rounded-full bg-transparent border px-2 py-2 text-[17px] hover:bg-white hover:text-blue-600 transition-all"><IconLinkedin/></div></a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

// fixed top-0 w-full z-30
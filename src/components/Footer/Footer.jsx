import { IconFacebook, IconInstagram, IconLinkedin, IconTwitter } from "../../assets/icons/icons"

const Footer = () => {
  return (
    <div className="flex items-center sm:justify-between justify-center gap-5  flex-wrap md:px-20 px-10 py-10">
        <h3 className="text-center">Contact Us: stemcamp@bt2spec.com || 08033653605</h3>
        <div className="flex items-center sm:gap-4 gap-2 text-white">
            <a href="https://facebook.com/bt2spec" target="blank" rel="noreferrer"><div className="flex items-center justify-center rounded-full border px-2 py-2 text-[17px] bg-[#3b5998]"><IconFacebook/></div></a>
            <a href="https://instagram.com/bt2spec" target="blank" rel="noreferrer"><div className="flex items-center justify-center rounded-full border px-2 py-2 text-[17px] bg-black"><IconInstagram/></div></a>
            <a href="https://twitter.com/bt2spec" target="blank" rel="noreferrer"><div className="flex items-center justify-center rounded-full border px-2 py-2 text-[17px] bg-blue-500"><IconTwitter/></div></a>
            <a href="https://linkedin.com/company/bt2spec" target="blank" rel="noreferrer"><div className="flex items-center justify-center rounded-full border px-2 py-2 text-[17px] bg-[#0077B5]"><IconLinkedin/></div></a>
        </div>
    </div>
  )
}

export default Footer
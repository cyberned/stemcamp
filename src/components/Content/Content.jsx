/* eslint-disable react/prop-types */
import contentbg from "..//..//assets/images/contentbg.jpeg"
function ContentCard({ title, description}) {
  return (
    <div className="border md:px-10 px-5 py-5 rounded-lg min-h-[320px] bg-transparent backdrop-blur-lg">
      <h1 className="sm:text-[30px] text-[25px]">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

const Content = () => {
  return (
    <div className=" text-slate-100 py-20 lg:px-20 md:px-10 px-5"
    style={{
      backgroundImage: `url(${contentbg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // backgroundAttachment: "fixed"
    }}
    >
      <h1 className="text-[#F7CB0D] text-center mb-10 md:text-[40px] sm:text-[35px] text-[30px] font-medium">
        Our Summer of Innovation Will Comprise Of:
      </h1>

      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
        <ContentCard
          title="3D Printing"
          description="Unleash Your Creativity. 3D printing is a game-changer in manufacturing 
          and design. It allows you to bring your ideas to life, layer by layer, with precision 
          and customisation. Participants would learn the basics of 3D Printing, Learn about different 
          types of 3D printers and materials, get hands-on with CAD (Computer-Aided Design) software 
          to create 3D models, understand the printing process from start to finish, Discover how 3D 
          printing is used in fields like medicine, aerospace, and art."
/>
        <ContentCard
          title="Internet of Things"
          description="Master the Heart of Technology. Embedded systems are the hidden heroes in many of 
          the devices we use every day. These specialized computer systems are designed to perform 
          dedicated functions with reliability and efficiency. Participants would learn what embedded 
          systems are and where they are used, get familiar with the brains behind embedded systems, 
          write and debug code for embedded systems using platforms like Arduino and Raspberry Pi, 
          design and build embedded systems projects, such as automated robots and smart gadgets.
"
        />
        <ContentCard
          title="Entrepreneurship"
          description="Gain practical experience with state-of-the-art tools and technologies, 
          learn from industry experts and experienced mentors, work on real-world projects in teams, 
          fostering collaboration and innovation, develop skills that are highly valued in today’s 
          job market connect with like-minded individuals and professionals in the tech community."
        />
        
      </div>
    </div>
  );
};

export default Content;

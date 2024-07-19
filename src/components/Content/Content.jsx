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
        STEM Africa Fest 2024 Will Comprise Of:
      </h1>

      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
        <ContentCard
          title="STEAM Training For Teachers"
          description="There will be dedicated zone to teach key STEAM concepts to teachers and educators to drive the sustainability of the STEAM movement"
        />
        <ContentCard
          title="STEAM Training For Teachers"
          description="Different subject matter experts in the Technology space around Africa will sit at a panel session to discuss various topics in STEAM. Children and parents will have the opportunity to attend these specially designed panel sessions covering topics on technology, careers in tech, gaming, VR/AR, etc."
        />
        <ContentCard
          title="STEAM Training For Teachers"
          description="There will be dedicated zone to teach key STEAM concepts to teachers and educators to drive the sustainability of the STEAM movement"
        />
        <ContentCard
          title="STEAM Training For Teachers"
          description="There will be dedicated zone to teach key STEAM concepts to teachers and educators to drive the sustainability of the STEAM movement"
        />
        <ContentCard
          title="STEAM Training For Teachers"
          description="Different subject matter experts in the Technology space around Africa will sit at a panel session to discuss various topics in STEAM. Children and parents will have the opportunity to attend these specially designed panel sessions covering topics on technology, careers in tech, gaming, VR/AR, etc."
        />
        <ContentCard
          title="STEAM Training For Teachers"
          description="There will be dedicated zone to teach key STEAM concepts to teachers and educators to drive the sustainability of the STEAM movement"
        />
      </div>
    </div>
  );
};

export default Content;

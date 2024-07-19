/* eslint-disable react/prop-types */

function Questions({question, answer, id}){
  return(
    <div className="relative">
        <input type="checkbox" id={id} className="hidden peer" />
          <label className="block sm:px-5 px-2 py-5 cursor-pointer sm:text-[20px] text-[18px] w-[90%] font-medium " htmlFor={id}>{question}
            <svg className="w-5 h-5 absolute top-7 rotate-45 transition-all right-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg> 
          </label>
          <hr/>
          <div className="overlay px-5 max-h-0 overflow-hidden transition-all peer-checked:max-h-[600px] ">
            <p className="py-4">{answer}</p>
            <hr/>
          </div>
    </div>
  )
}

const Faq = () => {
  return (
      <div className="sm:px-10 px-5 py-20 bg-slate-100 " id="faq">
          <div className="text-center">
              <h1 className="md:text-[45px] sm:text-[40px] text-[35px] mb-3 font-semibold">Frequently Asked Questions</h1>
              <p className="sm:w-[450px] w-full mb-10 mx-auto">Can&apos;t find what you&apos;re looking for? Our FAQ section is designed to provide quick answers to your most pressing questions</p>
          </div>
          
          <div className="border lg:w-[800px] w-full mx-auto shadow-lg rounded-2xl sm:px-10 px-5 pt-3 bg-white">
              <Questions
              id="1"
              question="Who can attend the Summer STEM Camp?"
              answer="he camp is open to students aged 10-18 who have a passion for STEM subjects. 
              We welcome beginners as well as those with prior experience in STEM."
              />
              <Questions
              id="2"
              question="When and where does the camp take place?"
              answer="The camp runs from 5th of August to 9th of September 2024 and will be held at Wuye Abuja.
               Detailed schedules and venue information will be provided upon registration."
              />
              <Questions
              id="3"
              question="What are the camp hours?"
              answer="The camp operates from 9:00 AM to 2:00 PM, Monday through 
              Saturday on alternate days. Participants can choose from available option of Monday,
              Wednesday and Friday or Teusday, Thursday and Saturday"
              />
              <Questions
              id="4"
              question="What activities will my child participate in?"
              answer="Participants will engage in a variety of STEM activities, including robotics, coding, 
              3D printing, engineering challenges, and science experiments. Each week will have a different 
              theme to keep the experience fresh and exciting."
              />
              <Questions
              id="5"
              question="Who are the camp instructors?"
              answer="Our instructors are experienced educators and professionals in the STEM fields. 
              They are passionate about teaching and inspiring the next generation of innovators."
              />                 
              <Questions
              id="6"
              question="Will my child need to bring any materials or equipment?"
              answer="All training materials would be provided. However it is mandatory for each child to come 
              with a functional computer to install all applications that would be used for coding to ensure
              full participation."
              /> 
          </div>
      </div>
  )
}

export default Faq
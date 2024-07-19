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
                question="What is the STEM Africa Fest?"
                answer="The STEM Africa Fest is a large-scale event that celebrates Science, Technology, Engineering, Arts, and Mathematics (STEAM) through interactive exhibits, workshops, and activities."
                />
                <Questions
                id="2"
                question="What is the STEM Africa Fest?"
                answer="The STEM Africa Fest is a large-scale event that celebrates Science, Technology, Engineering, Arts, and Mathematics (STEAM) through interactive exhibits, workshops, and activities."
                />
                <Questions
                id="3"
                question="What is the STEM Africa Fest?"
                answer="The STEM Africa Fest is a large-scale event that celebrates Science, Technology, Engineering, Arts, and Mathematics (STEAM) through interactive exhibits, workshops, and activities."
                />
                <Questions
                id="4"
                question="What is the STEM Africa Fest?"
                answer="The STEM Africa Fest is a large-scale event that celebrates Science, Technology, Engineering, Arts, and Mathematics (STEAM) through interactive exhibits, workshops, and activities."
                />
                <Questions
                id="5"
                question="What is the STEM Africa Fest?"
                answer="The STEM Africa Fest is a large-scale event that celebrates Science, Technology, Engineering, Arts, and Mathematics (STEAM) through interactive exhibits, workshops, and activities."
                />                 
                <Questions
                id="6"
                question="What is the STEM Africa Fest?"
                answer="The STEM Africa Fest is a large-scale event that celebrates Science, Technology, Engineering, Arts, and Mathematics (STEAM) through interactive exhibits, workshops, and activities."
                /> 
            </div>
        </div>
    )
  }
  
  export default Faq
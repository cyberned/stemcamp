import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Regsiter = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const[emailIsInvalid, setEmailIsInvalid] = useState(false)
  const[phoneNoIsInvalid, setphoneNoIsInvalid] = useState(false)
  const[ageIsInvalid, setAgeIsInvalid] = useState(false)

  const[enteredValues, setEnteredvalues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    Useraddress:"",
    phone:"",
    age: "",
    sex:""
  })

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  function handleSubmit(e){
    e.preventDefault();
    //validating user input
    const emailIsValid = enteredValues.email.includes("@gmail.com") || enteredValues.email.includes("@yahoo.com") ||enteredValues.email == ""
    const phoneNoIsvalid = enteredValues.phone.includes("+234") && enteredValues.phone.length == 15 ||enteredValues.phone.length == 14 || enteredValues.phone == ""
    const ageIsValid = enteredValues.age >=10 && enteredValues.age <=20
    if(!emailIsValid){
      setEmailIsInvalid(true)
      return;
    }
    else if(!phoneNoIsvalid){
      setphoneNoIsInvalid(true)
      return
    }
    else if(!ageIsValid){
      setAgeIsInvalid(true)
      return
    }
    //connect to database
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mjkbggkk',
      data: enteredValues,
    })
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });

  //clear form fields and error messages
    setAgeIsInvalid(false)
    setphoneNoIsInvalid(false)
    setEmailIsInvalid(false)
    setEnteredvalues(prevValues => ({
      ...prevValues,
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      Useraddress:"",
      phone:"",
      age: "",
      sex:""      
    }))
  }

  function handleInputChange(identifier, value) {
    setEnteredvalues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  }


  return (
    <div className="sm:px-10 px-5 py-20 bg-slate-700">
      <div className="bg-white md:px-16 sm:px-10 px-5 lg:w-[900px] w-full mx-auto rounded-xl py-10">
        <h1 className="text-center sm:text-[35px] text-[30px] font-semibold mb-1 ">
          Welcome on board!
        </h1>
        <p className="text-center sm:text-[18px] mb-10">
          We just need a little bit of data from you to get
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex gap-1 flex-col">
                <label htmlFor="firstname" className="font-medium ">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstname"
                  required
                  placeholder="John"
                  className="border px-3 py-2 rounded-md"
                  onChange={()=> handleInputChange("firstName", event.target.value)}
                  value={enteredValues.firstName}
                />
              </div>
              <div className="flex gap-1 flex-col">
                <label htmlFor="lastname" className="font-medium ">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastname"
                  required
                  placeholder="Doe"
                  className="border px-3 py-2 rounded-md"
                  onChange={()=> handleInputChange("lastName", event.target.value)}
                  value={enteredValues.lastName}
                />
              </div>
              <div className="flex gap-1 flex-col">
                <label htmlFor="email" className="font-medium ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="youremail@gmail.com"
                  className="border px-3 py-2 rounded-md"
                  onChange={()=> handleInputChange("email", event.target.value)}
                  value={enteredValues.email}
                />
                <div className="text-red-400">
                  {emailIsInvalid && <p>Please enter a valid email address</p>}
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <label htmlFor="phone" className="font-medium ">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  placeholder="+234 9050000000"
                  className="border px-3 py-2 rounded-md"
                  onChange={()=> handleInputChange("phone", event.target.value)}
                  value={enteredValues.phone}
                />
                <div className="text-red-400">
                  {phoneNoIsInvalid && <p>Please use the given phone format</p>}
                </div>
              </div>
              <div className="flex gap-1 flex-col sm:col-span-2">
                <label htmlFor="address" className="font-medium ">
                  Address
                </label>
                <input
                  type="text"
                  name="Useraddress"
                  id="address"
                  placeholder="No 17 EastWood Drive, NC Paris"
                  className="border px-3 py-2 rounded-md"
                  onChange={()=> handleInputChange("Useraddress", event.target.value)}
                  value={enteredValues.Useraddress}
                />
              </div>
              <div className="flex gap-1 flex-col">
                <label htmlFor="city" className="font-medium ">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Abuja"
                  className="border px-3 py-2 rounded-md"
                  onChange={()=> handleInputChange("city", event.target.value)}
                  value={enteredValues.city}
                />
              </div>
              <div className="flex gap-1 flex-col">
                <label htmlFor="age" className="font-medium ">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  required
                  placeholder="Select your age"
                  className="border px-3 py-2 rounded-md"
                  onChange={()=> handleInputChange("age", event.target.value)}
                  value={enteredValues.age}
                />
                <div className="text-red-400">
                  {ageIsInvalid && <p>Please input a valid age </p>}
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <label htmlFor="sex" className="font-medium">
                  Sex
                </label>
                <select
                  name="sex"
                  id="sex"
                  className="border px-3 py-2 rounded-md"
                  onChange={()=> handleInputChange("sex", event.target.value)}
                  value={enteredValues.sex}
                >
                  <option defaultValue="">Choose...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <button type="submit" disabled={status.submitting} className="px-7 py-3 bg-blue-600 rounded-lg mt-5 text-white">
            {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
            </button>
            <Link to="/">
              <button
                type="button"
                className="bg-black text-white px-9 py-3 rounded-lg block mt-2"
              >
                Back to Home
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Regsiter;

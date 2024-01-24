import React from "react";
import myPhoto from "/src/Govinda.jpg"

function Contact() {
  function whatsApp (){
    window.location.href = "https://wa.me/8691827914s"
  }
  function github (){
    window.location.href = 'https://github.com/mdpatil46'
  }
  return (
    <>
      <div className="w-screen h-screen bg-gray-900 pt-10 overflow-hidden">
        <div
          className="py-16 px-16 max-w-2xl mx-auto bg-gray-300

rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 my-12"
        >
          <img
            className="block mx-auto h-52 rounded-full sm:mx-0 sm:shrink-0"
            src={myPhoto}
            alt="This is real Hero"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-bold">
                 Govinda Patil
              </p>
              <p className="text-slate-500 font-medium"> Frontend Web Devloper</p>
            </div>
            <button
              onClick={whatsApp}
              className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              WhatsApp
            </button>
            <button
              
              className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Gmail
            </button>
            <button
              
              className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              onClick={github}
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

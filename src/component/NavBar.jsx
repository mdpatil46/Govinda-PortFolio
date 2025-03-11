import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {

  
  const [toOpen, settoClose] = useState(false);
  const [drop, setdropOpen] = useState(false);

  function dropMon() {
    settoClose(!toOpen);
  }

  function dropmenuopen() {
    setdropOpen(!drop);
  }

  function Resume (){
    window.location.href = "https://mdpatil46.github.io/Resume-/";
  }

  return (
    <>
      <nav className ="bg-black border-gray-200 dark:bg-gray-900 dark:border-gray-700 overflow-hidden">
        <div className ="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 overflow-x-hidden">
          <Link to="/" className ="flex items-center space-x-3 rtl:space-x-reverse hover:animate-spin">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM35.149 50C35.1467 48.3568 35.4171 46.7247 35.949 45.17C36.6763 43.0567 37.8707 41.1346 39.4433 39.5466C41.0159 37.9585 42.9262 36.7454 45.0322 35.9974C47.1382 35.2493 49.3858 34.9856 51.6078 35.2258C53.8297 35.4661 55.969 36.2041 57.8664 37.385L65.9664 30.755C61.6364 27.16 56.0739 25 50.0089 25C45.4255 24.9984 40.9299 26.2571 37.0136 28.6385C33.0974 31.0199 29.9114 34.4323 27.804 38.5025C25.8285 42.3135 24.8679 46.5691 25.0146 50.8591C25.1613 55.1492 26.4104 59.3292 28.6415 62.9964C30.8726 66.6636 34.0106 69.6944 37.753 71.7968C41.4955 73.8992 45.7164 75.0024 50.0089 75C55.7024 75.0088 61.2269 73.0658 65.6614 69.495C70.1511 65.892 73.2595 60.8497 74.4614 55.22C75.1551 51.9634 75.1925 48.6012 74.5714 45.33H50.5589V55.22H63.9264C62.7244 58.4153 60.4615 61.1009 57.5164 62.8275H57.5139C55.6446 63.9211 53.5588 64.593 51.4026 64.7962C49.2464 64.9994 47.0718 64.7289 45.0311 64.0038C42.9903 63.2787 41.1326 62.1165 39.588 60.5983C38.0434 59.0802 36.8492 57.2429 36.089 55.215C35.479 53.5925 35.149 51.835 35.149 50Z" fill="#17e655" id="id_101"></path>
</svg>
          </Link>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className ="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
            onClick={dropMon}
          >
            <span className ="sr-only">Open main menu</span>
            <svg
              className ="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            {toOpen && (
              <div
                className="flex justify-center items-center bg-gray-900 text-white text-5xl font-extrabold h-full w-full fixed top-0 right-0 overflow-hidden"
                style={{ zIndex: 9999 }}
              >
                <div className="p-4">
                  <ul>
                    <li>
                      <a href="/">About</a>
                    </li>
                    
                    {/* <li>
                      <a href="/">Services</a>
                    </li> */}
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                    
                        <button
                          type="button"
                          className ="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                          onClick={Resume}
                        >
                          Resume
                        </button>
                     
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </button>
          <div className ="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className ="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className ="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  About
                </Link>
              </li>

              {/* <li>
                <a
                  href="#"
                  className ="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li> */}
              <li>
                <Link
                  to="/Contact"
                  className ="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

"use client";
import React, { useState } from 'react';
import {
  FaTachometerAlt, FaUsersCog, FaBriefcase, FaCreditCard, FaBlog, FaSearch,
  FaQuestionCircle, FaFileAlt, FaEnvelope, FaCog, FaTicketAlt, FaQuestion,
  FaRegBookmark, FaBell, FaUser, FaShoppingCart, FaDollarSign
} from "react-icons/fa";
import { BsToggleOn } from "react-icons/bs";
import profileImg from "./image/profile.avif";
import Logo from "./image/images.jpg";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

const App = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(true);

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: "Sales",
      data: [20, 25, 30, 45, 50, 90, 70, 60, 40],
      fill: true,
      backgroundColor: "rgba(59,130,246,0.2)",
      borderColor: "#3B82F6",
      tension: 0.4
    }]
  };

  const doughnutData = {
    labels: ["Profit", "Buyer", "Reach-out"],
    datasets: [{
      data: [45, 25, 30],
      backgroundColor: ["#3B82F6", "#9CA3AF", "#000000"],
      borderWidth: 0
    }]
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100 overflow-auto">
      {/* Sidebar */}
     <div className="w-full lg:w-64 bg-blue-500 shadow-lg p-4 lg:p-6 flex lg:flex-col fixed bottom-0 lg:static z-50 lg:h-auto h-24 justify-around items-center lg:items-start">
  {/* Logo on desktop */}
  <div className="hidden lg:flex flex-col items-center">
    <img
      src={Logo}
      alt="INREXT Logo"
      className="w-30 h-30 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Sidebar Menu */}
  <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-0 text-white text-2xl lg:mt-0">
    {[
      ['Dashboard', FaTachometerAlt],
      ['Users', FaUsersCog],
      ['Location', FaBriefcase],
      ['Payment', FaCreditCard],
      ['Blog', FaBlog],
      ['About', FaSearch]
    ].map(([label, Icon]) => (
      <a key={label} href="#" className="flex items-center space-x-2 hover:opacity-70 py-1">
        <Icon className="text-2xl" />
        <span className="hidden lg:inline">{label}</span>
      </a>
    ))}

    {/* Help section for large screens */}
    <div className="hidden lg:block">
      <button onClick={() => setIsHelpOpen(!isHelpOpen)} className="flex items-center justify-between w-full hover:opacity-90 py-1">
        <div className="flex items-center space-x-2">
          <FaQuestionCircle className="text-2xl" />
          <span>Help</span>
        </div>
        <span className="text-xl">{isHelpOpen ? "🢁" : "🡻"}</span>
      </button>

      {isHelpOpen && (
        <div className="flex flex-col ml-4 mt-2 text-xl space-y-1">
          {[['Reports', FaFileAlt], ['Email', FaEnvelope], ['Settings', FaCog],
          ['Tickets', FaTicketAlt], ['FAQ', FaQuestion]].map(([label, Icon]) => (
            <a key={label} href="#" className="flex items-center space-x-2 hover:opacity-90">
              <Icon className="text-2xl" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-white">
        <div className="bg-blue-500 p-4 rounded-xl shadow-md text-white flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div>
            <p className="text-md font-medium">Welcome, Users 👋</p>
            <p className="text-sm">Here’s what happening with you today.</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaRegBookmark className="text-lg cursor-pointer" />
            <BsToggleOn className="text-2xl cursor-pointer" />
            <FaBell className="text-lg cursor-pointer" />
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img src={profileImg} alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {[['36,159', 'Customer', FaUser], ['3,159', 'Orders', FaShoppingCart], ['$6,159', 'Earning', FaDollarSign, true]]
            .map(([count, label, Icon, highlight], idx) => (
              <div key={idx} className={`p-4 rounded shadow ${highlight ? 'bg-blue-500 text-white' : 'bg-white'}`}>
                <div className="flex items-center space-x-4">
                  <Icon className={`${highlight ? 'text-white' : 'text-blue-500'} text-xl`} />
                  <div>
                    <h3 className="text-xl font-bold">{count}</h3>
                    <p className="text-sm">{label}</p>
                    <span className="text-xs text-gray-400">Since Last Month</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Charts and Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">+68.5%</h2>
            <Line data={lineData} />
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-lg font-bold mb-2">Top Product Sale</h3>
              <Doughnut data={doughnutData} />
              <div className="flex justify-around mt-4 text-xs sm:text-sm">
                <span className="text-blue-500">■ Profit</span>
                <span className="text-gray-500">■ Buyer</span>
                <span className="text-black">■ Reach-out</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold mb-4">Traffic Source</h3>
              <div className="text-xs sm:text-sm space-y-2">
                {[
                  ['inrext.com', 'w-[45%]', 'bg-blue-500'],
                  ['indrealty.com', 'w-[15%]', 'bg-black'],
                  ['estate.com', 'w-[40%]', 'bg-gray-400']
                ].map(([domain, width, color], idx) => (
                  <div key={idx}>
                    <span>{domain}</span>
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div className={`${color} h-2 rounded ${width}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white mt-6 p-4 rounded shadow text-center">
          <h3 className="text-lg font-bold mb-2">January 2025</h3>
          <div className="grid grid-cols-7 gap-2 text-xs sm:text-sm">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
              <span key={idx} className="text-gray-500">{day}</span>
            ))}
            {[5, 6, 7, 8, 9, 10, 11].map((date, idx) => (
              <span
                key={idx}
                className={`py-1 px-2 rounded-full ${date === 7 ? "bg-blue-500 text-white" : "text-gray-700"}`}
              >
                {date}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

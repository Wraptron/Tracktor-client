import React from "react";

const Step1 = ({formData, handleChange}) => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Dropdown for Program */}
      <div className="mb-6">
        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
          Program
        </label>
        <select
          id="program"
          name="program"
          value={formData.program || ""}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select Program
          </option>
          <option value="Program 1">Program 1</option>
          <option value="Program 2">Program 2</option>
        </select>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        {[
          { name: "Basic", icon: "!" },
          { name: "Official", icon: "⚙️" },
          { name: "Founder", icon: "👤" },
          { name: "Description", icon: "💬" },
        ].map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${
                index === 0 ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              {step.icon}
            </div>
            <span
              className={`ml-2 text-sm font-medium ${
                index === 0 ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {step.name}
            </span>
            {index < 3 && <div className="flex-1 h-px bg-gray-300 mx-4"></div>}
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name of the Startup */}
        <div>
          <label htmlFor="startup_name" className="block text-sm font-medium text-gray-700">
            Name of the Startup
          </label>
          <input
            type="text"
            id="startup_name"
            name="startup_name"
            value={formData.startup_name || ""}
            onChange={handleChange}
            placeholder="Enter name of the Startup"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Sector */}
        <div>
          <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
            Sector
          </label>
          <select
            id="sector"
            name="sector"
            value={formData.sector || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select Sector
            </option>
            <option value="Agriculture & Food">Agriculture & Food</option>
            <option value="Ecommerce & Retail">Ecommerce & Retail</option>
          </select>
        </div>

        {/* Startup Type */}
        <div>
          <label htmlFor="startup_type" className="block text-sm font-medium text-gray-700">
            Startup Type
          </label>
          <select
            id="startup_type"
            name="startup_type"
            value={formData.startup_type || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select Startup Type
            </option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
          </select>
        </div>

        {/* Startup Industry */}
        <div>
          <label htmlFor="startup_industry" className="block text-sm font-medium text-gray-700">
            Startup Industry
          </label>
          <select
            id="startup_industry"
            name="startup_industry"
            value={formData.startup_industry || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select Startup Industry
            </option>
            <option value="Fintech">Fintech</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>

        {/* Startup Technology */}
        <div>
          <label htmlFor="startup_tech" className="block text-sm font-medium text-gray-700">
            Startup Technology
          </label>
          <select
            id="startup_tech"
            name="startup_tech"
            value={formData.startup_tech || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select Startup Technology
            </option>
            <option value="AI & ML">AI & ML</option>
            <option value="IoT">IoT</option>
          </select>
        </div>

        {/* Cohort */}
        <div>
          <label htmlFor="cohort" className="block text-sm font-medium text-gray-700">
            Cohort
          </label>
          <input
            type="month"
            id="cohort"
            name="cohort"
            value={formData.cohort || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-8 text-center">
        <button
          type="button"
          className="w-full md:w-32 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
